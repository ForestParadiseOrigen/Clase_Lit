import { LitElement, html } from "lit-element";
import styleScss from './my-elementStyle';

export class MyElement extends LitElement {

    static get styles() {
        return [styleScss]
    }

    render() {
        return html`
            <div class="login-container-center">
                <div class="login-form">
                    <div class="login-header">
                        <h1>PUMAS DC.</h1>
                    </div>
                    <div class="login-main">
                        <input class="login-input" type="text" placeholder="Usuario"/>
                        <input class="login-input" type="password" placeholder="Password"/>
                    </div>
                    <div class="login-nav-bottom">
                        <button class="login-red-btn" type="submit">Ingresar</button>
                        <a class="login-link" href="#">Olvide mi contraseña</a>
                    </div>
                </div>
                <a href="dashboard.html">dashboard</a>
            </div>
        `
    }
}

customElements.define('my-element', MyElement);