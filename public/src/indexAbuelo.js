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
	<a>JUEGOS <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#8e8e8e" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></a>
	<a>ACERCA DE <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#8e8e8e" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></a>
	<a>TRABAJO <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#8e8e8e" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></a>
	<a>SOPORTE <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#8e8e8e" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></a>
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

<h1 class="ultimas-not">ÚLTIMAS NOTICIAS</h1>
<nav id=secciones>
<a class="all-news">ALL NEWS</a>
<img src="imagenes/activision-logo.png" height="25px"/>
<img src="./imagenes/cod-logo.PNG" height="25px">
<img src="./imagenes/tony-log.PNG" height="40px">
<img src="./imagenes/crash-logo-mini.png" height="50px">
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
<button class="ver-todo">VER TODO</button>
</section>

<section id="separadores">
<separador-info
    titulo="¡ESTAMOS AQUÍ PARA AYUDAR!"
    texto="Obtén respuestas a las preguntas más frecuentes, comprueba el estado del servidor y contacta con alguien experto en asistencia técnica."
    boton="VISITAR SERVICIO TÉCNICO"
    imagen="<img src='./imagenes/separador1.jpg'/>">
</separador-info>
</section>

<section id="comunidad">
<h1 class="comunidad">COMUNIDAD</h1>
<comunidad-comentarios

icono="<img src='./imagenes/icono.jpeg'>"
nombre="Raven Software"
usuario="@RavenSoftware"

texto="Time for a #Warzone community poll! Zombie Power Ups have been in Fortune's Keep over the past two weeks, which got us thinking... How would you like to see them in Urzikstan as well for the next two weeks? Please vote on one of the following options:">
<img src="./imagenes/logox.png">
</comunidad-comentarios>

<comunidad-comentarios
icono="<img src='./imagenes/icono.jpeg'>"
nombre="Raven Software"
usuario="@RavenSoftware"
texto="Time for a #Warzone community poll! Zombie Power Ups have been in Fortune's Keep over the past two weeks, which got us thinking... How would you like to see them in Urzikstan as well for the next two weeks? Please vote on one of the following options:">
<img src="./imagenes/logox.png">
</comunidad-comentarios>

<comunidad-comentarios
icono="<img src='./imagenes/icono.jpeg'>"
nombre="Raven Software"
usuario="@RavenSoftware"
texto="Time for a #Warzone community poll! Zombie Power Ups have been in Fortune's Keep over the past two weeks, which got us thinking... How would you like to see them in Urzikstan as well for the next two weeks? Please vote on one of the following options:">
<img src="./imagenes/logox.png">
</comunidad-comentarios>
</section>

<section id="separadores">
<separador-info
    titulo="DIVIÉRTETE"
    texto="Más Información Sobre Las Oportunidades De Empleo"
    boton="ÚNETE A NOSOTROS"
    imagen="<img src='./imagenes/separador2.jpg'/>">
</separador-info>
</section>

<section id="infoequipos">
		<h3>NUESTROS EQUIPOS</h3>

<section id="listas">
		<ul>
		<li>DISEÑO DE JUEGO</li>
		<li>GRÁFICOS Y ANIMACIÓN</li>
		<li>GESTION DE MARCA</li>
		<li>PRODUCCIÓN</li>
		<li>CONTROL DE CALIDAD</li>
		</ul>
		<ul>
		<li>ASISTENCIA AL CLIENTE</li>
		<li>OPERACIONES DEL ESTUDIO</li>
		<li>PROGRAMACIÓN</li>
		<li>FINANZAS Y CONTABILIDAD</li>
		<li>RECURSOS HUMANOS</li>
		</ul>
</section>
</section>
  `;
	}
}

customElements.define('app-container', AppContainer);
