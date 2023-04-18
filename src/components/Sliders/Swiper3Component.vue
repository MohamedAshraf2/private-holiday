<template>
    <h1 class="headComponentTxt">Why we are different</h1>
    
    <div class="swiperMainContainer">
      <div class="swiperContainer">
        <swiper
          :modules="modules"
          class="swiper"
          :slides-per-view="dataValue"
          :space-between="70"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
  
        >
        
          <swiper-slide v-for="text in swipeTextBase" :key="text.id">
            <div class="container">
              <img src="../../assets/images/swiper3.png" class="imag" />
              
              <div class="imgTxt ">
                <h4>{{ text.head }}</h4>
                <p>{{ text.text }}</p>
              </div>
            </div>
          </swiper-slide>
  
          ...
        </swiper>
      </div>
    </div>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Pagination } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/pagination";
  import { ref } from "vue";
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        screenWidth: window.innerWidth,
        dataValue: 3
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize)
    },
    unmounted() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize() {
        this.screenWidth = window.innerWidth
        if (this.screenWidth < 768) {
          this.dataValue = 1
        } else if(this.screenWidth < 1200) {
          this.dataValue = 2
        }else{
          this.dataValue=3
        }
      }
    },
    watch: {
      screenWidth(newWidth) {
        if (newWidth < 768) {
          this.dataValue = 1
        } else if(newWidth < 1200) {
          this.dataValue = 2
        }else{
          this.dataValue=3
        }
      }
    },
    setup() {
      const swipeTextBase = ref([
        {
          id: 1,
          head: "Tailor-Made Packages",
          text: "When it comes to delivering the best planned holiday package to you, we strive to exceed your expectations. For us, it has to be spot-on. We do what we do in the ideal way possible.",
        },
        {
          id: 2,
          head: "Best Experience",
          text: "At Purplerain Holidays, we choose to put forth an essence of our own expertise and firsthand experiences into our services and method of planning.",
        },
        {
          id: 3,
          head: "Exquisite Service",
          text: "From the moment you make the first call to enquire, our services are geared up. From the time booking, to your stay and well after the trip as well, we will guide you and be at your back and call.",
        },
        {
          id: 4,
          head: "Tailor-Made Packages",
          text: "When it comes to delivering the best planned holiday package to you, we strive to exceed your expectations. For us, it has to be spot-on. We do what we do in the ideal way possible.",
        },
        {
          id: 5,
          head: "Best Experience",
          text: "At Purplerain Holidays, we choose to put forth an essence of our own expertise and firsthand experiences into our services and method of planning.",
        },
      ]);
  
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log("slide change" );
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination],
        swipeTextBase,
      };
    },
  };
  </script>
  
  <style scoped>
  
  .headComponentTxt{
    font-family: 'keplerstd-bolddisp ';
    font-size: 50px;
  }
  
  .imag {
    height: 130px;
    /* width: 111px; */
  }

  @font-face {
  font-family: "keplerstd-bolddisp";
  src: local("keplerstd-bolddisp"),
   url(../../assets/fonts/KeplerStd-BoldDisp.otf) format("truetype");
}
  .swiperMainContainer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .swiperContainer {
    width: 85%;
  }
  .swiper {
    z-index: 0;
  }
.imgTxt h4{

    font-family:keplerstd-bolddisp ;
}
  

  </style>
  