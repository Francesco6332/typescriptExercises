import { Employee } from "../EmployeeInterface";

export function sortEngineersBySalary(filteredEmployees: Employee[]): Employee[]{
    if(filteredEmployees.length === 0) return  [];
    return [...filteredEmployees].sort((p, s) => p.salary - s.salary);
}

export function sortByDepartmentAndSalary(employees: Employee[]): Employee[]{
    if(employees.length === 0) return  [];
    return [...employees].sort((d, s) => {
        if(d.department === s.department) return d.salary - s.salary;
        return d.department.localeCompare(s.department);
    });
}