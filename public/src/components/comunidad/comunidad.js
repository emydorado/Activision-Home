class Comunidad extends HTMLElement {
	//Se ejecuta cuando la clase de crea
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['icono', 'nombre', 'usuario', 'texto'];
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
		<link rel="stylesheet" href="./src/components/comunidad/comunidad.css">

		<p>${this.icono || 'por defecto'}</p>
		<p class="nombre">${this.nombre || 'por defecto'}</p>
		<p class="usuario">${this.usuario || 'por defecto'}</p>
    <p class="texto">${this.texto || 'por defecto'}</p>
		`;
	}
}

customElements.define('comunidad-comentarios', Comunidad);
export default Comunidad;
