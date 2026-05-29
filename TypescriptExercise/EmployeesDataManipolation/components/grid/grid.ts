import { LitElement, html} from 'Lit';
import './grid.css';

class Grid extends LitElement {
    render() {
        return html`
            <div class="grid">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('grid-component', Grid);