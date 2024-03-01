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
  const employees = business.employees;
  for (const key in employees) {
    const employee = employees[key];
    employee.daysOfWeekWorking?.push('SAT', 'SUN');
  }
}
addWeekends();
async function addEmployees() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    const user = await response.json();
    console.log('user:', user);
  } catch (error) {
    console.error('error:', error);
  }
}
addEmployees();
