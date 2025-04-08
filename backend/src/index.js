const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const questionsRoutes = require('./routes/questionRoutes');
const indicadoresRoutes = require('./routes/indicadoresRoutes');
const { ORIGIN } = require('./config');

const app = express();
app.use(
  cors({
    origin:
      'https://reportesgirscali.com/' || 'https://www.reportesgirscali.com/',
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', questionsRoutes);
app.use('/api', indicadoresRoutes);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(4000);
console.log('Server on port 4000');
