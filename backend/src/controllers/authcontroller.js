const pool = require('../db');
const bcrypt = require('bcrypt');
const { createAccessToken } = require('../libs/jwt');
const jwt = require('jsonwebtoken'); // Importa la biblioteca que contiene jwt.sign
const crypto = require('crypto');
const transporter = require('../config/mailer');

const signin = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);

  if (result.rowCount === 0) {
    return res.status(400).json({
      message:
        'Correo o contraseña incorrectos. Por favor, verifica tus credenciales.',
    });
  }

  const validPassword = await bcrypt.compare(password, result.rows[0].password);

  if (!validPassword) {
    return res.status(400).json({
      message:
        'Correo o contraseña incorrectos. Por favor, verifica tus credenciales.',
    });
  }

  const token = await createAccessToken({ id: result.rows[0].id });

  res.cookie('token', token, {
    //httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  const dictJson = {
    idsector: result.rows[0]['idsector'],
    nomestablecimiento: result.rows[0]['nomestablecimiento'],
  };
  return res.json(dictJson);
};

// FUNCIÓN PARA CREAR UN USUARIO

const signup = async (req, res, next) => {
  const {
    nit,
    idsector,
    nomestablecimiento,
    direccion,
    comuna,
    barrio,
    email,
    nomresponsable,
    numero,
    password,
  } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (nit, idsector, nomestablecimiento, direccion, comuna, barrio, email, nomresponsable, numero, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        nit,
        idsector,
        nomestablecimiento,
        direccion,
        comuna,
        barrio,
        email,
        nomresponsable,
        numero,
        passwordHash,
      ]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    res.cookie('token', token, {
      // httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code == '23505') {
      return res.status(400).json({
        message: 'el correo ya esta registrado',
      });
    }
    next(error);
  }
};

// FUNCIÓN PARA CERRAR SESIÓN

const signout = async (req, res, next) => {
  res.clearCookie('token');
  res.sendStatus(200);
};

const profile = async (req, res) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [
    req.userId,
  ]);
  return res.json(result.rows[0]);
};

// FUNCIÓN PARA CONSULTAR TODOS LOS SECTORES

const getAllSectores = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM sectores');
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA CONSULTAR TODOS LOS USUARIOS

const getAllUsers = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA COONSULTAR UN USUARIO POR ID

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: 'Usuario no encontrado',
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA ELIMINAR UN USUARIO

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    if (result.rowCount === 0)
      return res.status(404).json({
        message: 'Usuario no encontrado',
      });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA ACTUALIZAR UN USUARIO

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      nit,
      idsector,
      nomestablecimiento,
      direccion,
      comuna,
      barrio,
      email,
      nomresponsable,
      numero,
      password,
    } = req.body;

    const result = await pool.query(
      'UPDATE users SET nit = $1, idsector = $2, nomestablecimiento = $3, direccion = $4, comuna = $5, barrio = $6, email = $7, nomresponsable = $8, numero = $9, password = $10,  WHERE id = $12 RETURNING *',
      [
        nit,
        idsector,
        nomestablecimiento,
        direccion,
        comuna,
        barrio,
        email,
        nomresponsable,
        numero,
        password,
        id,
      ]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: 'usuario no encontrado',
      });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// FUNCIÓN PARA CAMBIAR CONTRASEÑA

const secretKey = 'tu_clave_secreta'; // Asegúrate de cambiar esto y mantenerlo seguro

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: 'El correo electrónico no se encuentra registrado' });
    }

    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

    const resetLink = `https://reportesgirscali.com/resetpassword/${token}`;

    await transporter.sendMail({
      from: 'josecampo1972@gmail.com',
      to: email,
      subject: 'Restablecimiento de contraseña Plataforma SGIRS',
      text: `Haz clic en el siguiente enlace para restablecer tu contraseña: ${resetLink}`,
    });

    res.status(200).json({
      message: 'Enlace de restablecimiento enviado por correo electrónico',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al enviar el correo electrónico de restablecimiento',
    });
  }
};

//RESETEAR CONTRASEÑA

const resetpassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;
    const decoded = jwt.verify(token, secretKey);

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password = $1 WHERE email = $2', [
      hashedPassword,
      decoded.email,
    ]);

    res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token inválido' });
  }
};

//

module.exports = {
  getUser,
  getAllSectores,
  getAllUsers,
  signup,
  deleteUser,
  updateUser,
  signin,
  signout,
  profile,
  forgetPassword,
  resetpassword,
};
