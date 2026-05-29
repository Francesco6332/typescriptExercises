import {LitElement, html, unsafeCSS} from "lit";
import "../../components/grid/grid";
import { employees } from "../../Employees";
import { sortByDepartmentAndSalary } from "../../exercises/sortBy";
import { formatCurrency } from "../../scripts/formatCurrency";
import sortByPageStyles from "./sortByPage.css?inline";
import { state } from "lit/decorators.js";

class SortByPage extends LitElement {
    static styles = unsafeCSS(sortByPageStyles);
    private readonly pageSize = 10;

    @state()
    private visibleCount = this.pageSize;

    private navigateHome(event: Event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent("navigate", {
            detail: { path: "/" },
            bubbles: true,
            composed: true,
        }));
    }

    private handleScroll(event: Event) {
        const container = event.currentTarget as HTMLElement;
        const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;

        if (distanceFromBottom > 48) {
            return;
        }

        this.visibleCount = Math.min(this.visibleCount + this.pageSize, employees.length);
    }

    private renderSortedByDepartmentAndSalary() {
        const sortedEmployees = sortByDepartmentAndSalary(employees).slice(0, this.visibleCount);

        return html`
            ${sortedEmployees.map(employee => html`
                <div class="grid-cell">${employee.name}</div>
                <div class="grid-cell">${employee.department}</div>
                <div class="grid-cell">${employee.age}</div>
                <div class="grid-cell salary">${formatCurrency(employee.salary)}</div>
            `)}
        `;
    }

    render() {
        return html`
            <main class="sort-by-page">
                <a href="/" class="back-link" @click=${this.navigateHome}>Back</a>
                <section class="hero">
                    <p class="eyebrow">Exercise result</p>
                    <h1>Sort Employees</h1>
                    <p class="subtitle">Employees sorted by department and salary. Showing ${Math.min(this.visibleCount, employees.length)} of ${employees.length}.</p>
                </section>
                <section class="result" @scroll=${this.handleScroll}>
                    <grid-component class="employees-grid" columns="4" rows="${Math.min(this.visibleCount, employees.length) + 1}">
                        <div class="grid-header">Name</div>
                        <div class="grid-header">Department</div>
                        <div class="grid-header">Age</div>
                        <div class="grid-header">Salary</div>

                        ${this.renderSortedByDepartmentAndSalary()}
                    </grid-component>
                </section>
            </main>
        `;
    }
}

customElements.define('sort-by-page', SortByPage);
