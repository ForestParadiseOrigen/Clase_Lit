import { LitElement, html } from "lit-element";

export class login_form extends LitElement {
    render() {
        return html `
            <input type="text" placeholder="Nombre">
        `;
    }
}

customElements.define('login-form', MyElement);
