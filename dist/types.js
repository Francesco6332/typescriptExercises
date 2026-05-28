"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEmployees = void 0;
const toEmployees = (rows) => rows.map((r) => ({ name: r[0], department: r[1], age: r[2], salary: r[3] }));
exports.toEmployees = toEmployees;
// type EmployeeKeys<T> = keyof Employee;
