import { Employee } from "../EmployeeInterface";

export function mostPaidByDepartment(employees: Employee[], department: string): Employee {
    let employeeDepartment = employees.filter(e => e.department === department);
    if(employees.length === 0 && department.length === 0) {
        throw new Error("Employee array is empty or undefined");
    }
    let highestPaidEmployee: Employee = employeeDepartment[0];

    highestPaidEmployee = employeeDepartment.reduce((p, c) => p.salary > c.salary ? p : c);

    return highestPaidEmployee;
}