import { Employee } from "../EmployeeInterface";

export function filterByDepartment(employees: Employee[]): {
    filteredEngineerEmployees: Employee[];
    financeEmployees: Employee[];
    salesEmployees: Employee[];
} {
    return {
        filteredEngineerEmployees: employees.filter(f => f.department === 'Engineering'),
        financeEmployees: employees.filter(f => f.department === 'Finance'),
        salesEmployees: employees.filter(f => f.department === 'Sales')
    };
}
