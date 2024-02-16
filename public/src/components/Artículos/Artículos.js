class Articulos extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ modo: 'open' });
	}

	static get observedAttributes() {
		return ['imagen', 'fecha', 'titulo'];
	}
}

customElements.define('articulos', Articulos);
export default Articulos;
