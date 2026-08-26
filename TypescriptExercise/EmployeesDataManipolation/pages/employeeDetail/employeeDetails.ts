import { LitElement, html, unsafeCSS } from "lit";
import employeeDetailsStyles from './employeeDetails.css?inline';
import { employees } from "../../Employees";
import { property } from "lit/decorators.js";
import { formatCurrency } from "../../scripts/formatCurrency";

class EmployeeDetails extends LitElement {
    static styles = unsafeCSS(employeeDetailsStyles);
    @property() employeeName = '';

    private navigateHome(event: Event){
        event.preventDefault();
        this.dispatchEvent(new CustomEvent("navigate", {
            detail: { path: "/" },
            bubbles: true,
            composed: true,
        }));
    }

    private getEmployeeDetails(employeeName: string) {
        return employees.find(emp => emp.name === employeeName);
    }

    render() {
        const employee = this.getEmployeeDetails(this.employeeName);

        if (!employee) {
            return html`
            <main class="employee-details-page">
                <a href="/" class="back-link" @click=${this.navigateHome}>Back</a>
                <section class="details-card">
                    <h2>Employee not found</h2>
                    <p>No employee matches "${this.employeeName}".</p>
                </section>
            </main>`;
        }

        return html`
        <main class="employee-details-page">
            <a href="/" class="back-link" @click=${this.navigateHome}>Back</a>
            <section class="details-card">
                <h2>${employee.name}</h2>
                <dl class="employee-data">
                    <div>
                        <dt>Department</dt>
                        <dd>${employee.department}</dd>
                    </div>
                    <div>
                        <dt>Age</dt>
                        <dd>${employee.age}</dd>
                    </div>
                    <div>
                        <dt>Salary</dt>
                        <dd>${formatCurrency(employee.salary)}</dd>
                    </div>
                </dl>
            </section>
        </main>`;
    }
}

customElements.define('employee-details-page', EmployeeDetails);
