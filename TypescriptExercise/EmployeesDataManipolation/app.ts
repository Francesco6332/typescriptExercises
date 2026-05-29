import {LitElement, html} from 'Lit';
import './components/card/card';
import './components/grid/grid';
import { mostPaidByDepartment } from './exercises/mostPaidByDepartment';
import { employees } from './Employees';


class App extends LitElement {
  render() {
    return html`
      <h1>Employees Data Manipulation</h1>
      <grid-component>
        <card-component name=${mostPaidByDepartment(employees, 'Engineering').name} subtitle=${mostPaidByDepartment(employees, 'Engineering').department} content=${mostPaidByDepartment(employees, 'Engineering').salary}></card-component>
        <card-component name=${mostPaidByDepartment(employees, 'Finance').name} subtitle=${mostPaidByDepartment(employees, 'Finance').department} content=${mostPaidByDepartment(employees, 'Finance').salary}></card-component>
        <card-component name=${mostPaidByDepartment(employees, 'Sales').name} subtitle=${mostPaidByDepartment(employees, 'Sales').department} content=${mostPaidByDepartment(employees, 'Sales').salary}></card-component>
      </grid-component>
    `;
  }
}

customElements.define('employees-dashboard', App);