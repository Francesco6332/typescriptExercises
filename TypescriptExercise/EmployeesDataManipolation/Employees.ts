import { Employee } from "./EmployeeInterface";
import { toEmployees } from "./types";
import { averageSalary } from "./exercises/averageSalary";
import { filteringEmployees } from "./exercises/ageFiltering";
import { filterByDepartment } from "./scripts/departmentFiltering";
import { sortEngineersBySalary } from "./exercises/sortBy";
import { averageSalaryAll } from "./exercises/departmentSalaryAvg";
import { mostPaid } from "./exercises/mostPaid";
import { mostPaidByDepartment } from "./exercises/mostPaidByDepartment";
import { sortByDepartmentAndSalary } from "./exercises/sortBy";
import { statistics } from "./exercises/statistics";

export const employees: Employee[] = toEmployees([
    ["Johnny Depp",        "Finance",     45, 40_000],
    ["Quentin Tarantino",  "Sales",       24, 75_000],
    ["Barbara Streisand",  "Engineering", 32, 110_000],
    ["Meryl Streep",       "Finance",     29, 55_000],
    ["Emma Watson",        "Finance",     34, 72_000],
    ["Leonardo DiCaprio",  "Sales",       41, 88_000],
    ["Scarlett Johansson", "Engineering", 27, 105_000],
    ["Keanu Reeves",       "Engineering", 50, 102_000],
    ["Natalie Portman",    "Engineering", 37, 96_000],
    ["Robert Downey Jr.",  "Finance",     52, 95_000],
    ["Samuel L. Jackson",  "Sales",       60, 120_000],
    ["Tom Hanks",          "Engineering", 46, 78_000],
    ["Jennifer Lawrence",  "Engineering", 30, 58_000],
    ["Morgan Freeman",     "Engineering", 63, 98_000],
    ["Anne Hathaway",      "Sales",       28, 62_000],
    ["Chris Evans",        "Engineering", 33, 81_000],
    ["Zendaya Coleman",    "Engineering", 25, 54_000],
    ["Denzel Washington",  "Engineering", 18, 103_000],
    ["Harrison Ford",      "Engineering", 62, 102_000],
    ["Gal Gadot",          "Engineering", 31, 68_000],
    ["Will Smith",         "Engineering", 49, 85_000],
])


const { salesEmployees, filteredEngineerEmployees, financeEmployees } = filterByDepartment(employees);

console.log("Average salary (0-30):", averageSalary(filteringEmployees(filteredEngineerEmployees, 0, 30)));
console.log("Average salary (31-50):", averageSalary(filteringEmployees(filteredEngineerEmployees, 31, 50)));
console.log("Average salary (51+):", averageSalary(filteringEmployees(filteredEngineerEmployees, 51)));
console.log("Sorted engineer employees by salary:", sortEngineersBySalary(filteredEngineerEmployees));
console.log("Average salary by department:", averageSalaryAll(filteredEngineerEmployees, financeEmployees, salesEmployees));
console.log("Most paid employee:", mostPaid(employees));
console.log("Most paid employee in Sales department:", mostPaidByDepartment(salesEmployees, "Sales"));
console.log("Most paid employee in Finance department:", mostPaidByDepartment(financeEmployees, "Finance"));
console.log("Most paid employee in Engineering department:", mostPaidByDepartment(filteredEngineerEmployees, "Engineering"));
console.log("Sorted employees by department and salary:", sortByDepartmentAndSalary(employees));
console.log("Statistics by department:", statistics(employees));
