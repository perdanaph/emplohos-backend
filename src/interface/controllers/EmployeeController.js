const AddEmployee = require('../../domain/useCases/addEmployee');
const EmployeeRepository = require('../../infrastructure/repositories/EmployeeRepository');
const { createEmployeeSchema } = require('../requests/employeeRequest');
const { hashPassword } = require('../../helpers/bcyipt');

class EmployeeController {
  constructor() {
    this.employeeRepository = new EmployeeRepository();
    this.addEmployee = new AddEmployee(this.employeeRepository);
  }

  async createEmployee(req, res, next) {
    try {
      const { error, value } = createEmployeeSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      // Hash password
      value.password = await hashPassword(value.password);

      // Handle profile photo if uploaded
      if (req.file) {
        value.profilePhoto = req.file.path;
      }

      const employee = await this.addEmployee.execute(value);
      res.status(201).json({
        success: true,
        data: employee,
        message: 'Success add data employee',
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = EmployeeController;
