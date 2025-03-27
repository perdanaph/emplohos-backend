const Employee = require('../entitites/Employee');

class GetEmployeeById {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute(id) {
    const existingEmployee = await this.employeeRepository.findById(id);
    if (!existingEmployee) {
      throw new Error('Employee not found');
    }

    return existingEmployee;
  }
}

module.exports = GetEmployeeById;
