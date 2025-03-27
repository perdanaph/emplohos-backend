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
router.put(
  '/:id',
  upload,
  employeeController.changeEmployee.bind(employeeController)
);

router.get(
  '/:id',
  employeeController.findEmployeeById.bind(employeeController)
);

module.exports = router;
