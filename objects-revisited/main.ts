interface Employee {
  position: string;
  daysOfWeekWorking: string[];
  fullTime?: boolean;
}

interface Business {
  opens: string;
  closes: string;
  totalEmployees: number;
  daysOpen: string[];
  employees: Record<string, Employee>;
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
  const employees = business.employees;
  for (const key in employees) {
    const employee: Employee = employees[key as keyof typeof employees];
    employee.daysOfWeekWorking?.push('SAT', 'SUN');
  }
}

addWeekends();

async function addEmployees(): Promise<void> {
  try {
    const response: Response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    const users = await response.json();
    console.log('users:', users);

    let i = 0;

    users.forEach((user: Record<string, string | number>) => {
      if (i >= 4) return;
      const weekDays = ['M', 'T', 'W'];
      const randomWeekDays = [...weekDays];
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
