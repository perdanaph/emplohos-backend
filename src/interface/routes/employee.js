const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');
const { upload } = require('../middlewares/fileUpload');

const router = express.Router();
const employeeController = new EmployeeController();

router.post(
  '/',
  upload,
  employeeController.createEmployee.bind(employeeController)
);

module.exports = router;
