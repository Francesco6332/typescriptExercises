import {LitElement, html} from "lit";

class SortByPage extends LitElement {

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
            <main class="sort-by-page">
                <a href="/" class="back-link" @click=${this.navigateHome}>Back</a>
                <h2>Sort Employees exercises</h2>
                <p>This page is under construction. Please check back later.</p>
            </main>
        `;
    }
}

customElements.define('sort-by-page', SortByPage);