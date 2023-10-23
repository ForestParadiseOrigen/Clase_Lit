import { LitElement, html } from "lit-element";
// import styleScss from './my-elementStyle';

export class Main extends LitElement {

    static get styles() {
        return [styleScss]
    }

    render() {
        return html`
            <h1>Hola</h1>`
    }
}

customElements.define('dashboard-main', Main);