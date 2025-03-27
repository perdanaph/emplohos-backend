const AddEmployee = require('../../domain/useCases/addEmployee');
const EmployeeRepository = require('../../infrastructure/repositories/EmployeeRepository');
const {
  createEmployeeSchema,
  updateEmployeeSchema,
} = require('../requests/employeeRequest');
const { hashPassword } = require('../../helpers/bcyipt');
const UpdateEmployee = require('../../domain/useCases/updateEmployee');
const GetEmployeeById = require('../../domain/useCases/getEmployeeById');

class EmployeeController {
  constructor() {
    this.employeeRepository = new EmployeeRepository();
    this.addEmployee = new AddEmployee(this.employeeRepository);
    this.updateEmployee = new UpdateEmployee(this.employeeRepository);
    this.getEmployeeById = new GetEmployeeById(this.employeeRepository);
  }

  async createEmployee(req, res, next) {
    try {
      const { error, value } = createEmployeeSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      value.password = await hashPassword(value.password);

      // console.log(req.file);
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

  async changeEmployee(req, res, next) {
    try {
      const { id } = req.params;
      const { error, value } = updateEmployeeSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      if (value.password) {
        value.password = await hashPassword(value.password);
      }

      if (req.file) {
        value.profilePhoto = req.file.path;
      }

      const employee = await this.updateEmployee.execute(id, value);
      res.status(200).json({
        success: true,
        data: employee,
        message: 'Success update data employee',
      });
    } catch (err) {
      if (err.message === 'Employee not found') {
        return res.status(404).json({ error: err.message });
      }
      res.status(400).json({ error: err.message });
    }
  }

  async findEmployeeById(req, res) {
    const { id } = req.params;

    const employee = await this.getEmployeeById.execute(id);
    res.status(200).json({
      success: true,
      data: employee,
      message: 'Success get data employee',
    });
  }
}

module.exports = EmployeeController;
