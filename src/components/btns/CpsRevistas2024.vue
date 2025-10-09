<template>
  <main>
    <section class="container">
      <div class="row gap-5 justify-content-around mb-5">
        <a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Noviembre 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img"
            src="/src/assets/img-revistas/REV Noviembre 2024.webp">
          <div class="card-title my-4 text-center">Noviembre 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Octubre 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img"
            src="/src/assets/img-revistas/REV Octubre 2024.webp">
          <div class="card-title my-4 text-center">Octubre 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Septiembre 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img"
            src="/src/assets/img-revistas/REV Septiembre 2024.webp">
          <div class="card-title my-4 text-center">Septiembre 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Agosto 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img" src="/src/assets/img-revistas/REV Agosto 2024.webp">
          <div class="card-title my-4 text-center">Agosto 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Julio 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img" src="/src/assets/img-revistas/REV Julio 2024.webp">
          <div class="card-title my-4 text-center">JULIO 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Junio 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img" src="/src/assets/img-revistas/REV Junio 2024.webp">
          <div class="card-title my-4 text-center">JUNIO 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Mayo 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img" src="/src/assets/img-revistas/REV Mayo 2024.webp">
          <div class="card-title my-4 text-center">MAYO 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Abril 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img" src="/src/assets/img-revistas/REV Abril 2024.webp">
          <div class="card-title my-4 text-center">ABRIL 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Marzo 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img" src="/src/assets/img-revistas/REV Marzo 2024.webp">
          <div class="card-title my-4 text-center">MARZO 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Febrero 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img"
            src="/src/assets/img-revistas/REV Febrero 2024.webp">
          <div class="card-title my-4 text-center">FEBRERO 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><a target="_blank" class="card-revista boxed  col-3 p-0" href="assets/pdf/REV Enero 2024.pdf"><img
            alt="Revista diciembre 2024" loading="lazy" class="card-img" src="/src/assets/img-revistas/REV Enero 2024.webp">
          <div class="card-title my-4 text-center">ENERO 2024</div>
          <div class="btn-leer-mas text-center">Leer más</div>
        </a><!---->
      </div>
    </section>
  </main>
</template>
<style lang="css" scoped>
.boxed {
  transition: all 0.3s;
}

.boxed:hover {
  transform: scale(1.15);
}

a {
  text-decoration: none;
}

.revistas-subtitle {
  font-size: 2rem;
}

.card-revista {
  height: 430px;
  width: 260px;
  background-color: #f9f9f9;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
}

.card-revista .card-img {
  width: 100%;
  height: auto;
}

.card-revista .card-title {
  font-size: 1.5rem;
  color: #777;
}

.btn-leer-mas {
  border: 2px solid var(--color-secundario);
  height: 40px;
  width: 100px;
  margin: 0 auto;
  padding: 7px 0;
  font-size: 1rem;
  border-radius: 25px;
  font-weight: 700;
  color: var(--color-secundario);
}

.card-revista .btn-leer-mas:hover {
  background-color: var(--color-secundario);
  color: #fff;
  transition: 0.55s;
}

.tiulo-a\f1o {
  color: var(--color-blanco);
  background-color: var(--color-azul-oscuro);
  font-size: 3rem;
}

header {
  position: relative;
  width: 100%;
  height: 70vh;
}

header img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

header .title-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

header .title-block h1 {
  font-size: 3rem;
  text-shadow: 0 0 10px white;
  animation: zoomIn 1s ease-in-out;
}

.redes-sociales {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
}

.redes-sociales a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 1.4rem;
  fill: #fff;
  border-radius: 50%;
  border: 2px solid white;
  animation: flip;
  animation-duration: 1.5s;
  transition: 0.55s;
}

.redes-sociales a:hover {
  background-color: #fff;
  fill: #000;
}

.redes-sociales a svg {
  width: 30px;
}

.contactanos {
  font-size: 2rem;
  color: #fff;
  text-shadow: 1px 1px 20px black;
  text-align: center;
  padding: 15px 0 0;
  overflow: hidden;
}

.contactanos p {
  animation: fadeInRight;
  animation-duration: 1.5s;
}
</style>
