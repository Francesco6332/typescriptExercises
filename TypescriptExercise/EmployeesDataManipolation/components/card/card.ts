import { LitElement, html, unsafeCSS } from "Lit";
import { property } from "lit/decorators.js";
import cardStyles from "./card.css?inline";
import { CardProps } from "./cardInterface";

class Card extends LitElement implements CardProps {
  static styles = unsafeCSS(cardStyles);

  @property({ type: String })
  name = "";

  @property({ type: String })
  subtitle = "";

  @property({ type: String })
  content = "";

  render() {
    return html`
      <div class="card">
        <h4>${this.subtitle}</h4>
        <h3>${this.name}</h3>
        ${this.content ? html`<p>${this.content}</p>` : null}
      </div>
    `;
  }
}

customElements.define("card-component", Card);