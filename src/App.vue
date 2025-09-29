<script setup lang="ts">
import CpsFooter from './components/CpsFooter.vue';
import CpsHeader from './components/CpsHeader.vue';

</script>

<template>
  <div id="app">
    <CpsHeader />
    <main>
      <router-view />
    </main>
    <CpsFooter />
  </div>
</template>
