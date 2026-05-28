import { Employee } from "./EmployeeInterface";
export type Row = [string, string, number, number];

export const toEmployees = (rows: Row[]) => rows.map((r): Employee => ({ name: r[0], department: r[1], age: r[2], salary: r[3] }));

// type EmployeeKeys<T> = keyof Employee;