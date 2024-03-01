interface Employee {
  position: string;
  daysOfWeekWorking: string[];
}

interface Business {
  opens: string;
  closes: string;
  totalEmployees: number;
  daysOpen: string[];
  employees: {
    malcolm: Employee;
    alexa: Employee;
    james: Employee;
    seamus: Employee;
  };
}

const business: Business = {
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

function addWeekends(): void {
  business.daysOpen.push('SAT', 'SUN');
  console.log('daysOpen:', business.daysOpen);
  const employees = business.employees;
  for (const key in employees) {
    const employee: Employee = employees[key as keyof typeof employees];
    employee.daysOfWeekWorking?.push('SAT', 'SUN');
    console.log('employee:', employee);
  }
}

addWeekends();
