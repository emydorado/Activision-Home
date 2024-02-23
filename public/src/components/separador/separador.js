class Separador extends HTMLElement {
	//Se ejecuta cuando la clase de crea
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['titulo', 'texto', 'boton', 'imagen'];
	}

	// Se ejecuta cuando el componente se incrusta al DOM
	connectedCallback() {
		this.render();
	}

	// Da nuevo valor a las propiedades que queremos observar
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/separador/separador.css"/>

    <section id="todo">
		<section id="info">
    <p class="titulo">${this.titulo || 'por defecto'}</p>
		<p class="texto">${this.texto || 'por defecto'}</p>
		<button class="boton">${this.boton || 'por defecto'}</button>
    </section>
		<p class="imagen">${this.imagen || 'por defecto'}</p>
    </section>
		`;
	}
}

customElements.define('separador-info', Separador);
export default Separador;
