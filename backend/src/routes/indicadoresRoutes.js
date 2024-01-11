const { Router } = require('express');
const {
  createIndicador1Organicos,

  createIndicador1Comercial,
  createIndicador2Comercial,
  createIndicador3Comercial,
  createIndicador4Comercial,
  createIndicador5Comercial,

  createIndicador5IE,
  createIndicador4IE,
  createIndicador3IE,
  createIndicador2IE,
  createIndicador1IE,

  createIndicador1EM,
  createIndicador2EM,
  createIndicador3EM,
  createIndicador4EM,

  createIndicador1EP,
  createIndicador2EP,
  createIndicador3EP,
  createIndicador4EP,

  createIndicador5DM,
  createIndicador4DM,
  createIndicador3DM,
  createIndicador2DM,
  createIndicador1DM,
} = require('../controllers/indicadorescontrollers');

const { authRequired } = require('../middlewares/auth.middleware');

const indicadoresRouter = Router();
indicadoresRouter.post(
  '/indicadoresorganicos',
  authRequired,
  createIndicador1Organicos
);

indicadoresRouter.post(
  '/indicadorescomercial5',
  authRequired,
  createIndicador5Comercial
);
indicadoresRouter.post(
  '/indicadorescomercial4',
  authRequired,
  createIndicador4Comercial
);
indicadoresRouter.post(
  '/indicadorescomercial3',
  authRequired,
  createIndicador3Comercial
);
indicadoresRouter.post(
  '/indicadorescomercial2',
  authRequired,
  createIndicador2Comercial
);
indicadoresRouter.post(
  '/indicadorescomercial1',
  authRequired,
  createIndicador1Comercial
);

indicadoresRouter.post('/indicadoresie5', authRequired, createIndicador5IE);
indicadoresRouter.post('/indicadoresie4', authRequired, createIndicador4IE);
indicadoresRouter.post('/indicadoresie3', authRequired, createIndicador3IE);
indicadoresRouter.post('/indicadoresie2', authRequired, createIndicador2IE);
indicadoresRouter.post('/indicadoresie1', authRequired, createIndicador1IE);

indicadoresRouter.post('/indicadoresem4', authRequired, createIndicador4EM);
indicadoresRouter.post('/indicadoresem3', authRequired, createIndicador3EM);
indicadoresRouter.post('/indicadoresem2', authRequired, createIndicador2EM);
indicadoresRouter.post('/indicadoresem1', authRequired, createIndicador1EM);

indicadoresRouter.post('/indicadoreseP4', authRequired, createIndicador4EP);
indicadoresRouter.post('/indicadoreseP3', authRequired, createIndicador3EP);
indicadoresRouter.post('/indicadoreseP2', authRequired, createIndicador2EP);
indicadoresRouter.post('/indicadoreseP1', authRequired, createIndicador1EP);

indicadoresRouter.post('/indicadoresdm5', authRequired, createIndicador5DM);
indicadoresRouter.post('/indicadoresdm4', authRequired, createIndicador4DM);
indicadoresRouter.post('/indicadoresdm3', authRequired, createIndicador3DM);
indicadoresRouter.post('/indicadoresdm2', authRequired, createIndicador2DM);
indicadoresRouter.post('/indicadoresdm1', authRequired, createIndicador1DM);

module.exports = indicadoresRouter;
