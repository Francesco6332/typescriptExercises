"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageSalary = averageSalary;
function averageSalary(filteredEmployees) {
    if (filteredEmployees.length === 0)
        return 0;
    let totalSalary = filteredEmployees.reduce((sum, e) => sum + e.salary, 0);
    return totalSalary / filteredEmployees.length;
}
