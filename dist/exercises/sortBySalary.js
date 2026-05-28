"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortBy = sortBy;
function sortBy(filteredEmployees) {
    if (filteredEmployees.length === 0)
        return [];
    return [...filteredEmployees].sort((p, s) => p.salary - s.salary);
}
