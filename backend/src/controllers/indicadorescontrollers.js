const pool = require('../db');

// FUNCIÓN PARA LLENAR EL INDICADOR DE ORGANICOS

const createIndicador1Organicos = async (req, res, next) => {
  try {
    const {
      enero1,
      febrero1,
      marzo1,
      abril1,
      mayo1,
      junio1,
      enero2,
      febrero2,
      marzo2,
      abril2,
      mayo2,
      junio2,
      totalenero,
      totalfebrero,
      totalmarzo,
      totalabril,
      totalmayo,
      totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i1_organicos (enero1, febrero1, marzo1, abril1, mayo1, junio1, enero2, febrero2, marzo2, abril2, mayo2, junio2, totalenero, totalfebrero, totalmarzo, totalabril, totalmayo, totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        enero1,
        febrero1,
        marzo1,
        abril1,
        mayo1,
        junio1,
        enero2,
        febrero2,
        marzo2,
        abril2,
        mayo2,
        junio2,
        totalenero,
        totalfebrero,
        totalmarzo,
        totalabril,
        totalmayo,
        totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

// FUNCIÓN PARA LLENAR EL INDICADOR DE COMERCIAL Y SERVICIOS

const createIndicador1Comercial = async (req, res, next) => {
  try {
    const {
      i1enero1,
      i1febrero1,
      i1marzo1,
      i1abril1,
      i1mayo1,
      i1junio1,
      i1enero2,
      i1febrero2,
      i1marzo2,
      i1abril2,
      i1mayo2,
      i1junio2,
      i1totalenero,
      i1totalfebrero,
      i1totalmarzo,
      i1totalabril,
      i1totalmayo,
      i1totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i1_comercial (i1enero1, i1febrero1, i1marzo1, i1abril1, i1mayo1, i1junio1, i1enero2, i1febrero2, i1marzo2, i1abril2, i1mayo2, i1junio2, i1totalenero, i1totalfebrero, i1totalmarzo, i1totalabril, i1totalmayo, i1totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i1enero1,
        i1febrero1,
        i1marzo1,
        i1abril1,
        i1mayo1,
        i1junio1,
        i1enero2,
        i1febrero2,
        i1marzo2,
        i1abril2,
        i1mayo2,
        i1junio2,
        i1totalenero,
        i1totalfebrero,
        i1totalmarzo,
        i1totalabril,
        i1totalmayo,
        i1totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador2Comercial = async (req, res, next) => {
  try {
    const {
      i2enero1,
      i2febrero1,
      i2marzo1,
      i2abril1,
      i2mayo1,
      i2junio1,
      i2enero2,
      i2febrero2,
      i2marzo2,
      i2abril2,
      i2mayo2,
      i2junio2,
      i2totalenero,
      i2totalfebrero,
      i2totalmarzo,
      i2totalabril,
      i2totalmayo,
      i2totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i2_comercial (i2enero1, i2febrero1, i2marzo1, i2abril1, i2mayo1, i2junio1, i2enero2, i2febrero2, i2marzo2, i2abril2, i2mayo2, i2junio2, i2totalenero, i2totalfebrero, i2totalmarzo, i2totalabril, i2totalmayo, i2totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i2enero1,
        i2febrero1,
        i2marzo1,
        i2abril1,
        i2mayo1,
        i2junio1,
        i2enero2,
        i2febrero2,
        i2marzo2,
        i2abril2,
        i2mayo2,
        i2junio2,
        i2totalenero,
        i2totalfebrero,
        i2totalmarzo,
        i2totalabril,
        i2totalmayo,
        i2totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador3Comercial = async (req, res, next) => {
  try {
    const {
      i3enero1,
      i3febrero1,
      i3marzo1,
      i3abril1,
      i3mayo1,
      i3junio1,
      i3totalenero,
      i3totalfebrero,
      i3totalmarzo,
      i3totalabril,
      i3totalmayo,
      i3totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i3_comercial (i3enero1, i3febrero1, i3marzo1, i3abril1, i3mayo1, i3junio1, i3totalenero, i3totalfebrero, i3totalmarzo, i3totalabril, i3totalmayo, i3totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
      [
        i3enero1,
        i3febrero1,
        i3marzo1,
        i3abril1,
        i3mayo1,
        i3junio1,
        i3totalenero,
        i3totalfebrero,
        i3totalmarzo,
        i3totalabril,
        i3totalmayo,
        i3totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador4Comercial = async (req, res, next) => {
  try {
    const {
      pregunta1,
      pregunta2,
      pregunta3,
      pregunta4,
      pregunta5,
      pregunta6,
      pregunta7,
      pregunta8,
    } = req.body;

    await pool.query(
      'INSERT INTO i4_comercial (pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        pregunta1,
        pregunta2,
        pregunta3,
        pregunta4,
        pregunta5,
        pregunta6,
        pregunta7,
        pregunta8,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador5Comercial = async (req, res, next) => {
  try {
    const {
      i5enero1,
      i5febrero1,
      i5marzo1,
      i5abril1,
      i5mayo1,
      i5junio1,
      i5enero2,
      i5febrero2,
      i5marzo2,
      i5abril2,
      i5mayo2,
      i5junio2,
      i5totalenero,
      i5totalfebrero,
      i5totalmarzo,
      i5totalabril,
      i5totalmayo,
      i5totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i5_comercial (i5enero1, i5febrero1, i5marzo1, i5abril1, i5mayo1, i5junio1, i5enero2, i5febrero2, i5marzo2, i5abril2, i5mayo2, i5junio2, i5totalenero, i5totalfebrero, i5totalmarzo, i5totalabril, i5totalmayo, i5totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i5enero1,
        i5febrero1,
        i5marzo1,
        i5abril1,
        i5mayo1,
        i5junio1,
        i5enero2,
        i5febrero2,
        i5marzo2,
        i5abril2,
        i5mayo2,
        i5junio2,
        i5totalenero,
        i5totalfebrero,
        i5totalmarzo,
        i5totalabril,
        i5totalmayo,
        i5totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

// FUNCIÓN PARA LLENAR EL INDICADOR DE INSTITUCIONES EDUCATIVAS

const createIndicador1IE = async (req, res, next) => {
  try {
    const {
      i1enero1,
      i1febrero1,
      i1marzo1,
      i1abril1,
      i1mayo1,
      i1junio1,
      i1enero2,
      i1febrero2,
      i1marzo2,
      i1abril2,
      i1mayo2,
      i1junio2,
      i1totalenero,
      i1totalfebrero,
      i1totalmarzo,
      i1totalabril,
      i1totalmayo,
      i1totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i1_educativas (i1enero1, i1febrero1, i1marzo1, i1abril1, i1mayo1, i1junio1, i1enero2, i1febrero2, i1marzo2, i1abril2, i1mayo2, i1junio2, i1totalenero, i1totalfebrero, i1totalmarzo, i1totalabril, i1totalmayo, i1totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i1enero1,
        i1febrero1,
        i1marzo1,
        i1abril1,
        i1mayo1,
        i1junio1,
        i1enero2,
        i1febrero2,
        i1marzo2,
        i1abril2,
        i1mayo2,
        i1junio2,
        i1totalenero,
        i1totalfebrero,
        i1totalmarzo,
        i1totalabril,
        i1totalmayo,
        i1totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador2IE = async (req, res, next) => {
  try {
    const {
      pregunta1,
      pregunta2,
      pregunta3,
      pregunta4,
      pregunta5,
      pregunta6,
      pregunta7,
      pregunta8,
    } = req.body;

    await pool.query(
      'INSERT INTO i2_educativas (pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        pregunta1,
        pregunta2,
        pregunta3,
        pregunta4,
        pregunta5,
        pregunta6,
        pregunta7,
        pregunta8,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador3IE = async (req, res, next) => {
  try {
    const {
      i3enero1,
      i3febrero1,
      i3marzo1,
      i3abril1,
      i3mayo1,
      i3junio1,
      i3enero2,
      i3febrero2,
      i3marzo2,
      i3abril2,
      i3mayo2,
      i3junio2,
      i3totalenero,
      i3totalfebrero,
      i3totalmarzo,
      i3totalabril,
      i3totalmayo,
      i3totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i3_educativas (i3enero1, i3febrero1, i3marzo1, i3abril1, i3mayo1, i3junio1, i3enero2, i3febrero2, i3marzo2, i3abril2, i3mayo2, i3junio2, i3totalenero, i3totalfebrero, i3totalmarzo, i3totalabril, i3totalmayo, i3totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i3enero1,
        i3febrero1,
        i3marzo1,
        i3abril1,
        i3mayo1,
        i3junio1,
        i3enero2,
        i3febrero2,
        i3marzo2,
        i3abril2,
        i3mayo2,
        i3junio2,
        i3totalenero,
        i3totalfebrero,
        i3totalmarzo,
        i3totalabril,
        i3totalmayo,
        i3totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador4IE = async (req, res, next) => {
  try {
    const {
      i4enero1,
      i4febrero1,
      i4marzo1,
      i4abril1,
      i4mayo1,
      i4junio1,
      i4enero2,
      i4febrero2,
      i4marzo2,
      i4abril2,
      i4mayo2,
      i4junio2,
      i4totalenero,
      i4totalfebrero,
      i4totalmarzo,
      i4totalabril,
      i4totalmayo,
      i4totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i4_educativas (i4enero1, i4febrero1, i4marzo1, i4abril1, i4mayo1, i4junio1, i4enero2, i4febrero2, i4marzo2, i4abril2, i4mayo2, i4junio2, i4totalenero, i4totalfebrero, i4totalmarzo, i4totalabril, i4totalmayo, i4totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i4enero1,
        i4febrero1,
        i4marzo1,
        i4abril1,
        i4mayo1,
        i4junio1,
        i4enero2,
        i4febrero2,
        i4marzo2,
        i4abril2,
        i4mayo2,
        i4junio2,
        i4totalenero,
        i4totalfebrero,
        i4totalmarzo,
        i4totalabril,
        i4totalmayo,
        i4totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador5IE = async (req, res, next) => {
  try {
    const {
      i5enero1,
      i5febrero1,
      i5marzo1,
      i5abril1,
      i5mayo1,
      i5junio1,
      i5enero2,
      i5febrero2,
      i5marzo2,
      i5abril2,
      i5mayo2,
      i5junio2,
      i5totalenero,
      i5totalfebrero,
      i5totalmarzo,
      i5totalabril,
      i5totalmayo,
      i5totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i5_educativas (i5enero1, i5febrero1, i5marzo1, i5abril1, i5mayo1, i5junio1, i5enero2, i5febrero2, i5marzo2, i5abril2, i5mayo2, i5junio2, i5totalenero, i5totalfebrero, i5totalmarzo, i5totalabril, i5totalmayo, i5totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i5enero1,
        i5febrero1,
        i5marzo1,
        i5abril1,
        i5mayo1,
        i5junio1,
        i5enero2,
        i5febrero2,
        i5marzo2,
        i5abril2,
        i5mayo2,
        i5junio2,
        i5totalenero,
        i5totalfebrero,
        i5totalmarzo,
        i5totalabril,
        i5totalmayo,
        i5totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

// FUNCIÓN PARA LLENAR EL INDICADOR DE EVENTOS MASIVOS

const createIndicador1EM = async (req, res, next) => {
  try {
    const {
      i1enero1,
      i1febrero1,
      i1marzo1,
      i1abril1,
      i1mayo1,
      i1junio1,
      i1enero2,
      i1febrero2,
      i1marzo2,
      i1abril2,
      i1mayo2,
      i1junio2,
      i1totalenero,
      i1totalfebrero,
      i1totalmarzo,
      i1totalabril,
      i1totalmayo,
      i1totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i1_masivos (i1enero1, i1febrero1, i1marzo1, i1abril1, i1mayo1, i1junio1, i1enero2, i1febrero2, i1marzo2, i1abril2, i1mayo2, i1junio2, i1totalenero, i1totalfebrero, i1totalmarzo, i1totalabril, i1totalmayo, i1totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i1enero1,
        i1febrero1,
        i1marzo1,
        i1abril1,
        i1mayo1,
        i1junio1,
        i1enero2,
        i1febrero2,
        i1marzo2,
        i1abril2,
        i1mayo2,
        i1junio2,
        i1totalenero,
        i1totalfebrero,
        i1totalmarzo,
        i1totalabril,
        i1totalmayo,
        i1totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador2EM = async (req, res, next) => {
  try {
    const { pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6 } =
      req.body;

    await pool.query(
      'INSERT INTO i2_masivos (pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, userid) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [
        pregunta1,
        pregunta2,
        pregunta3,
        pregunta4,
        pregunta5,
        pregunta6,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador3EM = async (req, res, next) => {
  try {
    const {
      i3enero1,
      i3febrero1,
      i3marzo1,
      i3abril1,
      i3mayo1,
      i3junio1,
      i3enero2,
      i3febrero2,
      i3marzo2,
      i3abril2,
      i3mayo2,
      i3junio2,
      i3totalenero,
      i3totalfebrero,
      i3totalmarzo,
      i3totalabril,
      i3totalmayo,
      i3totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i3_masivos (i3enero1, i3febrero1, i3marzo1, i3abril1, i3mayo1, i3junio1, i3enero2, i3febrero2, i3marzo2, i3abril2, i3mayo2, i3junio2, i3totalenero, i3totalfebrero, i3totalmarzo, i3totalabril, i3totalmayo, i3totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i3enero1,
        i3febrero1,
        i3marzo1,
        i3abril1,
        i3mayo1,
        i3junio1,
        i3enero2,
        i3febrero2,
        i3marzo2,
        i3abril2,
        i3mayo2,
        i3junio2,
        i3totalenero,
        i3totalfebrero,
        i3totalmarzo,
        i3totalabril,
        i3totalmayo,
        i3totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador4EM = async (req, res, next) => {
  try {
    const {
      i4enero1,
      i4febrero1,
      i4marzo1,
      i4abril1,
      i4mayo1,
      i4junio1,
      i4enero2,
      i4febrero2,
      i4marzo2,
      i4abril2,
      i4mayo2,
      i4junio2,
      i4totalenero,
      i4totalfebrero,
      i4totalmarzo,
      i4totalabril,
      i4totalmayo,
      i4totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i4_masivos (i4enero1, i4febrero1, i4marzo1, i4abril1, i4mayo1, i4junio1, i4enero2, i4febrero2, i4marzo2, i4abril2, i4mayo2, i4junio2, i4totalenero, i4totalfebrero, i4totalmarzo, i4totalabril, i4totalmayo, i4totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i4enero1,
        i4febrero1,
        i4marzo1,
        i4abril1,
        i4mayo1,
        i4junio1,
        i4enero2,
        i4febrero2,
        i4marzo2,
        i4abril2,
        i4mayo2,
        i4junio2,
        i4totalenero,
        i4totalfebrero,
        i4totalmarzo,
        i4totalabril,
        i4totalmayo,
        i4totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

// FUNCIÓN PARA LLENAR EL INDICADOR DE ENTIDADES PUBLICAS

const createIndicador1EP = async (req, res, next) => {
  try {
    const {
      i1enero1,
      i1febrero1,
      i1marzo1,
      i1abril1,
      i1mayo1,
      i1junio1,
      i1enero2,
      i1febrero2,
      i1marzo2,
      i1abril2,
      i1mayo2,
      i1junio2,
      i1totalenero,
      i1totalfebrero,
      i1totalmarzo,
      i1totalabril,
      i1totalmayo,
      i1totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i1_publicas (i1enero1, i1febrero1, i1marzo1, i1abril1, i1mayo1, i1junio1, i1enero2, i1febrero2, i1marzo2, i1abril2, i1mayo2, i1junio2, i1totalenero, i1totalfebrero, i1totalmarzo, i1totalabril, i1totalmayo, i1totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i1enero1,
        i1febrero1,
        i1marzo1,
        i1abril1,
        i1mayo1,
        i1junio1,
        i1enero2,
        i1febrero2,
        i1marzo2,
        i1abril2,
        i1mayo2,
        i1junio2,
        i1totalenero,
        i1totalfebrero,
        i1totalmarzo,
        i1totalabril,
        i1totalmayo,
        i1totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador2EP = async (req, res, next) => {
  try {
    const {
      i2enero1,
      i2febrero1,
      i2marzo1,
      i2abril1,
      i2mayo1,
      i2junio1,
      i2enero2,
      i2febrero2,
      i2marzo2,
      i2abril2,
      i2mayo2,
      i2junio2,
      i2totalenero,
      i2totalfebrero,
      i2totalmarzo,
      i2totalabril,
      i2totalmayo,
      i2totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i2_publicas (i2enero1, i2febrero1, i2marzo1, i2abril1, i2mayo1, i2junio1, i2enero2, i2febrero2, i2marzo2, i2abril2, i2mayo2, i2junio2, i2totalenero, i2totalfebrero, i2totalmarzo, i2totalabril, i2totalmayo, i2totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i2enero1,
        i2febrero1,
        i2marzo1,
        i2abril1,
        i2mayo1,
        i2junio1,
        i2enero2,
        i2febrero2,
        i2marzo2,
        i2abril2,
        i2mayo2,
        i2junio2,
        i2totalenero,
        i2totalfebrero,
        i2totalmarzo,
        i2totalabril,
        i2totalmayo,
        i2totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador3EP = async (req, res, next) => {
  try {
    const {
      i3enero1,
      i3febrero1,
      i3marzo1,
      i3abril1,
      i3mayo1,
      i3junio1,
      i3enero2,
      i3febrero2,
      i3marzo2,
      i3abril2,
      i3mayo2,
      i3junio2,
      i3totalenero,
      i3totalfebrero,
      i3totalmarzo,
      i3totalabril,
      i3totalmayo,
      i3totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i3_publicas (i3enero1, i3febrero1, i3marzo1, i3abril1, i3mayo1, i3junio1, i3enero2, i3febrero2, i3marzo2, i3abril2, i3mayo2, i3junio2, i3totalenero, i3totalfebrero, i3totalmarzo, i3totalabril, i3totalmayo, i3totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i3enero1,
        i3febrero1,
        i3marzo1,
        i3abril1,
        i3mayo1,
        i3junio1,
        i3enero2,
        i3febrero2,
        i3marzo2,
        i3abril2,
        i3mayo2,
        i3junio2,
        i3totalenero,
        i3totalfebrero,
        i3totalmarzo,
        i3totalabril,
        i3totalmayo,
        i3totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador4EP = async (req, res, next) => {
  try {
    const {
      pregunta1,
      pregunta2,
      pregunta3,
      pregunta4,
      pregunta5,
      pregunta6,
      pregunta7,
      pregunta8,
    } = req.body;

    await pool.query(
      'INSERT INTO i4_publicas (pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        pregunta1,
        pregunta2,
        pregunta3,
        pregunta4,
        pregunta5,
        pregunta6,
        pregunta7,
        pregunta8,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

// FUNCIÓN PARA LLENAR EL INDICADOR DE DESARROLLOS MULTIFAMILIARES

const createIndicador1DM = async (req, res, next) => {
  try {
    const {
      i1enero1,
      i1febrero1,
      i1marzo1,
      i1abril1,
      i1mayo1,
      i1junio1,
      i1enero2,
      i1febrero2,
      i1marzo2,
      i1abril2,
      i1mayo2,
      i1junio2,
      i1totalenero,
      i1totalfebrero,
      i1totalmarzo,
      i1totalabril,
      i1totalmayo,
      i1totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i1_multifamiliares (i1enero1, i1febrero1, i1marzo1, i1abril1, i1mayo1, i1junio1, i1enero2, i1febrero2, i1marzo2, i1abril2, i1mayo2, i1junio2, i1totalenero, i1totalfebrero, i1totalmarzo, i1totalabril, i1totalmayo, i1totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i1enero1,
        i1febrero1,
        i1marzo1,
        i1abril1,
        i1mayo1,
        i1junio1,
        i1enero2,
        i1febrero2,
        i1marzo2,
        i1abril2,
        i1mayo2,
        i1junio2,
        i1totalenero,
        i1totalfebrero,
        i1totalmarzo,
        i1totalabril,
        i1totalmayo,
        i1totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador2DM = async (req, res, next) => {
  try {
    const {
      pregunta1,
      pregunta2,
      pregunta3,
      pregunta4,
      pregunta5,
      pregunta6,
      pregunta7,
      pregunta8,
    } = req.body;

    await pool.query(
      'INSERT INTO i2_multifamiliares (pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        pregunta1,
        pregunta2,
        pregunta3,
        pregunta4,
        pregunta5,
        pregunta6,
        pregunta7,
        pregunta8,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador3DM = async (req, res, next) => {
  try {
    const {
      i3enero1,
      i3febrero1,
      i3marzo1,
      i3abril1,
      i3mayo1,
      i3junio1,
      i3enero2,
      i3febrero2,
      i3marzo2,
      i3abril2,
      i3mayo2,
      i3junio2,
      i3totalenero,
      i3totalfebrero,
      i3totalmarzo,
      i3totalabril,
      i3totalmayo,
      i3totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i3_multifamiliares (i3enero1, i3febrero1, i3marzo1, i3abril1, i3mayo1, i3junio1, i3enero2, i3febrero2, i3marzo2, i3abril2, i3mayo2, i3junio2, i3totalenero, i3totalfebrero, i3totalmarzo, i3totalabril, i3totalmayo, i3totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i3enero1,
        i3febrero1,
        i3marzo1,
        i3abril1,
        i3mayo1,
        i3junio1,
        i3enero2,
        i3febrero2,
        i3marzo2,
        i3abril2,
        i3mayo2,
        i3junio2,
        i3totalenero,
        i3totalfebrero,
        i3totalmarzo,
        i3totalabril,
        i3totalmayo,
        i3totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador4DM = async (req, res, next) => {
  try {
    const {
      i4enero1,
      i4febrero1,
      i4marzo1,
      i4abril1,
      i4mayo1,
      i4junio1,
      i4enero2,
      i4febrero2,
      i4marzo2,
      i4abril2,
      i4mayo2,
      i4junio2,
      i4totalenero,
      i4totalfebrero,
      i4totalmarzo,
      i4totalabril,
      i4totalmayo,
      i4totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i4_multifamiliares (i4enero1, i4febrero1, i4marzo1, i4abril1, i4mayo1, i4junio1, i4enero2, i4febrero2, i4marzo2, i4abril2, i4mayo2, i4junio2, i4totalenero, i4totalfebrero, i4totalmarzo, i4totalabril, i4totalmayo, i4totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i4enero1,
        i4febrero1,
        i4marzo1,
        i4abril1,
        i4mayo1,
        i4junio1,
        i4enero2,
        i4febrero2,
        i4marzo2,
        i4abril2,
        i4mayo2,
        i4junio2,
        i4totalenero,
        i4totalfebrero,
        i4totalmarzo,
        i4totalabril,
        i4totalmayo,
        i4totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

const createIndicador5DM = async (req, res, next) => {
  try {
    const {
      i5enero1,
      i5febrero1,
      i5marzo1,
      i5abril1,
      i5mayo1,
      i5junio1,
      i5enero2,
      i5febrero2,
      i5marzo2,
      i5abril2,
      i5mayo2,
      i5junio2,
      i5totalenero,
      i5totalfebrero,
      i5totalmarzo,
      i5totalabril,
      i5totalmayo,
      i5totaljunio,
    } = req.body;

    await pool.query(
      'INSERT INTO i5_multifamiliares (i5enero1, i5febrero1, i5marzo1, i5abril1, i5mayo1, i5junio1, i5enero2, i5febrero2, i5marzo2, i5abril2, i5mayo2, i5junio2, i5totalenero, i5totalfebrero, i5totalmarzo, i5totalabril, i5totalmayo, i5totaljunio, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
      [
        i5enero1,
        i5febrero1,
        i5marzo1,
        i5abril1,
        i5mayo1,
        i5junio1,
        i5enero2,
        i5febrero2,
        i5marzo2,
        i5abril2,
        i5mayo2,
        i5junio2,
        i5totalenero,
        i5totalfebrero,
        i5totalmarzo,
        i5totalabril,
        i5totalmayo,
        i5totaljunio,
        req.userId,
      ]
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error al insertar los datos:', err);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = {
  createIndicador1Organicos,

  createIndicador5Comercial,
  createIndicador4Comercial,
  createIndicador3Comercial,
  createIndicador2Comercial,
  createIndicador1Comercial,

  createIndicador1IE,
  createIndicador2IE,
  createIndicador3IE,
  createIndicador4IE,
  createIndicador5IE,

  createIndicador1EM,
  createIndicador2EM,
  createIndicador3EM,
  createIndicador4EM,

  createIndicador1EP,
  createIndicador2EP,
  createIndicador3EP,
  createIndicador4EP,

  createIndicador1DM,
  createIndicador2DM,
  createIndicador3DM,
  createIndicador4DM,
  createIndicador5DM,
};
