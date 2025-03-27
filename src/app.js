const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./interface/routes/employee');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/employees', employeeRoutes);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello, Welcome to API hospital employees',
  });
});

module.exports = app;
