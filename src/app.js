const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./interface/routes/employee');
const errorHandler = require('./interface/middlewares/errorHandler');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/employees', employeeRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello, Welcome to API hospital employees',
  });
});

module.exports = app;
