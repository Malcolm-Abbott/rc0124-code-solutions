'use strict';
const business = {
  opens: '0700h',
  closes: '1700h',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W'],
  employees: {
    malcolm: {
      position: 'Software Engineer',
      daysOfWeekWorking: ['M', 'W'],
    },
    alexa: {
      position: 'Data Analyst',
      daysOfWeekWorking: ['M', 'W'],
    },
    james: {
      position: 'Owner',
      daysOfWeekWorking: ['M', 'T', 'W'],
    },
    seamus: {
      position: 'Manager',
      daysOfWeekWorking: ['T', 'W'],
    },
  },
};
function addWeekends() {
  business.daysOpen.push('SAT', 'SUN');
  console.log('daysOpen:', business.daysOpen);
  const employees = business.employees;
  for (const key in employees) {
    let employee = employees[key];
    employee.daysOfWeekWorking?.push('SAT', 'SUN');
    console.log('employee:', employee);
  }
}
