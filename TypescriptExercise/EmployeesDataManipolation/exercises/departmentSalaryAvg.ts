import { Employee } from "../EmployeeInterface";
import { averageSalary } from "./averageSalary";

export function averageSalaryAll(engineerEmployees: Employee[], financeEmployees: Employee[], salesEmployees: Employee[]): {engineering: number, finance: number, sales: number} {
    return {
        engineering: averageSalary(engineerEmployees), 
        finance: averageSalary(financeEmployees),
        sales:  averageSalary(salesEmployees)
    }
}
