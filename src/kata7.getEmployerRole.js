const getEmployerRole = (employeeName, employees) => {
  const role = employees.find((employee) => employee.name === employeeName);
  return role.role;
};

module.exports = getEmployerRole;
