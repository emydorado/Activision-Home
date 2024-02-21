import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.shadowRoot.innerHTML = `
    <articulos-noticias imagen="hola" fecha="como" titulo="estas"></articulos-noticias>
    `;
	}
}

customElements.define('app-container', AppContainer);
