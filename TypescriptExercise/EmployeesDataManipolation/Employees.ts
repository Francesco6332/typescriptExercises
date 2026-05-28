import { Employee } from "./EmployeeInterface";
import { toEmployees } from "./types";
import { averageSalary } from "./exercises/averageSalary";
import { filteringEmployees } from "./exercises/ageFiltering";
import { salesEmployees, filteredEngineerEmployees, financeEmployees } from "./scripts/departmentFiltering";
import { sortBy } from "./exercises/sortBySalary";
import { averageSalaryAll } from "./exercises/departmentSalaryAvg";

export const employees: Employee[] = toEmployees([
    ["Johnny Depp",        "Finance",     45, 40_000],
    ["Quentin Tarantino",  "Sales",       24, 75_000],
    ["Barbara Streisand",  "Engineering", 32, 120_000],
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



console.log("Average salary (0-30):", averageSalary(filteringEmployees(0, 30)));
console.log("Average salary (31-50):", averageSalary(filteringEmployees(31, 50)));
console.log("Average salary (51+):", averageSalary(filteringEmployees(51)));
console.log("Sorted engineer employees by salary:", sortBy(filteredEngineerEmployees));
console.log("Average salary by department:", averageSalaryAll(filteredEngineerEmployees, financeEmployees, salesEmployees));




