import { Employee } from "../EmployeeInterface";

export function filteringEmployees(employees: Employee[], ageMin: number, ageMax?: number): Employee[] {
    return employees.filter(f => f.age >= ageMin && (ageMax === undefined || f.age <= ageMax));
}
