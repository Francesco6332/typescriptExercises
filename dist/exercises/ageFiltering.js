"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteringEmployees = filteringEmployees;
function filteringEmployees(employees, ageMin, ageMax) {
    return employees.filter(f => f.age >= ageMin && (ageMax === undefined || f.age <= ageMax));
}
