import {LitElement, html, unsafeCSS } from "lit";
import '../../components/card/card';
import '../../components/grid/grid';
import { employees } from "../../Employees";
import { averageSalaryAll } from "../../exercises/departmentSalaryAvg";
import { filterByDepartment } from "../../scripts/departmentFiltering";
import avgSalaryByDepStyles from './avgSalaryByDep.css?inline';
import { formatCurrency } from "../../scripts/formatCurrency";
import { averageSalary } from "../../exercises/averageSalary";
import { filteringEmployees } from "../../exercises/ageFiltering";

const { salesEmployees, filteredEngineerEmployees, financeEmployees } = filterByDepartment(employees);

export class AverageSalaryByDepartmentPage extends LitElement {
    static styles = unsafeCSS(avgSalaryByDepStyles);

    navigateHome(event: Event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent("navigate", {
            detail: { path: "/" },
            bubbles: true,
            composed: true,
        }));
    }

    private renderAverageSalary() {
        const avgSalaryByDep= averageSalaryAll(filteredEngineerEmployees, financeEmployees, salesEmployees);
        return html`
            <div class="grid-cell">${formatCurrency(avgSalaryByDep.engineering)}</div>
            <div class="grid-cell">${formatCurrency(avgSalaryByDep.finance)}</div>
            <div class="grid-cell">${formatCurrency(avgSalaryByDep.sales)}</div>
        `;
    }

    private renderAverageSalaryByAgeGroup() {
        return html`
           <card-component name="0-30" subtitle="Age group" content="${formatCurrency(averageSalary(filteringEmployees(filteredEngineerEmployees, 0, 30)))}"></card-component>
           <card-component name="31-50" subtitle="Age group" content="${formatCurrency(averageSalary(filteringEmployees(filteredEngineerEmployees, 31, 50)))}"></card-component>
           <card-component name="51+" subtitle="Age group" content="${formatCurrency(averageSalary(filteringEmployees(filteredEngineerEmployees, 51)))}"></card-component>
        `;
    }

    render() {
        return html`
            <main class="average-salary-page">
                <a href="/" class="back-link" @click=${this.navigateHome.bind(this)}>Back</a>
                <section class="hero">
                    <p class="eyebrow">Exercise result</p>
                    <h1>Average Salary by Department</h1>
                </section>
                <section class="result">
                    <grid-component class="salary-grid" columns="3" rows="2">
                        <div class="grid-header">Engineering</div>
                        <div class="grid-header">Finance</div>
                        <div class="grid-header">Sales</div>
                        ${this.renderAverageSalary()}
                    </grid-component>
                </section>
                <section class="hero secondary-hero">
                    <p class="eyebrow">Exercise description</p>
                    <h2>Average Salary by Age Group</h2>
                </section>
                <section class="result cards-result">
                    <grid-component class="salary-grid" columns="3" rows="1">
                        ${this.renderAverageSalaryByAgeGroup()}
                    </grid-component>
                </section>
            </main>
        `;  
    }
}

customElements.define('average-salary-by-department-page', AverageSalaryByDepartmentPage);
