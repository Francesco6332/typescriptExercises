import { Employee } from "../EmployeeInterface";

export function sortBy(filteredEmployees: Employee[]): Employee[]{
    if(filteredEmployees.length === 0) return  [];
    return [...filteredEmployees].sort((p, s) => p.salary - s.salary);
}
