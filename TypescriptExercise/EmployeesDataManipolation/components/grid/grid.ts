import { LitElement, html, unsafeCSS } from "lit";
import gridStyles from "./grid.css?inline";
import { GridProps } from "./gridInterface";
import { property } from "lit/decorators.js";

class Grid extends LitElement implements GridProps {
    @property({ type: Number })
    columns: number = 1;

    @property({ type: Number })
    rows: number = 1;

    static styles = unsafeCSS(gridStyles);

    render() {
        return html`
            <div class="grid" style="--grid-columns: ${this.columns}; --grid-rows: ${this.rows};">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('grid-component', Grid);
