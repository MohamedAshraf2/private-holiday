<template>
  <HeaderComponent @navigatto="(i) => (navLink = i)"/>
  <section ref="Home" >
    <BannerComponent />
  </section>
  <section ref="Experiences" class="container">
    <Swiper1Component />
  </section>
  <section class="container">
    <Swiper2Component />
  </section >
  <section ref="Questions" class="container">
    <Swiper3Component />
  </section>
  <section ref="Contact">
    <contact-component />
  </section>
  <footer-component />
</template>

<script>
import HeaderComponent from "./components/Layout/HeaderComponent/HeaderComponent.vue";
import BannerComponent from "./components/Layout/BannerComponent/BannerComponent.vue";
import Swiper3Component from "./components/Sliders/Swiper3Component/Swiper3Component.vue";
import Swiper1Component from "./components/Sliders/Swiper1Component/Swiper1Component.vue";
import Swiper2Component from "./components/Sliders/Swiper2Component/Swiper2Component.vue";
import ContactComponent from "./components/Layout/ContactComponent/ContactComponent.vue";
import FooterComponent from "./components/Layout/FooterComponent/FooterComponent.vue";

export default {
  name: "App",
  data(){
    return{
      navLink:''
    }
  },
  components: {
    HeaderComponent,
    BannerComponent,
    Swiper1Component,
    Swiper2Component,
    Swiper3Component,
    ContactComponent,
    FooterComponent,
  },
  methods:{
    gotoContact(){
      const top = this.$refs[this.navLink].offsetTop;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  watch:{
    navLink: function(){
      this.gotoContact()
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ecf0f1;
}
</style>
