import { Employee } from "../EmployeeInterface";

export function mostPaid(employees: Employee[]): Employee {
    let highestPaidEmployee: Employee = employees[0];
    
    if(!employees || employees.length === 0) {
        throw new Error("Employee array is empty or undefined");
    }
    highestPaidEmployee = employees.reduce((prev, curr) => prev.salary > curr.salary ? prev : curr);
    
    return highestPaidEmployee;
}