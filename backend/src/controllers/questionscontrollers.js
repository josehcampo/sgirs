const pool = require('../db');

// FUNCIÓN PARA CREAR UNA RESPUESTA

const createQuestion = async (req, res, next) => {
  const {
    pregunta1pdf,
    pregunta2pdf,
    pregunta3pdf,
    pregunta10pdf,
    pregunta12pdf,
    pregunta17pdf,
    pregunta23pdf,
    pregunta28pdf,
    pregunta31pdf,
    pregunta35pdf,
    pregunta40pdf,
    pregunta41pdf,
  } = req.files;
  const {
    pregunta1,
    pregunta2,
    pregunta3,
    pregunta4,
    pregunta5,
    pregunta6,
    pregunta7,
    pregunta8,
    pregunta9,
    pregunta10,
    pregunta11,
    pregunta12,
    pregunta13,
    pregunta14,
    pregunta15,
    pregunta17,
    pregunta18,
    pregunta19,
    pregunta20,
    pregunta21,
    pregunta22,
    pregunta23,
    pregunta24,
    pregunta25,
    pregunta26,
    pregunta28,
    pregunta29,
    pregunta30,
    pregunta31,
    pregunta32,
    pregunta33,
    pregunta35,
    pregunta36,
    pregunta37,
    pregunta39,
    pregunta40,
    pregunta41,
    pregunta16,
    pregunta27,
    pregunta34,
    pregunta38,
  } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO questions (pregunta1, pregunta1pdf, pregunta2, pregunta2pdf, pregunta3, pregunta3pdf, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, pregunta10pdf, pregunta11, pregunta12, pregunta12pdf, pregunta13, pregunta14, pregunta15, pregunta16, pregunta17, pregunta17pdf, pregunta18, pregunta19, pregunta20, pregunta21, pregunta22, pregunta23, pregunta23pdf, pregunta24, pregunta25, pregunta26, pregunta27, pregunta28, pregunta28pdf, pregunta29, pregunta30, pregunta31, pregunta31pdf, pregunta32, pregunta33, pregunta34, pregunta35, pregunta35pdf, pregunta36, pregunta37, pregunta38, pregunta39, pregunta40, pregunta40pdf, pregunta41, pregunta41pdf, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54) RETURNING *',
      [
        pregunta1,
        pregunta1pdf,
        pregunta2,
        pregunta2pdf,
        pregunta3,
        pregunta3pdf,
        pregunta4,
        pregunta5,
        pregunta6,
        pregunta7,
        pregunta8,
        pregunta9,
        pregunta10,
        pregunta10pdf,
        pregunta11,
        pregunta12,
        pregunta12pdf,
        pregunta13,
        pregunta14,
        pregunta15,
        pregunta16,
        pregunta17,
        pregunta17pdf,
        pregunta18,
        pregunta19,
        pregunta20,
        pregunta21,
        pregunta22,
        pregunta23,
        pregunta23pdf,
        pregunta24,
        pregunta25,
        pregunta26,
        pregunta27,
        pregunta28,
        pregunta28pdf,
        pregunta29,
        pregunta30,
        pregunta31,
        pregunta31pdf,
        pregunta32,
        pregunta33,
        pregunta34,
        pregunta35,
        pregunta35pdf,
        pregunta36,
        pregunta37,
        pregunta38,
        pregunta39,
        pregunta40,
        pregunta40pdf,
        pregunta41,
        pregunta41pdf,
        req.userId,
      ]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    if (error.code == '23505') {
      return res.status(409).json({
        error: 'Ya existe una respuesta del usuario',
      });
    }
    next(error);
  }
};

module.exports = {
  createQuestion,
};
