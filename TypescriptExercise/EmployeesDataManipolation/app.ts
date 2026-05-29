import { LitElement, html, unsafeCSS} from "lit";
import './components/card/card';
import './components/grid/grid';
import './pages/employeesPage/employeesPage';
import './pages/mostPaidEmployee/mostPaidEmployee';
import './pages/averageSalaryByDepartmentPage/avgSalaryByDep';
import './pages/sortByPage/sortByPage';
import { mostPaidByDepartment } from './exercises/mostPaidByDepartment';
import { employees } from './Employees';
import appStyles from './app.css?inline';
import { state } from "lit/decorators.js";
import { formatCurrency } from "./scripts/formatCurrency";


class App extends LitElement {
  static styles = unsafeCSS(appStyles);
  @state() private page = location.pathname;
  private readonly handlePopState = () => {
    this.page = location.pathname;
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('popstate', this.handlePopState);
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this.handlePopState);
    super.disconnectedCallback();
  }

  navigateTo(event: Event, path: string){
    event.preventDefault();
    this.goTo(path);
  }

  private goTo(path: string) {
    history.pushState(null, '', path);
    this.page = path;
  }

  private handlePageNavigate(event: CustomEvent<{ path: string }>) {
    this.goTo(event.detail.path);
  }

  render() {
    switch(this.page) {
      case '/employees':
        return html`<employees-page @navigate=${this.handlePageNavigate}></employees-page>`;
      case '/exercises/most-paid-employee':
        return html`
          <most-paid-employee @navigate=${this.handlePageNavigate}></most-paid-employee>
        `;
      case '/exercises/averageSalaryByDepartment':
        return html`
          <average-salary-by-department-page @navigate=${this.handlePageNavigate}></average-salary-by-department-page>
        `;
      case '/exercises/sortBy':
        return html`
          <sort-by-page @navigate=${this.handlePageNavigate}></sort-by-page>
        `;
      default:
        break;
    }

    return html`
      <main>
      
        <h1>Employees Data Manipulation</h1>
        <h2>Most Paid Employees by Department</h2>

        <grid-component columns="3" rows="1">
          <card-component name=${mostPaidByDepartment(employees, 'Engineering').name} subtitle=${mostPaidByDepartment(employees, 'Engineering').department} content=${formatCurrency(mostPaidByDepartment(employees, 'Engineering').salary)}></card-component>
          <card-component name=${mostPaidByDepartment(employees, 'Finance').name} subtitle=${mostPaidByDepartment(employees, 'Finance').department} content=${formatCurrency(mostPaidByDepartment(employees, 'Finance').salary)}></card-component>
          <card-component name=${mostPaidByDepartment(employees, 'Sales').name} subtitle=${mostPaidByDepartment(employees, 'Sales').department} content=${formatCurrency(mostPaidByDepartment(employees, 'Sales').salary)}></card-component>
        </grid-component>

        <section class="hero">
          <p class="eyebrow">Statistics for each department</p>
          <h1>Department Statistics</h1>
        </section>

        <section class="result">
          <grid-component columns="3" rows="1">
          </grid-component>
        </section>

        <div class="exercises">
          <h2>Employees</h2>
          <a href="/employees" class="exercise-link" @click=${(event: Event) => this.navigateTo(event, '/employees')}>View Employees Data</a>
        </div>

        <div class="exercises">
          <h2>Other Exercises</h2>
          <ul>
            <li><a href="/exercises/most-paid-employee" class="exercise-link" @click=${(event: Event) => this.navigateTo(event, '/exercises/most-paid-employee')}>Most Paid Employee</a></li>
            <li><a href="/exercises/averageSalaryByDepartment" class="exercise-link" @click=${(event: Event) => this.navigateTo(event, '/exercises/averageSalaryByDepartment')}>Average Salary by Department</a></li>
            <li><a href="/exercises/sortBy" class="exercise-link" @click=${(event: Event) => this.navigateTo(event, '/exercises/sortBy')}>Sort Employees exercises</a></li>
          </ul>
        </div>

      </main>
    `;
  }
}

customElements.define('employees-dashboard', App);
