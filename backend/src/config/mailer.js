const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'aprovechamiento.uaesp@cali.gov.co',
    pass: 'azpgkhormplqzayh',
  },
});

module.exports = transporter; // Asegúrate de exportar correctamente
