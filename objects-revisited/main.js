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
    const users = await response.json();
    console.log('users:', users);
    let i = 0;
    users.forEach((user) => {
      if (i >= 4) return;
      const weekDays = ['M', 'T', 'W'];
      let randomWeekDays = [...weekDays];
      randomWeekDays.length = Math.ceil(Math.random() * 3);
      business.employees[user.name] = {
        position: '',
        daysOfWeekWorking: [...randomWeekDays, 'SAT', 'SUN'],
        fullTime: false,
      };
      if (i === 0) business.employees[user.name].position = 'Accountant';
      if (i === 1) business.employees[user.name].position = 'Cashier';
      if (i === 2) business.employees[user.name].position = 'HR Representative';
      if (i === 3) business.employees[user.name].position = 'Assistant Manager';
      i++;
    });
    console.log('business.employees:', business.employees);
  } catch (error) {
    console.error('error:', error);
  }
}
addEmployees();
