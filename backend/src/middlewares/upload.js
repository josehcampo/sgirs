const multer = require('multer');
const path = require('path');

// Obtén la carpeta de destino desde una variable de entorno
const uploadDestination =
  process.env.UPLOAD_DESTINATION ||
  'C:/Users/josec/Documents/UAESP/PROYECTO_SGIRS - VERSION 1/backend/src/uploads';

// Configurar opciones de almacenamiento y nombre de archivo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, uploadDestination)); // Carpeta donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre del archivo en el servidor
  },
});

// Crear objeto multer con la configuración de almacenamiento
const upload = multer({ storage });

module.exports = upload;
