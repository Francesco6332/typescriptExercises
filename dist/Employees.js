"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employees = void 0;
const types_1 = require("./types");
const averageSalary_1 = require("./exercises/averageSalary");
const ageFiltering_1 = require("./exercises/ageFiltering");
const departmentFiltering_1 = require("./scripts/departmentFiltering");
const sortBySalary_1 = require("./exercises/sortBySalary");
const departmentSalaryAvg_1 = require("./exercises/departmentSalaryAvg");
exports.employees = (0, types_1.toEmployees)([
    ["Johnny Depp", "Finance", 45, 40000],
    ["Quentin Tarantino", "Sales", 24, 75000],
    ["Barbara Streisand", "Engineering", 32, 120000],
    ["Meryl Streep", "Finance", 29, 55000],
    ["Emma Watson", "Finance", 34, 72000],
    ["Leonardo DiCaprio", "Sales", 41, 88000],
    ["Scarlett Johansson", "Engineering", 27, 105000],
    ["Keanu Reeves", "Engineering", 50, 102000],
    ["Natalie Portman", "Engineering", 37, 96000],
    ["Robert Downey Jr.", "Finance", 52, 95000],
    ["Samuel L. Jackson", "Sales", 60, 120000],
    ["Tom Hanks", "Engineering", 46, 78000],
    ["Jennifer Lawrence", "Engineering", 30, 58000],
    ["Morgan Freeman", "Engineering", 63, 98000],
    ["Anne Hathaway", "Sales", 28, 62000],
    ["Chris Evans", "Engineering", 33, 81000],
    ["Zendaya Coleman", "Engineering", 25, 54000],
    ["Denzel Washington", "Engineering", 18, 103000],
    ["Harrison Ford", "Engineering", 62, 102000],
    ["Gal Gadot", "Engineering", 31, 68000],
    ["Will Smith", "Engineering", 49, 85000],
]);
const { salesEmployees, filteredEngineerEmployees, financeEmployees } = (0, departmentFiltering_1.filterByDepartment)(exports.employees);
console.log("Average salary (0-30):", (0, averageSalary_1.averageSalary)((0, ageFiltering_1.filteringEmployees)(filteredEngineerEmployees, 0, 30)));
console.log("Average salary (31-50):", (0, averageSalary_1.averageSalary)((0, ageFiltering_1.filteringEmployees)(filteredEngineerEmployees, 31, 50)));
console.log("Average salary (51+):", (0, averageSalary_1.averageSalary)((0, ageFiltering_1.filteringEmployees)(filteredEngineerEmployees, 51)));
console.log("Sorted engineer employees by salary:", (0, sortBySalary_1.sortBy)(filteredEngineerEmployees));
console.log("Average salary by department:", (0, departmentSalaryAvg_1.averageSalaryAll)(filteredEngineerEmployees, financeEmployees, salesEmployees));
