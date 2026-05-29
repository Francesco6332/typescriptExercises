import { LitElement, html, unsafeCSS } from "lit";
import '../../components/grid/grid';
import { employees } from "../../Employees";
import employeesPageStyles from './employeesPage.css?inline';

class EmployeesPage extends LitElement {
  static styles = unsafeCSS(employeesPageStyles);

  private navigateHome(event: Event) {
    event.preventDefault();
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: { path: "/" },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <main class="employees-page">
        <a href="/" class="back-link" @click=${this.navigateHome}>Back</a>
        <h2>Employees</h2>
        <grid-component class="employees-grid" columns="4" rows="${employees.length + 1}">
            <div class="grid-header">Name</div>
            <div class="grid-header">Department</div>
            <div class="grid-header">Age</div>
            <div class="grid-header">Salary</div>

            ${employees.map(employee => html`
              <div class="grid-cell">${employee.name}</div>
              <div class="grid-cell">${employee.department}</div>
              <div class="grid-cell">${employee.age}</div>
              <div class="grid-cell">${employee.salary}</div>
            `)}
          </grid-component>
        </main>`;
    }
}

customElements.define('employees-page', EmployeesPage);
