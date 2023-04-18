<template>
  <HeaderComponent/>
  <BannerComponent/>
  
  <Swiper1Component/>
  <Swiper2Component/>
  <Swiper3Component/> 
  <contact-component/>
  <!-- <size-change/> -->
  <footer-component/>
</template>

<script>
import HeaderComponent from './components/Layout/HeaderComponent.vue';
import BannerComponent from './components/Layout/BannerComponent.vue';
import Swiper3Component from './components/Sliders/Swiper3Component.vue';
import Swiper1Component from './components/Sliders/Swiper1Component.vue';
import Swiper2Component from './components/Sliders/Swiper2Component.vue';
import ContactComponent from './components/Layout/ContactComponent.vue';
import FooterComponent from './components/Layout/FooterComponent.vue';
// import SizeChange from './components/SizeChange.vue';


// import CardSwiper2 from './components/CardSwiper2.vue';
// import Swiper2Component from './components/Swiper2Component.vue';

export default {
  name: 'App',  
  components: {
    HeaderComponent,
    BannerComponent,
    Swiper1Component,
    Swiper2Component,
    Swiper3Component,
    ContactComponent,
    FooterComponent,
    // SizeChange
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
  background-color: #ECF0F1;
}

</style>
