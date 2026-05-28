import { Employee } from "../EmployeeInterface";
import { filteredEngineerEmployees } from "../scripts/departmentFiltering";

export function filteringEmployees(ageMin: number, ageMax?: number): Employee[] {
    return filteredEngineerEmployees.filter(f => f.age >= ageMin &&(ageMax === undefined || f.age <= ageMax));
}
