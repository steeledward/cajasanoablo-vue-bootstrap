<template>
  <div class="container overflow-hidden py-6">
    <div class="grid-wrapper col">
      <div v-for="(value, index) in gallery" class="lc-block" :key="index">
        <img class="img-fluid rounded rounded" :src="value.src" alt="" loading="lazy">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const gallery = [
  {
    src: "/src/assets/img-inauguracion-el-salto/salto_1.jpeg"
  },
  {
    src: "/src/assets/img-nino-2025-event/nino_1.webp"
  },
  {
    src: "/src/assets/img-nov-event/191.webp"
  },
  {
    src: "/src/assets/img-nov-event/167.webp"
  },
  {
    src: "/src/assets/img-nov-event/150.webp"
  },
  {
    src: "/src/assets/img-nov-event/140.webp"
  }
]
</script>
<style lang="css" scoped>
/* Main CSS */
.grid-wrapper>div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-wrapper>div>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}

.grid-wrapper .wide {
  grid-column: span 2;
}

.grid-wrapper .tall {
  grid-row: span 2;
}

.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
