const { z } = require('zod');

const signupSchema = z.object({
  nit: z
    .string({
      required_error: 'El nit es requerido',
    })
    .min(1)
    .max(12),
  nomestablecimiento: z
    .string({
      required_error: 'El nombre del establecimiento es requerido',
    })
    .min(1)
    .max(255),
  direccion: z
    .string({
      required_error: 'La direccion es requerida',
    })
    .min(1)
    .max(255),
  comuna: z
    .string({
      required_error: 'La comuna es requerida',
    })
    .min(1)
    .max(2, {
      message: 'La comuna no debe tener mas de 2 caracteres',
    }),
  barrio: z
    .string({
      required_error: 'el barrio es requerida',
    })
    .min(1)
    .max(255),
  email: z
    .string({
      required_error: 'El email es requerido',
      invalid_type_error: 'El email debe ser un texto',
    })
    .email({
      message: 'El email debe ser un email valido',
    }),
  nomresponsable: z
    .string({
      required_error: 'el nombre del responsable es requerido',
    })
    .min(1)
    .max(255),
  numero: z
    .string({
      required_error: 'el telefono es requerido',
    })
    .min(7, {
      message: 'El telefono debe tener al menos 7 caracteres',
    })
    .max(255),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
      invalid_type_error: 'La contraseña debe ser un texto',
    })
    .min(5, {
      message: 'La contraseña debe tener al menos 5 caracteres',
    })
    .max(255),
});

const signinSchema = z.object({
  email: z
    .string({
      required_error: 'El email es requerido',
      invalid_type_error: 'El email debe ser un texto',
    })
    .email({
      message: 'El email debe ser un email valido',
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
      invalid_type_error: 'La contraseña debe ser un texto',
    })
    .min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres',
    })
    .max(255, {
      message: 'La contraseña debe tener como maximo 255 caracteres',
    }),
});

module.exports = {
  signupSchema,
  signinSchema,
};
