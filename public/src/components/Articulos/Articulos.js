class Articulos extends HTMLElement {
	//Se ejecuta cuando la clase de crea
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['imagen', 'fecha', 'titulo'];
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
		<link rel="stylesheet" href="./src/components/Articulos/Articulos.css">
		<section id=articulo>
		<p>${this.imagen || 'por defecto'}</p>
		  <section id="info">
			<p class="fecha">${this.fecha || 'por defecto'}</p>
			<p class="titulo">${this.titulo || 'por defecto'}</p>
			<p class="leer-mas">LEER MÁS</p>
			</section>
		</section>
		`;
	}
}

customElements.define('articulos-noticias', Articulos);
export default Articulos;
