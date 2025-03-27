const Employee = require('../entitites/Employee');

class AddEmployee {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute(employeeData) {
    const existingByNik = await this.employeeRepository.findByNik(
      employeeData.nik
    );
    if (existingByNik) {
      throw new Error('Employee with this NIK already exists');
    }

    const existingByEmail = await this.employeeRepository.findByEmail(
      employeeData.email
    );
    if (existingByEmail) {
      throw new Error('Employee with this email already exists');
    }

    const existingByUsername = await this.employeeRepository.findByUsername(
      employeeData.username
    );
    if (existingByUsername) {
      throw new Error('Employee with this username already exists');
    }

    const newEmployee = new Employee(employeeData);
    return this.employeeRepository.create(newEmployee);
  }
}

module.exports = AddEmployee;
