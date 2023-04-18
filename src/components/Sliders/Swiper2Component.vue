<template>
    <h1 class="headComponentTxt">Recent holiday locations</h1>
    <!-- <div class="swiper-pagination"></div> -->
    
    <div class="swiperMainContainer">
      <div class="swiperContainer">
        <swiper
          :modules="modules"
          class="swiper"
          :slides-per-view="1"
          :space-between="70"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
  
        >
          <swiper-slide >
              <swiper-2-card/>
        </swiper-slide>
          <swiper-slide >
              <swiper-2-card/>
        </swiper-slide>
          <swiper-slide >
              <swiper-2-card/>
        </swiper-slide>
          <swiper-slide >
              <swiper-2-card/>
        </swiper-slide>
          <swiper-slide >
              <swiper-2-card/>
        </swiper-slide>
        
          ...
        </swiper>
      </div>
    </div>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Pagination, Scrollbar } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import { ref } from "vue";
import Swiper2Card from '../UI/Swiper2Card.vue';
  export default {
    components: {
      Swiper,
      SwiperSlide,
        Swiper2Card,
    },
    
    setup() {
      const swipeTextBase = ref([
        {
          id: 1,
          text: "Beachfront Escapes",
          img: "https://images.unsplash.com/photo-1593741033257-976c42bbac85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        },
        {
          id: 2,
          text: "Beachfront Escapes",
          img: "https://images.unsplash.com/photo-1666256814285-ebc1ebbb8f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        },
        {
          id: 3,
          text: "Beachfront Escapes",
          img: "https://images.unsplash.com/photo-1666136242367-ed55385923b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        },
        {
          id: 4,
          text: "Beachfront Escapes",
          img: "https://images.unsplash.com/photo-1593741033257-976c42bbac85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        },
        {
          id: 5,
          text: "Beachfront Escapes",
          img: "https://images.unsplash.com/photo-1666256814285-ebc1ebbb8f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
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
        modules: [Pagination, Scrollbar],
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
    height: 303px;
    width: 423px;
  }
  .swiperMainContainer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .swiperContainer {
    width: 100%;
  }
  .swiper {
    z-index: 0;
  }
  .swiper-card {
    position: relative;
    text-align: center;
    /* color: white; */
  }
  
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width:80%
  }
  </style>
  