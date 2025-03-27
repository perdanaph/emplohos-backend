const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');

const router = express.Router();
const employeeController = new EmployeeController();

router.post('/', employeeController.createEmployee.bind(employeeController));

module.exports = router;
