<template>
  <HeaderComponent/>
  <BannerComponent/>
  <Swiper1Component/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import BannerComponent from './components/BannerComponent.vue'
import Swiper1Component from './components/Swiper1Component.vue';
export default {
  name: 'App',  
  components: {
    HeaderComponent,
    BannerComponent,
    Swiper1Component
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-size: calc(14px + (20 - 13) * ((100vw - 300px) / (1600 - 300)));
}

</style>
