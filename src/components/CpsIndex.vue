<script setup lang="ts">
import backgroundImageWeAre from '@/assets/historia.webp'

const weAreStyle = {
  backgroundImage: `url(${backgroundImageWeAre})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

function showCreditDetails(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) { // Check if the element exists
    element.style.display = element.style.display == "block" ? "none" : "block";
    // buttonElement.innerHTML = element.style.display == "block" ? "Ocultar" : "Leer más";
  }
}

function loadUrl(urlString: string) {
  window.location.href = urlString
}
</script>

<template>
  <main>
    <div class="container mb-3">
      <app-gallery _ngcontent-ng-c1538472975="" _nghost-ng-c3334962614="">
        <div _ngcontent-ng-c3334962614="" class="gallery">
          <div _ngcontent-ng-c3334962614="" id="carouselExampleControls" data-bs-ride="carousel" class="carousel slide">
            <div _ngcontent-ng-c3334962614="" class="carousel-inner">
              <div _ngcontent-ng-c3334962614="" class="carousel-item active">
                <picture _ngcontent-ng-c3334962614="">
                  <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)" srcset="/src/assets/becas_2025.webp">
                  <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                    srcset="/src/assets/becas_2025-movil.webp">
                  <img _ngcontent-ng-c3334962614="" alt="Convocatoria Becas 2025-2026" src="/src/assets/becas_2025.webp"
                    loading="lazy">
                </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery"
                  href="/assets/pdf/becas_2025.pdf"
                  style="background-color: rgb(244, 163, 26); bottom: 10%; color: black; right: 8%;">Conoce la
                  convocatoria </a>
              </div>
              <div _ngcontent-ng-c3334962614="" class="carousel-item">
                <picture _ngcontent-ng-c3334962614="">
                  <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)"
                    srcset="/src/assets/anticipar_pagos.webp">
                  <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                    srcset="/src/assets/anticipar_pagos-movil.webp"><img _ngcontent-ng-c3334962614=""
                    alt="Imagen Gracias por Anticipar tus Pagos" src="/src/assets/anticipar_pagos.webp" loading="lazy">
                </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery" href=""> </a>
              </div>
              <div _ngcontent-ng-c3334962614="" class="carousel-item">
                <picture _ngcontent-ng-c3334962614="">
                  <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)" srcset="/src/assets/norma_ifrs9.webp">
                  <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                    srcset="/src/assets/norma_ifrs9-movil.webp">
                  <img _ngcontent-ng-c3334962614="" alt="Normativa IFRS9" src="/src/assets/norma_ifrs9.webp"
                    loading="lazy">
                </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery"
                  href="/assets/pdf/NORMA_IFRS9.pdf"
                  style="background-color: rgb(244, 163, 26); bottom: 10%; color: black; right: 8%;">Normativa IFRS9
                </a>
              </div>
              <div _ngcontent-ng-c3334962614="" class="carousel-item">
                <picture _ngcontent-ng-c3334962614="">
                  <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)" srcset="/src/assets/promocion.webp">
                  <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                    srcset="/src/assets/promocion-movil.webp">
                  <img _ngcontent-ng-c3334962614="" alt="Imagen promocion 2025 - 2026" src="/src/assets/promocion.webp"
                    loading="lazy">
                </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery"
                  href="/assets/pdf/promociones.pdf"
                  style="background-color: rgb(244, 163, 26); bottom: 10%; color: black; right: 8%;">Conoce las bases
                </a>
              </div>
              <div _ngcontent-ng-c3334962614="" class="carousel-item">
                <picture _ngcontent-ng-c3334962614="">
                  <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)" srcset="/src/assets/SPEI.webp">
                  <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)" srcset="/src/assets/SPEI-movil.webp">
                  <img _ngcontent-ng-c3334962614="" alt="App Móvil banca electrónica guía de usuario"
                    src="/src/assets/SPEI.webp" loading="lazy">
                </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery"
                  href="/assets/pdf/Guia app.pdf"
                  style="background-color: rgb(35, 91, 165); bottom: 10%; color: white; right: 8%;">Guia de usuario SPEI
                </a>
              </div>
              <div _ngcontent-ng-c3334962614="" class="carousel-item">
                <picture _ngcontent-ng-c3334962614="">
                  <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)"
                    srcset="/src/assets/datos-biometricos-1.webp">
                  <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                    srcset="/src/assets/datos-biometricos-1-movil.webp"><img _ngcontent-ng-c3334962614=""
                    alt="datos biometricos imagen" src="/src/assets/datos-biometricos-1.webp" loading="lazy">
                </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery"
                  href="/assets/pdf/datos biometricos.pdf"
                  style="background-color: rgb(244, 163, 26); bottom: 10%; color: rgb(22, 34, 59); min-width: 200px; right: 8%;">¡REGISTRATE
                  YA! </a>
              </div>
              <div _ngcontent-ng-c3334962614="" class="carousel-item">
                <picture _ngcontent-ng-c3334962614="">
                  <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)"
                    srcset="/src/assets/inscribeteahoraesmásfacil.webp">
                  <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                    srcset="/src/assets/inscribeteahoraesmásfacil-movil.webp"><img _ngcontent-ng-c3334962614=""
                    alt="Imagen inscribete ahora es más facil" src="/src/assets/inscribeteahoraesmásfacil.webp"
                    loading="lazy">
                </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery" href="/servicio/socio"
                  style="background-color: white; bottom: 10%; color: black; left: 50%;">QUIERO SER SOCIO
                </a>
              </div>
              <div _ngcontent-ng-c3334962614="" class="carousel-item">
                <picture _ngcontent-ng-c3334962614="">
                  <source _ngcontent-ng-c3334962614="" media="(min-width: 576px)"
                    srcset="/src/assets/alianzasgal-2.webp">
                  <source _ngcontent-ng-c3334962614="" media="(max-width: 576px)"
                    srcset="/src/assets/alianzasgal-2-movil.webp"><img _ngcontent-ng-c3334962614=""
                    alt="Alianzas imagen" src="/src/assets/alianzasgal-2.webp" loading="lazy">
                </picture><a _ngcontent-ng-c3334962614="" target="_blank" class="btnGallery" href="/btns/alianzas"
                  style="background-color: white; bottom: 5%; color: rgb(63, 126, 189); right: 31%;">VER
                </a>
              </div><!----><button _ngcontent-ng-c3334962614="" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev" class="carousel-control-prev"><span _ngcontent-ng-c3334962614="" aria-hidden="true"
                  class="carousel-control-prev-icon"></span><span _ngcontent-ng-c3334962614=""
                  class="visually-hidden">Previous</span></button><button _ngcontent-ng-c3334962614="" type="button"
                data-bs-target="#carouselExampleControls" data-bs-slide="next" class="carousel-control-next"><span
                  _ngcontent-ng-c3334962614="" aria-hidden="true" class="carousel-control-next-icon"></span><span
                  _ngcontent-ng-c3334962614="" class="visually-hidden">Next</span></button>
            </div>
          </div>
        </div>
      </app-gallery>
    </div>
    <div class="container mb-3">
      <div class="row row-cols-1 row-cols-lg-4 g-4">
        <div class="col">
          <div class="card h-100 shadow-lg">
            <img src="/src/assets/img-inicio-cards/businesswoman-employee-shaking-hands.webp" class="card-img-top"
              alt="..." />
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
            <img src="/src/assets/img-inicio-cards/corazon.svg" width="140" height="140" class="card-img-top mt-3"
              alt="..." />
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
            <img src="/src/assets/img-inicio-cards/puerco_educoof.webp" class="card-img-top img-large" alt="..." style="
                object-fit: contain;
                background-color: var(--color-azul-oscuro);
                width: 100%;
                height: 200px;
              " />
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
        <div class="col d-flex flex-column align-items-center">
          <a class="text-decoration-none animate__animated animate__fadeIn animate__slow" href="/btns/revistas">
            <div class="image-wrapper position-relative">
              <div class="overlay position-absolute"></div>
              <img loading="lazy" width="250px" height="250px"
                style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
                src="/src/assets/img-revistas/revista_septiembre_2025.webp" alt="Revista Libertador Cooperativo" />
            </div>
            <div class="text-center adds-text">
              Revista Libertador Cooperativo
            </div>
          </a>
        </div>
        <div class="col d-flex flex-column align-items-center">
          <a target="_blank" class="text-decoration-none animate__animated animate__fadeIn animate__slow"
            href="/assets/pdf/promociones_2025.pdf">
            <div class="image-wrapper position-relative">
              <div class="overlay position-absolute"></div>
              <img loading="lazy" width="250px" height="250px"
                style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
                src="/src/assets/Promociones.webp" alt="Promociones 2025" />
            </div>
            <div class="text-center adds-text">
              Promociones 2025
            </div>
          </a>
        </div>
        <div class="col d-flex flex-column align-items-center">
          <a class="text-decoration-none animate__animated animate__fadeIn animate__slow" href="/btns/alianzas">
            <div class="image-wrapper position-relative">
              <div class="overlay position-absolute"></div>
              <img loading="lazy" width="250px" height="250px"
                style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
                src="/src/assets/alianzas.webp" alt="Alianzas Estratégicas" />
            </div>
            <div class="text-center adds-text">
              Alianzas Estratégicas
            </div>
          </a>
        </div>
        <div class="col d-flex flex-column align-items-center">
          <a target="_blank" class="text-decoration-none animate__animated animate__fadeIn animate__slow"
            href="/assets/pdf/libro-caja.pdf">
            <div class="image-wrapper position-relative">
              <div class="overlay position-absolute"></div>
              <img loading="lazy" width="250px" height="250px"
                style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
                src="/src/assets/portlibro.webp" alt="Libro Conmemorativo" />
            </div>
            <div class="text-center adds-text">
              Libro Conmemorativo
            </div>
          </a>
        </div>
        <!---->
      </section>
    </div>
    <section class="pb-5">
      <div class="container-fluid">
        <div class="row">
          <div class="bg-matriz col-12 col-md-7" :style="weAreStyle">
          </div>
          <div class="col-12 col-md-5 who-are">
            <div class="container py-5" style="height: 100%;">
              <div class="d-flex flex-column justify-content-center align-items-center" style="height: 100%;">
                <div class="text-white fs-2 united-text">"UNIDOS EN LA
                  COOPERACIÓN, POR UN FUTURO MEJOR"</div>
                <div @click="loadUrl('/info/historia')"
                  class="circuloycheck animate__animated animate__fadeInUp animate__slow" tabindex="0"><img
                    loading="lazy" width="50px" height="50px" src="/src/assets/icon/cheque.webp" alt="icono check">
                  <div class="texto-circulo">HISTORIA</div>
                </div>
                <div @click="loadUrl('/info/trabajo')"
                  class="circuloycheck animate__animated animate__fadeInUp animate__slow animate__delay-1s"
                  tabindex="0"><img loading="lazy" width="50px" height="50px" src="/src/assets/icon/cheque.webp"
                    alt="icono check">
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
        <div class="row align-items-center"><a class="nov-event-titulo-boton col-md-4 col-xl-5"
            href="/servicio/nov-event">
            <div class="nov-event-titulo text-center animate__animated animate__backInLeft animate__slow">NOVEDADES<br>Y
              EVENTOS
            </div>
            <div class="nov-event-enlace">
              <div class="nov-event-boton animate__animated animate__backInLeft animate__slow animate__delay-1s">Conocer
                más</div>
            </div>
          </a><img loading="lazy" src="/src/assets/jason-goodman-NdZ08c-zu0c-unsplash.webp"
            alt="Imagen  novedades y eventos" class="col-md-8 col-xl-7 p-0 object-fit-cover"></div>
      </div>
    </section>
    <section class="otros container-fluid">
      <div class="youtube">
        <div class="row align-items-center flex-row-reverse">

          <div class="nov-event-titulo-boton col-12 col-lg-5">
            <div class="nov-event-titulo text-center animate__animated animate__backInRight animate__slow">
              NUESTRO<br>CANAL</div><a href="https://www.youtube.com/@cajapopularsanpablo9951" target="_blank"
              aria-label="Conocer más sobre nuestro canal en YouTube" class="nov-event-enlace">
              <div class="nov-event-boton animate__animated animate__backInRight animate__slow animate__delay-1s">
                Conocer
                más</div>
            </a>
          </div>

          <div class="col-12 col-lg-7 social-images">
            <a href="https://www.youtube.com/watch?v=3W9E1b9_r7Q" target="_blank" aria-label="Ver video en YouTube"><img
                loading="lazy" src="/src/assets/min-yt1.webp" alt="miniatura youtube"
                class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s"></a><a
              href="https://www.youtube.com/watch?v=bLuf3GoJBPM" target="_blank" aria-label="Ver video en YouTube"><img
                loading="lazy" src="/src/assets/img_logralo.webp" alt="miniatura youtube"
                class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s"></a><a
              href="https://www.youtube.com/watch?v=ffbZKWobhrw" target="_blank" aria-label="Ver video en YouTube"><img
                loading="lazy" src="/src/assets/min-yt3.webp" alt="miniatura youtube"
                class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s animate__delay-1.5s"></a><a
              href="https://www.youtube.com/watch?v=Fl8aYzjgyRQ" target="_blank" aria-label="Ver video en YouTube"><img
                loading="lazy" src="/src/assets/min-yt4.webp" alt="miniatura youtube"
                class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s"></a><a
              href="https://youtu.be/wRfz1qZwJ04?si=y5Ttm65H6q9zaMkU" target="_blank"
              aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/becas_youtube.webp"
                alt="miniatura youtube"
                class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s"></a><a
              href="https://www.youtube.com/watch?v=9wI-J3yFDPM" target="_blank" aria-label="Ver video en YouTube"><img
                loading="lazy" src="/src/assets/img_historias_exito.webp" alt="miniatura youtube"
                class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s"></a>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <div _ngcontent-ng-c1538472975="" class="container">
      <div _ngcontent-ng-c1538472975="" class="row py-5">
        <div _ngcontent-ng-c1538472975="" class="col-12 col-lg-6 d-flex flex-column justify-content-center">
          <preguntas-frecuentes-component _ngcontent-ng-c1538472975="" _nghost-ng-c3795751133="">
            <section _ngcontent-ng-c3795751133="" class="preg-frec py-5 py-lg-0">
              <div _ngcontent-ng-c3795751133="" class="container text-center"><img _ngcontent-ng-c3795751133=""
                  loading="lazy" width="200px" height="200px" src="/src/assets/icon/informacion.webp"
                  alt="icono signo de interrogación" class="imgfb">
                <div _ngcontent-ng-c3795751133="" class="titulofb text-center fs-1 my-4 text-center">Preguntas
                  Frecuentes</div>
                <div _ngcontent-ng-c3795751133="" id="pregfrecbtn" class="nov-event-boton"
                  @click="showCreditDetails('pregfrec')">Ver más</div>
                <div _ngcontent-ng-c3795751133="" id="pregfrec" class="container" style="display: none;">
                  <div _ngcontent-ng-c3795751133="" id="accordionFlushExample" class="accordion accordion-flush">
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingOne" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"
                          class="accordion-button collapsed"> ¿Qué es una Sociedad Cooperativa de Ahorro y Crédito?
                        </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseOne" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-1"> “La Sociedad Cooperativa es una forma de
                            organización social integrada por personas físicas con base en intereses comunes y en los
                            principios de solidaridad, esfuerzo propio y ayuda mutua, con el propósito de satisfacer
                            necesidades individuales y colectivas, a través de la realización de actividades económicas
                            de producción, distribución y consumo de bienes y servicios.” <br
                              _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> Así lo define la “Ley
                            General de Sociedades Cooperativas (LGSC) Art. 2 <br _ngcontent-ng-c3795751133=""><br
                              _ngcontent-ng-c3795751133=""> Además se rige bajo sus Estatutos definidos por los mismos
                            Socios; funge como intermediario financiero *Ahorro y Crédito* sin fines de lucro y ofrece
                            servicios exclusivos a sus Asociados. <br _ngcontent-ng-c3795751133=""><br
                              _ngcontent-ng-c3795751133=""> Fuente: <a _ngcontent-ng-c3795751133=""
                              href="http://www.diputados.gob.mx/LeyesBiblio/pdf/143_190118.pdf">www.diputados.gob.mx/LeyesBiblio/pdf/143_190118.pdf</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingTwo" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
                          class="accordion-button collapsed"> ¿Qué beneficios tienen las Cajas para sus socios y la
                          comunidad? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseTwo" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-2"> Las Sociedades Cooperativas de Ahorro y
                            Préstamo juegan un papel muy importante en muchos sentidos:<br
                              _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> • Promueven la inclusión
                            financiera de productos y servicios financieros formales en zonas donde la infraestructura
                            bancaria aún es limitada; es decir, ayudan a las personas a acceder a productos y servicios
                            financieros formales en condiciones de seguridad.<br _ngcontent-ng-c3795751133=""> • Ofrecen
                            productos que están diseñados para personas con menores recursos o cuyos ingresos no son
                            constantes.<br _ngcontent-ng-c3795751133=""> • Impulsan el desarrollo económico en las
                            localidades donde operan al ofrecer créditos para fines productivos y retener el ahorro en
                            la localidad.<br _ngcontent-ng-c3795751133=""> • Contribuyen a la satisfacción de
                            necesidades individuales y colectivas, proporcionando servicios de asistencia social, a
                            través de la distribución de sus remanentes mediante fondos constituidos para tales
                            fines.<br _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> Más información: <a
                              _ngcontent-ng-c3795751133=""
                              href="https://www.condusef.gob.mx/">https://www.condusef.gob.mx/</a></p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingThree" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree" aria-expanded="false"
                          aria-controls="flush-collapseThree" class="accordion-button collapsed"> ¿En qué te debes fijar
                          antes de depositar tu dinero en una Caja? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseThree" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-3"> 1. Verificar si se encuentra registrada.
                            Todas las SOCAP que realicen operaciones que impliquen la captación de recursos de sus
                            socios para su colocación (otorgar créditos) entre los mismos, independientemente de su tipo
                            (grandes, medianas o pequeñas cooperativas), debieron haberse inscrito antes de febrero de
                            2010 en el Registro Nacional Único de SOCAP, que administra el Fondo de Supervisión Auxiliar
                            de Sociedades Cooperativas de Ahorro y Préstamo y de Protección a sus Ahorradores (FOCOOP),
                            de otra forma están operando al margen de la ley, con el riesgo económico que esto implica
                            para el patrimonio de los socios ahorradores y los de aspecto legal para los administradores
                            de la Sociedad.<br _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> Para
                            consultar la situación que guardan las SOCAP, se puede acceder a la página de internet que
                            tiene el FOCOOP: www.focoop.com.mx.<br _ngcontent-ng-c3795751133=""><br
                              _ngcontent-ng-c3795751133=""> 2. Verificar si se encuentra autorizada y supervisada por la
                            CNBV. Caja Popular San Pablo, Cooperativa Autorizada y Supervisada por la Comisión Nacional
                            Bancaria y de Valores desde 2007 Oficio CNBV 310-1500125/2007 134-870855/2007</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingFour" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"
                          class="accordion-button collapsed"> ¿Quién supervisa a las Cooperativas de Ahorro y Crédito?
                        </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseFour" aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-1"> Las Cooperativas Certificadas y
                            Autorizadas por (CNBV); Nos encontramos sujetos a la propia supervisión y regulación de la
                            Comisión Nacional Bancaria y de Valores en términos de la (LRASCAP). Ley para Regular las
                            Actividades de las Sociedades Cooperativas de Ahorro y Préstamo</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingFive" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive"
                          class="accordion-button collapsed"> ¿Quién es Caja Popular San Pablo? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseFive" aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-2"> Somos una Cooperativa autorizada y
                            supervisada por la CNBV; con más de 50 años al servicio de nuestros Socios, contribuyendo a
                            la mejora continua de la economía social, promoviendo la cultura del ahorro y el uso seguro
                            de créditos con tasas justas, además de otorgar servicios y protecciones especiales a
                            nuestra comunidad</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingSix" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix"
                          class="accordion-button collapsed"> ¿Qué beneficios se obtienen al ingresar a Caja Popular San
                          Pablo? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseSix" aria-labelledby="flush-headingSix"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-3"> Ingresar a una Cooperativa certificada es
                            sinónimo de seguridad y confianza, entre otros beneficios importantes obtendrás al ingresar
                            con nosotros:<br _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> • Apertura
                            de cuentas de ahorro sin comisiones<br _ngcontent-ng-c3795751133=""> • Acceso a todas las
                            cuentas de ahorro disponibles con atractivos rendimientos.<br _ngcontent-ng-c3795751133="">
                            • Extensa gama de productos crediticios para cualquier necesidad con tasas justas.<br
                              _ngcontent-ng-c3795751133=""> • Servicios escolares, además convenios con Instituciones
                            educativas.<br _ngcontent-ng-c3795751133=""> • Servicios adicionales como: pago de
                            servicios, envío de remesas, cajeros automáticos, servicios en red, entre otros.<br
                              _ngcontent-ng-c3795751133=""> • Servicios médicos, campañas de salud y alianzas con
                            diversas empresas con descuentos y precios especiales.<br _ngcontent-ng-c3795751133=""> •
                            Seguro de protección al Ahorro y Crédito, por tu cumplimiento puntual.<br
                              _ngcontent-ng-c3795751133=""> • Servicio de Apoyo Funerario sin costo a Socios por buen
                            manejo de cuenta (revisar políticas vigentes).<br _ngcontent-ng-c3795751133=""> •
                            Participación en Concurso de Becas Escolares para estudiantes, desde Primaria, hasta
                            Licenciatura.<br _ngcontent-ng-c3795751133=""> • Participación en promociones, eventos y
                            apoyos de Obra Social todo el año.<br _ngcontent-ng-c3795751133=""> • Opción de pagos
                            electrónicos para mayor comodidad (TPV, Depósitos bancarios, Cajeros Receptores).</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingEight" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseEight" aria-expanded="false"
                          aria-controls="flush-collapseEight" class="accordion-button collapsed"> ¿Qué es la Parte
                          Social? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseEight" aria-labelledby="flush-headingEight"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-2"> Es la Aportación al Capital Social de la
                            Cooperativa, lo que permite ser Socio activo de la Institución; existe un Certificado
                            Oficial que avala la inscripción como Socio, se otorga al momento de liquidar la cantidad
                            estipulada de $1,000.00 (Un mil pesos) según las Normas Vigentes.<br
                              _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> Ésta la define de manera
                            autónoma cada entidad y al cubrirse completamente, se empiezan a recibir los beneficios;
                            cabe mencionar que ésta cantidad es dinero del Socio, si por alguna situación decide
                            separarse de Caja San Pablo, se devolverá íntegramente al titular.</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingNine" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine"
                          class="accordion-button collapsed"> ¿De qué manera puedo saber si mis ahorros están seguros en
                          una Sociedad Cooperativa de Ahorro y Préstamo? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseNine" aria-labelledby="flush-headingNine"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-3"> La Comisión Nacional Bancaria y de
                            Valores (CNBV), de acuerdo a la Ley para Regular las Actividades de las Sociedades
                            Cooperativas de Ahorro y Préstamo, solo realiza supervisión a Entidades Autorizadas, para
                            seguir con las operaciones de Ahorro y Préstamo como Cooperativas con niveles de operación I
                            a IV (SOCAP).<br _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> Así mismo se
                            tiene el apoyo del Fideicomiso Fondo de Supervisión Auxiliar de Sociedades Cooperativas de
                            Ahorro y Préstamo y de Protección a sus Ahorradores (FOCOOP) hasta por 25 mil UDIS para un
                            caso de contingencia.<br _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> Por
                            la seguridad de tu patrimonio, utiliza únicamente los servicios que ofrecen las Sociedades
                            Cooperativas de Ahorro y Préstamo autorizadas como Caja Popular San Pablo, puedes consultar
                            en el Padrón de Entidades Financieras Supervisadas (PES) entrando a: <a
                              _ngcontent-ng-c3795751133="" href="www.gob.mx/cnbv">www.gob.mx/cnbv</a></p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingTen" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen"
                          class="accordion-button collapsed"> ¿Al cuánto tiempo de haber ingresado como Socio, puedo
                          solicitar un préstamo? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseTen" aria-labelledby="flush-headingTen"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-1"> Una vez cubierta la Parte Social
                            ($1,000.00), eres oficialmente Socio, por lo que puedes hacer uso de los derechos en cuentas
                            de Ahorro y Créditos; es importante mencionar que éste trámite lleva una valoración
                            crediticia por nuestros analistas, y tu saldo en ahorro y capacidad de pago son piezas clave
                            para la autorización; la variación es cuestión de días.</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingEleven" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseEleven" aria-expanded="false"
                          aria-controls="flush-collapseEleven" class="accordion-button collapsed"> Ingresé hace tiempo y
                          no concluí la Parte Social, ¿Qué pasa con mi cuenta? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseEleven" aria-labelledby="flush-headingEleven"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-2"> Jamás pierdes tu dinero es muy importante
                            aclararlo, éste es enviado a una cuenta por cobrar, que puedes recuperar presentando tu
                            identificación oficial.<br _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> Si
                            el tiempo no asciende a un periodo entre 3 a 6 meses como mínimo, puede que tu cuenta aun
                            esté vigente; si deseas recuperarla solo debes realizar un depósito de complemento a la
                            brevedad; en cambio, si el periodo es más largo, necesitarás darte de alta nuevamente en
                            módulos de captación, con la documentación oficial.<br _ngcontent-ng-c3795751133=""><br
                              _ngcontent-ng-c3795751133=""> Si te encuentras en este supuesto, llama al módulo de
                            Información al 3338831830 Ext. 1110 u 1161, en donde pueden informarte la situación de tu
                            cuenta</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingtwelve" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapsetwelve" aria-expanded="false"
                          aria-controls="flush-collapsetwelve" class="accordion-button collapsed"> ¿En dónde puedo
                          consultar mis saldos? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapsetwelve" aria-labelledby="flush-headingtwelve"
                        data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-3"> Puedes revisar e imprimir saldos en los
                            kioscos que se encuentran destinados para ello en nuestras oficinas, también puedes
                            revisarlo en la página web registrándote e ingresando al apartado “SALDOS EN LÍNEA”, así
                            como en cada una de nuestras sucursales, movimiento exclusivo del titular de la cuenta e
                            identificándote debidamente.</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingThirteen" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThirteen" aria-expanded="false"
                          aria-controls="flush-collapseThirteen" class="accordion-button collapsed"> ¿Puedo realizar
                          movimientos en cualquier Sucursal San Pablo? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseThirteen"
                        aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample"
                        class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-1"> Nuestras oficinas están conectadas por
                            red, por lo que puedes efectuar cualquier trámite, deposito, pago, ahorro, registro en la
                            Sucursal que decidas.</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingFourteen" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFourteen" aria-expanded="false"
                          aria-controls="flush-collapseFourteen" class="accordion-button collapsed"> ¿Las promociones de
                          Caja Popular San Pablo son para todos? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseFourteen"
                        aria-labelledby="flush-headingFourteen" data-bs-parent="#accordionFlushExample"
                        class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-2"> Cada una de las promociones establecidas
                            por la Cooperativa, presentan una serie de Bases que se dan a conocer en el mes de enero de
                            todos los años; la convocatoria está abierta para todos los Socios, pero solo aquellos que
                            acepten y cumplan las condiciones, serán acreedores. <br _ngcontent-ng-c3795751133=""><br
                              _ngcontent-ng-c3795751133=""> Encuentra toda la Información en la Sección Promociones,
                            Revista Mensual, Redes Sociales o directamente en tu Sucursal. </p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingFiveTeen" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFiveTeen" aria-expanded="false"
                          aria-controls="flush-collapseFiveTeen" class="accordion-button collapsed"> ¿Quiénes son
                          nuestros Directivos? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseFiveTeen"
                        aria-labelledby="flush-headingFiveTeen" data-bs-parent="#accordionFlushExample"
                        class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-3"> Son Socios, como todos nosotros, que se
                            eligen mediante los periodos de elecciones en las Asambleas Generales que se realizan cada
                            año.<br _ngcontent-ng-c3795751133=""><br _ngcontent-ng-c3795751133=""> Las personas deben
                            tener conocimientos básicos para poder manejar una institución como San Pablo; cada año se
                            celebran los Talleres “Competencias Directivas” que tienen como finalidad, preparar a
                            quienes tienen la intención de formar parte de nuestro Órgano de Gobierno; si estás
                            interesado en ser parte del equipo, mantente atento a las siguientes convocatorias que se
                            publican en nuestros medios de información.</p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-ng-c3795751133="" class="accordion-item">
                      <h2 _ngcontent-ng-c3795751133="" id="flush-headingSixTeen" class="accordion-header"><button
                          _ngcontent-ng-c3795751133="" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSixTeen" aria-expanded="false"
                          aria-controls="flush-collapseSixTeen" class="accordion-button collapsed"> ¿Cuentan con bolsa
                          de trabajo? </button></h2>
                      <div _ngcontent-ng-c3795751133="" id="flush-collapseSixTeen"
                        aria-labelledby="flush-headingSixTeen" data-bs-parent="#accordionFlushExample"
                        class="accordion-collapse collapse">
                        <div _ngcontent-ng-c3795751133="" class="accordion-body">
                          <p _ngcontent-ng-c3795751133="" class="resp resp-3"> Claro, en ésta página web, encontraras un
                            apartado del mismo nombre, ahí se publican las actualizaciones de vacantes disponibles,
                            además de los datos de contacto del área de Recursos Humanos <a _ngcontent-ng-c3795751133=""
                              routerlink="/info/trabajo" href="/info/trabajo">Consultar bolsa de trabajo</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </preguntas-frecuentes-component>
        </div>
        <hr _ngcontent-ng-c1538472975="" class="d-block d-lg-none m" style="width: 90%; margin: 0 auto;">
        <div _ngcontent-ng-c1538472975="" class="col-12 col-lg-6 d-flex flex-column align-items-center">
          <buzon-component-inicio _ngcontent-ng-c1538472975="" class="position-sticky" style="top: 85px;"
            _nghost-ng-c1260654904="">
            <section _ngcontent-ng-c1260654904="" class="buzon mb-5 py-5 py-lg-0">
              <div _ngcontent-ng-c1260654904="" class="container text-center"><img _ngcontent-ng-c1260654904=""
                  width="200px" height="200px" loading="lazy" src="/src/assets/icon/buzon.webp"
                  alt="Buzón de Comentarios">
                <div _ngcontent-ng-c1260654904="" class="titulofb fs-1 my-3">Buzón de Comentarios</div>
                <div _ngcontent-ng-c1260654904="" class="descfb"> Nos importa tu opinión, háznos saber tus
                  recomendaciones para brindarte un mejor servicio</div><a _ngcontent-ng-c1260654904=""
                  routerlink="/servicio/buzon" class="nov-event-enlace" href="/servicio/buzon">
                  <div _ngcontent-ng-c1260654904="" class="nov-event-boton">Ir a Buzón</div>
                </a>
              </div>
            </section>
          </buzon-component-inicio>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.gallery[_ngcontent-ng-c3334962614] picture[_ngcontent-ng-c3334962614] img[_ngcontent-ng-c3334962614] {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0 0 10px 10px;
}

.gallery[_ngcontent-ng-c3334962614] .btnGallery[_ngcontent-ng-c3334962614] {
  min-width: fit-content;
  text-align: center;
  border-radius: 45px;
  width: 20%;
  font-weight: 700;
  padding: 10px;
  position: absolute;
  transition: all 1s ease;
}

.preg-frec[_ngcontent-ng-c3795751133] .accordion-button[_ngcontent-ng-c3795751133] {
  margin: 5px 0;
  font-size: 1.3rem;
  color: var(--bs-gray);
}

.accordion-body[_ngcontent-ng-c3795751133] .resp[_ngcontent-ng-c3795751133] {
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
  transition: all .3s ease;
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
  transition: all .3s ease;
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
