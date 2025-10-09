<script setup lang="ts">
import backgroundImageWeAre from '@/assets/historia.webp'
import PreguntasBuzon from './CpsPreguntasBuzon.vue'

const weAreStyle = {
  backgroundImage: `url(${backgroundImageWeAre})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

function loadUrl(urlString: string) {
  window.location.href = urlString
}
</script>

<template>
  <main>
    <div class="container mb-3">
      <div _ngcontent-ng-c3334962614="" class="gallery">
        <div _ngcontent-ng-c3334962614="" id="carouselExampleControls" data-bs-ride="carousel"
          class="carousel slide carousel-fade">
          <div _ngcontent-ng-c3334962614="" class="carousel-inner">
            <div _ngcontent-ng-c3334962614="" class="carousel-item active">
              <picture _ngcontent-ng-c3334962614="">
                <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)"
                  srcset="/src/assets/anticipar_pagos.webp" />
                <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                  srcset="/src/assets/anticipar_pagos-movil.webp" />
                <img _ngcontent-ng-c3334962614="" alt="Imagen Gracias por Anticipar tus Pagos"
                  src="/src/assets/anticipar_pagos.webp" loading="lazy" />
              </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery" href=""> </a>
            </div>
            <div _ngcontent-ng-c3334962614="" class="carousel-item">
              <picture _ngcontent-ng-c3334962614="">
                <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)" srcset="/src/assets/norma_ifrs9.webp" />
                <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                  srcset="/src/assets/norma_ifrs9-movil.webp" />
                <img _ngcontent-ng-c3334962614="" alt="Normativa IFRS9" src="/src/assets/norma_ifrs9.webp"
                  loading="lazy" />
              </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery"
                href="/assets/pdf/NORMA_IFRS9.pdf"
                style="background-color: rgb(244, 163, 26); bottom: 10%; color: black; right: 8%">Normativa IFRS9
              </a>
            </div>
            <div _ngcontent-ng-c3334962614="" class="carousel-item">
              <picture _ngcontent-ng-c3334962614="">
                <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)" srcset="/src/assets/promocion.webp" />
                <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                  srcset="/src/assets/promocion-movil.webp" />
                <img _ngcontent-ng-c3334962614="" alt="Imagen promocion 2025 - 2026" src="/src/assets/promocion.webp"
                  loading="lazy" />
              </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery"
                href="/assets/pdf/promociones.pdf"
                style="background-color: rgb(244, 163, 26); bottom: 10%; color: black; right: 8%">Conoce las bases
              </a>
            </div>
            <div _ngcontent-ng-c3334962614="" class="carousel-item">
              <picture _ngcontent-ng-c3334962614="">
                <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)" srcset="/src/assets/SPEI.webp" />
                <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)" srcset="/src/assets/SPEI-movil.webp" />
                <img _ngcontent-ng-c3334962614="" alt="App Móvil banca electrónica guía de usuario"
                  src="/src/assets/SPEI.webp" loading="lazy" />
              </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery"
                href="/assets/pdf/Guia app.pdf"
                style="background-color: rgb(35, 91, 165); bottom: 10%; color: white; right: 8%">Guia de usuario SPEI
              </a>
            </div>
            <div _ngcontent-ng-c3334962614="" class="carousel-item">
              <picture _ngcontent-ng-c3334962614="">
                <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)"
                  srcset="/src/assets/datos-biometricos-1.webp" />
                <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                  srcset="/src/assets/datos-biometricos-1-movil.webp" />
                <img _ngcontent-ng-c3334962614="" alt="datos biometricos imagen"
                  src="/src/assets/datos-biometricos-1.webp" loading="lazy" />
              </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery"
                href="/assets/pdf/datos biometricos.pdf" style="
                    background-color: rgb(244, 163, 26);
                    bottom: 10%;
                    color: rgb(22, 34, 59);
                    min-width: 200px;
                    right: 8%;
                  ">¡REGISTRATE YA!
              </a>
            </div>
            <div _ngcontent-ng-c3334962614="" class="carousel-item">
              <picture _ngcontent-ng-c3334962614="">
                <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)"
                  srcset="/src/assets/inscribeteahoraesmásfacil.webp" />
                <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                  srcset="/src/assets/inscribeteahoraesmásfacil-movil.webp" />
                <img _ngcontent-ng-c3334962614="" alt="Imagen inscribete ahora es más facil"
                  src="/src/assets/inscribeteahoraesmásfacil.webp" loading="lazy" />
              </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery" href="/servicio/socio"
                style="background-color: white; bottom: 10%; color: black; left: 50%">QUIERO SER SOCIO
              </a>
            </div>
            <div _ngcontent-ng-c3334962614="" class="carousel-item">
              <picture _ngcontent-ng-c3334962614="">
                <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)"
                  srcset="/src/assets/alianzasgal-2.webp" />
                <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                  srcset="/src/assets/alianzasgal-2-movil.webp" />
                <img _ngcontent-ng-c3334962614="" alt="Alianzas imagen" src="/src/assets/alianzasgal-2.webp"
                  loading="lazy" />
              </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery" href="/btns/alianzas"
                style="background-color: white; bottom: 5%; color: rgb(63, 126, 189); right: 31%">VER
              </a>
            </div>
            <!----><button _ngcontent-ng-c3334962614="" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev" class="carousel-control-prev">
              <span _ngcontent-ng-c3334962614="" aria-hidden="true" class="carousel-control-prev-icon"></span><span
                _ngcontent-ng-c3334962614="" class="visually-hidden">Previous</span></button><button
              _ngcontent-ng-c3334962614="" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
              class="carousel-control-next">
              <span _ngcontent-ng-c3334962614="" aria-hidden="true" class="carousel-control-next-icon"></span><span
                _ngcontent-ng-c3334962614="" class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-3 mt-5">
      <div class="row row-cols-1 row-cols-lg-4 g-4">
        <div class="col">
          <div class="card h-100 shadow-lg">
            <img src="/src/assets/quieres_ser_socio.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">QUIERO SER SOCIO</h5>
              <p class="card-text text-center text-cards-description">
                ¡Ahora más Fácil! Únete a esta Familia Cooperativista con solo 4 documentos.
              </p>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a href="/servicio/socio" class="btn btn-cards">Ver detalles</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-lg">
            <img src="/src/assets/img-inicio-cards/beneficios_oct_2025.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">BENEFICIOS</h5>
              <div class="row text-center">
                <div class="col boxed">
                  <img src="/src/assets/icon/consulta.webp" alt="Asesoría Jurídica" class="img-beneficio" />
                  <div>
                    <a href="/beneficios/asesoria" class="texto-corto">Asesoría Jurídica</a>
                  </div>
                </div>
                <div class="col boxed">
                  <img src="/src/assets/icon/ahorrar-dinero.webp" alt="Protección al Ahorro y Crédito"
                    class="img-beneficio" />
                  <div>
                    <a href="/beneficios/proteccion" class="texto-corto">Protección al Ahorro y Crédito</a>
                  </div>
                </div>
              </div>
              <div class="row text-center">
                <div class="col boxed">
                  <img src="/src/assets/icon/asistencia-medica.webp" alt="Asesoría Jurídica" class="img-beneficio" />
                  <div>
                    <a href="/beneficios/medico" class="texto-corto">Servicios Médicos</a>
                  </div>
                </div>
                <div class="col boxed">
                  <img src="/src/assets/icon/pago.webp" alt="Protección al Ahorro y Crédito" class="img-beneficio" />
                  <div>
                    <a href="/beneficios/servicios" class="texto-corto">Pago de Servicios</a>
                  </div>
                </div>
              </div>
              <div class="row text-center">
                <div class="col boxed">
                  <img src="/src/assets/icon/me-gusta.webp" alt="Asesoría Jurídica" class="img-beneficio" />
                  <div>
                    <a href="/beneficios/servicio-apoyo-funerario/" class="texto-corto">Servicio de Apoyo Funerario</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-lg">
            <img src="/src/assets/img-inicio-cards/educacion_cooperativa_y_financiera.webp" class="card-img-top"
              alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">EDUCACIÓN COOPERATIVA Y FINANCIERA</h5>
              <p class="card-text text-center text-cards-description">
                Conoce esta nueva sección y aprende más sobre el Cooperativismo y Finanzas
                personales.
              </p>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a href="/servicio/educoof" class="btn btn-cards">Ver detalles</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-lg">
            <img src="/src/assets/img-inicio-cards/cheerful-excited-young-woman-with-mobile-phone-credit-card.webp"
              class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">CRÉDITOS</h5>
              <p class="card-text text-center text-cards-description">
                Conoce todas las opciones de financiamiento para cada uno de tus proyectos,
                aprovecha los plazos cómodos e intereses justos.
              </p>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a href="/servicio/creditos" class="btn btn-cards">Ver detalles</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <section class="my-5 gap-5 row align-items-start">
        <div class="col boxed d-flex flex-column align-items-center">
          <a class="text-decoration-none animate__animated animate__fadeIn animate__slow" href="/btns/revistas">
            <div class="image-wrapper position-relative">
              <div class="overlay position-absolute"></div>
              <img loading="lazy" width="250px" height="250px"
                style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
                src="/src/assets/img-revistas/revista_oct_2025.webp" alt="Revista Libertador Cooperativo" />
            </div>
            <div class="text-center adds-text">Revista Libertador Cooperativo</div>
          </a>
        </div>
        <div class="col boxed d-flex flex-column align-items-center">
          <a target="_blank" class="text-decoration-none animate__animated animate__fadeIn animate__slow"
            href="/assets/pdf/promociones_2025.pdf">
            <div class="image-wrapper position-relative">
              <div class="overlay position-absolute"></div>
              <img loading="lazy" width="250px" height="250px"
                style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
                src="/src/assets/Promociones.webp" alt="Promociones 2025" />
            </div>
            <div class="text-center adds-text">Promociones 2025</div>
          </a>
        </div>
        <div class="col boxed d-flex flex-column align-items-center">
          <a class="text-decoration-none animate__animated animate__fadeIn animate__slow" href="/btns/alianzas">
            <div class="image-wrapper position-relative">
              <div class="overlay position-absolute"></div>
              <img loading="lazy" width="250px" height="250px"
                style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
                src="/src/assets/alianzas.webp" alt="Alianzas Estratégicas" />
            </div>
            <div class="text-center adds-text">Alianzas Estratégicas</div>
          </a>
        </div>
        <div class="col boxed d-flex flex-column align-items-center">
          <a target="_blank" class="text-decoration-none animate__animated animate__fadeIn animate__slow"
            href="/assets/pdf/libro-caja.pdf">
            <div class="image-wrapper position-relative">
              <div class="overlay position-absolute"></div>
              <img loading="lazy" width="250px" height="250px"
                style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
                src="/src/assets/portlibro.webp" alt="Libro Conmemorativo" />
            </div>
            <div class="text-center adds-text">Libro Conmemorativo</div>
          </a>
        </div>
        <!---->
      </section>
    </div>
    <section class="pb-5">
      <div class="container-fluid">
        <div class="row">
          <div class="bg-matriz col-12 col-md-7" :style="weAreStyle"></div>
          <div class="col-12 col-md-5 who-are">
            <div class="container py-5" style="height: 100%">
              <div class="d-flex flex-column justify-content-center align-items-center" style="height: 100%">
                <div class="text-white fs-2 united-text">
                  "UNIDOS EN LA COOPERACIÓN, POR UN FUTURO MEJOR"
                </div>
                <div @click="loadUrl('/info/historia')"
                  class="circuloycheck animate__animated animate__fadeInUp animate__slow" tabindex="0">
                  <img loading="lazy" width="50px" height="50px" src="/src/assets/icon/cheque.webp" alt="icono check" />
                  <div class="texto-circulo">HISTORIA</div>
                </div>
                <div @click="loadUrl('/info/trabajo')"
                  class="circuloycheck animate__animated animate__fadeInUp animate__slow animate__delay-1s"
                  tabindex="0">
                  <img loading="lazy" width="50px" height="50px" src="/src/assets/icon/cheque.webp" alt="icono check" />
                  <div class="texto-circulo">BOLSA DE TRABAJO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="otros container-fluid">
      <div class="nov-event">
        <div class="row align-items-center">
          <a class="nov-event-titulo-boton col-md-4 col-xl-5" href="/servicio/nov-event">
            <div class="nov-event-titulo text-center animate__animated animate__backInLeft animate__slow">
              NOVEDADES<br />Y EVENTOS
            </div>
            <div class="nov-event-enlace">
              <div class="nov-event-boton animate__animated animate__backInLeft animate__slow animate__delay-1s">
                Conocer más
              </div>
            </div>
          </a><img loading="lazy" src="/src/assets/jason-goodman-NdZ08c-zu0c-unsplash.webp"
            alt="Imagen  novedades y eventos" class="col-md-8 col-xl-7 p-0 object-fit-cover" />
        </div>
      </div>
    </section>
    <section class="otros container-fluid mt-5">
      <div class="youtube">
        <div class="row align-items-center flex-row-reverse">
          <div class="nov-event-titulo-boton col-12 col-lg-5">
            <div class="nov-event-titulo text-center animate__animated animate__backInRight animate__slow">
              NUESTRO<br />CANAL
            </div>
            <a href="https://www.youtube.com/@cajapopularsanpablo9951" target="_blank"
              aria-label="Conocer más sobre nuestro canal en YouTube" class="nov-event-enlace">
              <div class="nov-event-boton animate__animated animate__backInRight animate__slow animate__delay-1s">
                Conocer más
              </div>
            </a>
          </div>
          <div class="col-12 col-lg-7 social-images">
            <div class="row row-cols-auto">
              <div class="col boxed">
                <a href="https://www.youtube.com/watch?v=3W9E1b9_r7Q" target="_blank"
                  aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/min-yt1.webp"
                    alt="miniatura youtube"
                    class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
              </div>
              <div class="col boxed">
                <a href="https://www.youtube.com/watch?v=bLuf3GoJBPM" target="_blank"
                  aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/img_logralo.webp"
                    alt="miniatura youtube"
                    class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
              </div>
              <div class="col boxed">
                <a href="https://www.youtube.com/watch?v=ffbZKWobhrw" target="_blank"
                  aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/min-yt3.webp"
                    alt="miniatura youtube"
                    class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s animate__delay-1.5s" /></a>
              </div>
              <div class="col boxed">
                <a href="https://www.youtube.com/watch?v=Fl8aYzjgyRQ" target="_blank"
                  aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/min-yt4.webp"
                    alt="miniatura youtube"
                    class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
              </div>
              <div class="col boxed">
                <a href="https://youtu.be/wRfz1qZwJ04?si=y5Ttm65H6q9zaMkU" target="_blank"
                  aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/becas_youtube.webp"
                    alt="miniatura youtube"
                    class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
              </div>
              <div class="col boxed">
                <a href="https://www.youtube.com/watch?v=9wI-J3yFDPM" target="_blank"
                  aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/img_historias_exito.webp"
                    alt="miniatura youtube"
                    class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <PreguntasBuzon />
  </main>
</template>
<style scoped>
.boxed {
  transition: all 0.3s;
}

.boxed:hover {
  transform: scale(1.15);
}

.card {
  transition: all 0.3s;
}

.card:hover {
  transform: scale(1.15);
}

.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 15px;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.gallery picture img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0 0 10px 10px;
}

.gallery .btnGallery {
  min-width: fit-content;
  text-align: center;
  border-radius: 45px;
  width: 20%;
  font-weight: 700;
  padding: 10px;
  position: absolute;
  transition: all 1s ease;
}

.preg-frec .accordion-button {
  margin: 5px 0;
  font-size: 1.3rem;
  color: var(--bs-gray);
}

.accordion-body .resp {
  font-size: 1.1rem;
  text-align: justify;
  padding: 25px 20px;
  box-shadow: 0 10px 20px #00000042;
  border-radius: 0 0 10px 10px;
  font-family: inherit;
}

.rounded-btn {
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
}

.rounded-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.rounded-btn:active {
  transform: translateY(0);
}

.buzon .nov-event-enlace .nov-event-boton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 194px;
  height: 65px;
  background-color: var(--color-primario);
  color: #fff;
  font-size: 1.5rem;
  border-radius: 40px;
  margin: 20px auto;
  transition: all 0.3s ease;
}

.preg-frec .nov-event-boton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 194px;
  height: 65px;
  background-color: var(--color-primario);
  color: #fff;
  font-size: 1.5rem;
  border-radius: 40px;
  margin: 20px auto;
  transition: all 0.3s ease;
  cursor: pointer;
}

.descfb {
  font-size: 1.4rem;
  color: var(--color-azul-oscuro);
  text-align: center;
}

.titulofb {
  color: var(--color-primario);
}

.social-images a img {
  width: 255px;
  border-radius: 10px;
  margin: 20px 11px;
  padding: 0;
  max-width: 300px;
  cursor: pointer;
}

.btn-cards {
  background-color: var(--color-primario);
  color: white;
}

.text-cards-description {
  color: var(--color-primario);
}

.img-beneficio {
  width: 30px;
  height: 30px;
}

.texto-corto {
  text-decoration: none;
}

.boxed {
  box-shadow: 0 0 1px #00000024;
  padding: 10px 5px;
}

.adds-text {
  padding-top: 5px;
  font-size: large;
}

.who-are {
  background-color: #003063;
}

.united-text {
  text-align: center;
  text-shadow: 1px 1px 10px black;
  white-space: pre-line;
  font-weight: 100;
  margin-bottom: 50px;
}

.circuloycheck {
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 60px;
  padding-left: 10px;
  height: 70px;
  margin: 15px auto;
  max-width: 600px;
  width: 90%;
  cursor: pointer;
}

.texto-circulo {
  margin-left: 5px;
}

.otros .nov-event-titulo-boton .nov-event-titulo {
  font-size: 3rem;
  color: var(--color-primario);
  text-shadow: 0px 0px 10px var(--color-blanco);
  white-space: pre-line;
}

.otros .nov-event-titulo-boton .nov-event-enlace .nov-event-boton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 194px;
  height: 65px;
  background-color: var(--color-primario);
  color: #fff;
  font-size: 1.5rem;
  border-radius: 40px;
  margin: 20px auto 0;
}
</style>
