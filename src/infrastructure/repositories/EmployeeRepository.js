const { prisma } = require('../../config/database');
const Employee = require('../../domain/entitites/Employee');

class EmployeeRepository {
  async create(employeeData) {
    const employee = await prisma.employee.create({
      data: employeeData,
    });
    return new Employee(employee);
  }

  async update(id, employeeData) {
    const employee = await prisma.employee.update({
      where: { id },
      data: employeeData,
    });
    return new Employee(employee);
  }

  async findByNik(nik) {
    const employee = await prisma.employee.findUnique({
      where: { nik },
    });
    return employee ? new Employee(employee) : null;
  }

  async findByEmail(email) {
    const employee = await prisma.employee.findUnique({
      where: { email },
    });
    return employee ? new Employee(employee) : null;
  }

  async findByUsername(username) {
    const employee = await prisma.employee.findUnique({
      where: { username },
    });
    return employee ? new Employee(employee) : null;
  }

  async findById(id) {
    const employee = await prisma.employee.findUnique({
      where: { id },
    });
    return employee ? new Employee(employee) : null;
  }
}

module.exports = EmployeeRepository;
