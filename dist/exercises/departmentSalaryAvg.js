"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageSalaryAll = averageSalaryAll;
const averageSalary_1 = require("./averageSalary");
function averageSalaryAll(engineerEmployees, financeEmployees, salesEmployees) {
    return {
        engineering: (0, averageSalary_1.averageSalary)(engineerEmployees),
        finance: (0, averageSalary_1.averageSalary)(financeEmployees),
        sales: (0, averageSalary_1.averageSalary)(salesEmployees)
    };
}
