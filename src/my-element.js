import {LitElement, html, css} from 'lit-element';

class MyElement extends LitElement {

    static get properties () {
        return {
            value: {
                type: String
            }
        }
    }
    static get styles () {
        return css`
                div {
                    text-transform: capitalize;
                    color: red;
                    font-size: var(--font-size, 24px);
                }
        `;
    }

    render() {
        return html`
      <div>${this.value}</div>
      
    `;
    }
}

customElements.define('my-element', MyElement);