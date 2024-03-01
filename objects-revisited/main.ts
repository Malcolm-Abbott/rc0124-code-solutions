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
    const user: Response = await response.json();
    console.log('user:', user);
  } catch (error) {
    console.error('error:', error);
  }
}

addEmployees();
