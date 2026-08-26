import { LitElement, html, unsafeCSS} from "lit";
import './components/card/card';
import './components/grid/grid';
import './pages/employeesPage/employeesPage';
import './pages/mostPaidEmployee/mostPaidEmployee';
import './pages/averageSalaryByDepartmentPage/avgSalaryByDep';
import './pages/sortByPage/sortByPage';
import './pages/employeeDetail/employeeDetails';
import { mostPaidByDepartment } from './exercises/mostPaidByDepartment';
import { employees } from './Employees';
import appStyles from './app.css?inline';
import { state } from "lit/decorators.js";
import { formatCurrency } from "./scripts/formatCurrency";
import { statistics } from "./exercises/statistics";


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
    if (this.page === path) {
      return;
    }

    history.pushState(null, '', path);
    this.page = path;
  }

  private handlePageNavigate(event: CustomEvent<{ path: string }>) {
    this.goTo(event.detail.path);
  }

  private renderDepartmentStatistics() {
    const {
      countEmployeesByDepartment,
      minimumSalaryByDepartment,
      maximumSalaryByDepartment,
      avgAge,
    } = statistics(employees);

    return ([
      ['Engineering', countEmployeesByDepartment.engineering, minimumSalaryByDepartment.engineering, maximumSalaryByDepartment.engineering, avgAge.engineering],
      ['Finance', countEmployeesByDepartment.finance, minimumSalaryByDepartment.finance, maximumSalaryByDepartment.finance, avgAge.finance],
      ['Sales', countEmployeesByDepartment.sales, minimumSalaryByDepartment.sales, maximumSalaryByDepartment.sales, avgAge.sales],
    ] as const).map(([department, count, minSalary, maxSalary, averageAge]) => html`
      <div class="grid-cell department-name">${department}</div>
      <div class="grid-cell">${count}</div>
      <div class="grid-cell">${formatCurrency(minSalary)}</div>
      <div class="grid-cell">${formatCurrency(maxSalary)}</div>
      <div class="grid-cell">${averageAge}</div>
    `);
  }

  @state() private searchSuggestions = [] as typeof employees;

  private searchEmployee(e: Event){
    const target = e.target as HTMLInputElement;
    const employeeName = target.value.trim().toLowerCase();

    if(!employeeName){
      this.searchSuggestions = [];
      return;
    }

    this.searchSuggestions = employees.filter(emp => emp.name.toLowerCase().includes(employeeName));
  }

  private selectEmployee(employeeName: string) {
    this.searchSuggestions = [];
    this.goTo('/employees/' + encodeURIComponent(employeeName));
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
        if (this.page.startsWith('/employees/')) {
          const employeeName = decodeURIComponent(this.page.replace('/employees/', ''));
          return html`
            <employee-details-page
              .employeeName=${employeeName}
              @navigate=${this.handlePageNavigate}
            ></employee-details-page>
          `;
        }
        break;
    }

    const departmentCards = ['Engineering', 'Finance', 'Sales'].map(department => {
      const employee = mostPaidByDepartment(employees, department);

      return html`
        <card-component
          name=${employee.name}
          subtitle=${employee.department}
          content=${formatCurrency(employee.salary)}
        ></card-component>
      `;
    });

    const searchSuggestions = html`
      <div class="search-suggestion" id="search-suggestion" ?hidden=${this.searchSuggestions.length === 0}>
        ${this.searchSuggestions.map(emp => html`
          <button
            type="button"
            class="search-suggestion-item"
            @click=${() => this.selectEmployee(emp.name)}
          >
            ${emp.name}
          </button>
        `)}
      </div>
    `;

    return html`
      <main>
        <h1>Employees Data Manipulation</h1>
        <h2>Most Paid Employees by Department</h2>

        <grid-component columns="3" rows="1">
          ${departmentCards}
        </grid-component>

        <section class="hero" style=${"margin-top: 50px;"}>
          <p class="eyebrow">Statistics for each department</p>
          <h1>Department Statistics</h1>
        </section>

        <section class="result">
          <grid-component class="statistics-grid" columns="5" rows="4">
            <div class="grid-header">Department</div>
            <div class="grid-header">Employees</div>
            <div class="grid-header">Min salary</div>
            <div class="grid-header">Max salary</div>
            <div class="grid-header">Avg age</div>

            ${this.renderDepartmentStatistics()}
          </grid-component>
        </section>

        <div class="exercises">
          <h2>Employees</h2>
          <a href="/employees" class="exercise-link" @click=${(event: Event) => this.navigateTo(event, '/employees')}>View Employees Data</a>
          or search for employees to see more details: 
          <div class="search-field">
            <input type="text" placeholder="Search..." ref="searchInput" @input=${(e: Event) => this.searchEmployee(e)} />
            ${searchSuggestions}
          </div>
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
