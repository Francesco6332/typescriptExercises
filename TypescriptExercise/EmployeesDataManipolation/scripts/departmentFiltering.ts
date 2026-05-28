import { employees } from "../Employees";

export const filteredEngineerEmployees = employees.filter(f => f.department === 'Engineering');
export const financeEmployees = employees.filter(f => f.department === 'Finance');
export const salesEmployees = employees.filter(f => f.department === 'Sales');