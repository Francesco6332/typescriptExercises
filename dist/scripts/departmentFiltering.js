"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByDepartment = filterByDepartment;
function filterByDepartment(employees) {
    return {
        filteredEngineerEmployees: employees.filter(f => f.department === 'Engineering'),
        financeEmployees: employees.filter(f => f.department === 'Finance'),
        salesEmployees: employees.filter(f => f.department === 'Sales')
    };
}
