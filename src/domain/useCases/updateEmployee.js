const Employee = require('../entitites/Employee');

class UpdateEmployee {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute(id, employeeData) {
    const existingEmployee = await this.employeeRepository.findById(id);
    if (!existingEmployee) {
      throw new Error('Employee not found');
    }

    if (employeeData.nik && employeeData.nik !== existingEmployee.nik) {
      const existingByNik = await this.employeeRepository.findByNik(
        employeeData.nik
      );
      if (existingByNik) {
        throw new Error('Employee with this NIK already exists');
      }
    }

    if (employeeData.email && employeeData.email !== existingEmployee.email) {
      const existingByEmail = await this.employeeRepository.findByEmail(
        employeeData.email
      );
      if (existingByEmail) {
        throw new Error('Employee with this email already exists');
      }
    }
    if (
      employeeData.username &&
      employeeData.username !== existingEmployee.username
    ) {
      const existingByUsername = await this.employeeRepository.findByUsername(
        employeeData.username
      );
      if (existingByUsername) {
        throw new Error('Employee with this username already exists');
      }
    }

    const updatedEmployee = new Employee({
      ...existingEmployee,
      ...employeeData,
    });
    return this.employeeRepository.update(id, updatedEmployee);
  }
}

module.exports = UpdateEmployee;
