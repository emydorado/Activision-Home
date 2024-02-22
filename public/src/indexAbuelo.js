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
<link rel="stylesheet" href="./index.css" />

<nav id="barra">
<img src="imagenes/activision-logo.png" height="30px"/>
  <section class="links">
	<a>JUEGOS</a>
	<a>ACERCA DE</a>
	<a>TRABAJO</a>
	<a>SOPORTE</a>
	</section>
	<section id="registro">
	<button class="registrarse">REGISTRARSE</button>
	<a class="iniciar-seisón">INICIAR SESIÓN</a>
	</section>
</nav>

<section id="info-header">
<img src="./imagenes/logo-crash.png" height="270px">
<h1>RESÉRVALO YA Y CONSIGUE EL ASPECTO RETRO DE TAWNA</h1>
  <section id="botones">
	<button class="comprar">COMPRAR AHORA</button>
	<button class="visitar">VISITAR SITIO</button>
	</section>
</section>

<header>
<video playsinline loop muted autoplay class=video-banner>
<source src="./imagenes/video.mp4" type="video/mp4">
</video>
</header>

<h1>ÚLTIMAS NOTICIAS</h1>
<nav id=secciones>
<a>ALL NEWS</a>
<img src="imagenes/activision-logo.png" height="20px"/>

</nav>

<section class="articulos1">
    <articulos-noticias
		imagen="<img src='./imagenes/Articulo1.jpg'/>"
		fecha="FEB 02, 2024"
		titulo="Presentamos Dragón Lunar, la Temporada 2 de Call of Duty: Mobile">
		</articulos-noticias>

		<articulos-noticias
		imagen="<img src='./imagenes/articulo2.jpeg'/>"
		fecha="FEB 01, 2024"
		titulo="¡Revelado el contenido de la Temporada 2 de <em>Modern Warfare III</em>!">
		</articulos-noticias>

		<articulos-noticias
		imagen="<img src='./imagenes/articulo3.jpeg'/>"
		fecha="JAN 29, 2024"
		titulo="Actualización de <em>Call of Duty</em>: una mirada al interior de la búsqueda de partidas">
		</articulos-noticias>
</section>

<section class="articulos2">
		<section class="comp-articulos-noticias">
		<articulos-noticias
		imagen="<img src='./imagenes/articulo4.jpeg'/>"
		fecha="JAN 23, 2024"
		titulo="<em>Call of Duty</em> realiza cambios en el Código de conducta y detalla datos de moderación">
		</articulos-noticias>
		</section>

		<articulos-noticias
		imagen="<img src='./imagenes/artiuclo5.jpeg'/>"
		fecha="JAN 10, 2024"
		titulo="Lanzamiento de contenido de <em>Modern Warfare Il</em>:Temporada 1 Recargada">
		</articulos-noticias>

		<articulos-noticias
		imagen="<img src='./imagenes/articulo6.jpeg'/>"
		fecha="JAN 08, 2024"
		titulo="Presentamos la Temporada 1 de <em>
		Call of Duty: Mobile</em>, "Cuentos de guerra"">
		</articulos-noticias>
		</section>
</section>
  `;
	}
}

customElements.define('app-container', AppContainer);
