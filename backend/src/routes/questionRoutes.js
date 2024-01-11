const { Router } = require('express');
const { createQuestion } = require('../controllers/questionscontrollers');
const upload = require('../middlewares/upload.js');
const { authRequired } = require('../middlewares/auth.middleware');

const questionRouter = Router();

questionRouter.post(
  '/questions',
  // Middleware para autenticación requerida
  upload.fields([
    { name: 'pregunta1pdf', maxCount: 1 },
    { name: 'pregunta2pdf', maxCount: 1 },
    { name: 'pregunta3pdf', maxCount: 1 },
    { name: 'pregunta10pdf', maxCount: 1 },
    { name: 'pregunta12pdf', maxCount: 1 },
    { name: 'pregunta17pdf', maxCount: 1 },
    { name: 'pregunta23pdf', maxCount: 1 },
    { name: 'pregunta28pdf', maxCount: 1 },
    { name: 'pregunta31pdf', maxCount: 1 },
    { name: 'pregunta35pdf', maxCount: 1 },
    { name: 'pregunta40pdf', maxCount: 1 },
    { name: 'pregunta41pdf', maxCount: 1 },
  ]),
  authRequired,
  createQuestion
);

module.exports = questionRouter;
