const multer = require('multer');
const path = require('path');

// Obtén la carpeta de destino desde una variable de entorno
//const uploadDestination = process.env.UPLOAD_DESTINATION || 'uploads';

// Configurar opciones de almacenamiento y nombre de archivo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('/home/ubuntu/proyecto_sgirs/backend/src/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // Ajusta el límite según tus necesidades
  fileFilter: function (req, file, cb) {
    // Añade lógica de filtro si es necesario
    cb(null, true);
  },
});

module.exports = upload;
