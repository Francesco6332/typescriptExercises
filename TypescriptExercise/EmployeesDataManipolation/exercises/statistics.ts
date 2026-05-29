import { filterByDepartment } from "../scripts/departmentFiltering";
import { Employee } from "../EmployeeInterface";

export function statistics (employees: Employee[]) {
    const { filteredEngineerEmployees, financeEmployees, salesEmployees } = filterByDepartment(employees);
    const countEmployeesByDepartment = {
        engineering: filteredEngineerEmployees.length,
        finance: financeEmployees.length,
        sales: salesEmployees.length,
    };

    return {
        countEmployeesByDepartment,
        minimumSalaryByDepartment: minimumSalaryByDepartment(filteredEngineerEmployees, financeEmployees, salesEmployees),
        maximumSalaryByDepartment: maximumSalaryByDepartment(filteredEngineerEmployees, financeEmployees, salesEmployees),
        avgAge: avgAge(filteredEngineerEmployees, financeEmployees, salesEmployees),
    };
}

function minimumSalaryByDepartment(filteredEngineerEmployees: Employee[], financeEmployees: Employee[], salesEmployees: Employee[]){
    const minSalaryByDepartment = {
        engineering: Math.min(...filteredEngineerEmployees.map(employee => employee.salary)),
        finance: Math.min(...financeEmployees.map(employee => employee.salary)),
        sales: Math.min(...salesEmployees.map(employee => employee.salary)),
    }
    return minSalaryByDepartment;
}

function maximumSalaryByDepartment(filteredEngineerEmployees: Employee[], financeEmployees: Employee[], salesEmployees: Employee[]) {
    const maxSalaryByDepartment = {
        engineering: Math.max(...filteredEngineerEmployees.map(e => e.salary)),
        finance: Math.max(...financeEmployees.map(e => e.salary)),
        sales: Math.max(...salesEmployees.map(e => e.salary)),
    }
    return maxSalaryByDepartment;   
}

function avgAge(filteredEngineerEmployees: Employee[], financeEmployees: Employee[], salesEmployees: Employee[]){
    const avgAgeByDepartment = {
        engineering: Math.round(filteredEngineerEmployees.reduce((prev, curr) => prev + curr.age, 0) / filteredEngineerEmployees.length),
        finance: Math.round(financeEmployees.reduce((prev, curr) => prev + curr.age, 0) / financeEmployees.length),
        sales: Math.round(salesEmployees.reduce((prev, curr) => prev + curr.age, 0) / salesEmployees.length),
    }
    return avgAgeByDepartment;
}
