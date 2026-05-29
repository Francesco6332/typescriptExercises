import {html, LitElement, unsafeCSS} from 'lit';
import { mostPaid } from '../../exercises/mostPaid';
import { employees } from '../../Employees';
import '../../components/card/card';
import mostPaidEmployeeStyles from './mostPaidEmployee.css?inline';

export class MostPaidEmployee extends LitElement {
    static styles = unsafeCSS(mostPaidEmployeeStyles);

    navigateHome(event: Event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent("navigate", {
            detail: { path: "/" },
            bubbles: true,
            composed: true,
        }));
    }

    render(){
        return html`
            <main class="most-paid-employee">
                <a href="/" class="back-link" @click=${this.navigateHome.bind(this)}>Back</a>
                <section class="hero">
                    <p class="eyebrow">Exercise result</p>
                    <h1>Most Paid Employee</h1>
                </section>
                <section class="result">
                    <card-component name=${mostPaid(employees).name} subtitle=${mostPaid(employees).department} content=${mostPaid(employees).salary}></card-component>
                </section>
            </main>
        `;
    }
}

customElements.define('most-paid-employee', MostPaidEmployee);
