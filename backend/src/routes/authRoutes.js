const { Router } = require('express');

const {
  signin,
  signout,
  profile,
  getAllSectores,
  getAllUsers,
  getUser,
  signup,
  deleteUser,
  updateUser,
} = require('../controllers/authcontroller');

const { authRequired } = require('../middlewares/auth.middleware');
const { validateSchema } = require('../middlewares/validate.middleware.js');
const { signinSchema, signupSchema } = require('../schemas/auth.schema.js');

const router = Router();

router.post('/signin', validateSchema(signinSchema), signin);

router.post('/signup', validateSchema(signupSchema), signup);

router.post('/signout', signout);

router.get('/profile', authRequired, profile);

router.get('/consultarsectores', getAllSectores);

router.get('/consultarusuarios', getAllUsers);

router.get('/consultarusuario/:id', getUser);

router.delete('/eliminarusuario/:id', deleteUser);

router.put('/actualizarusuario/:id', updateUser);

module.exports = router;
