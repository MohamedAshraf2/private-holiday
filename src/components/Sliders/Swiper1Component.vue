<template>
  <h1 class="headComponentTxt">See latest vacation ideas</h1>
  <!-- <div class="swiper-pagination"></div> -->
  
  <div class="swiperMainContainer">
    <div class="swiperContainer">
      <swiper
        :modules="modules"
        class="swiper"
        :slides-per-view="dataValue"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"

      >
      <!-- <div class="swiper-wrapper"> -->
        <swiper-slide v-for="text in swipeTextBase" :key="text.id">
          <div class="swiper-card container">
            <img :src="text.img" class="imag" />
            
            <div class="imgTxt centered">
              <div class="innerDiv">
                <h4>{{ text.text }}</h4>
              </div>
            </div>
          </div>
        </swiper-slide>
      <!-- </div> -->

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
  width: 353px;
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

.innerDiv{
  width: 90%;
  height: 80px;
  border: 1px solid RGBA(204, 204, 204, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
@font-face {
  font-family: "keplerstd-bolddisp";
  src: local("keplerstd-bolddisp"),
   url(../../assets/fonts/KeplerStd-BoldDisp.otf) format("truetype");
}
.innerDiv h4{
  font-family: "keplerstd-bolddisp";
  font-size: 24px;
font-weight: bold;
font-style: normal;
text-align: left;
color: #454851;
}
.centered {
  margin-top: 20%;
  height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width:80%
}

@media screen and (max-width: 1250px) {
  .swiper .swiper-wrapper{
    /* display: block !important;/ */
    /* flex-direction: column; */
  }
}
</style>
