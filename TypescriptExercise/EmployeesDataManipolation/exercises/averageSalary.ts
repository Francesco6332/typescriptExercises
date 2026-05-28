import { Employee } from "../EmployeeInterface";

export function averageSalary(filteredEmployees: Employee[]): number {
    if(filteredEmployees.length === 0) return 0;
    let totalSalary = filteredEmployees.reduce((sum, e) => sum + e.salary, 0)
    return totalSalary / filteredEmployees.length;
}
