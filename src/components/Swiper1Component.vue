<template>
  <h1>See latest vacation ideas</h1>
  <div class="swiperMainContainer">
  <div class="swiperContainer">
    <swiper
      class="swiper"
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="text in swipeTextBase" :key="text.id">
        <div>
            
          <h1>{{ text.text }}</h1>
        
        <img :src="text.img" class="imag" />
    </div>
      </swiper-slide>

      ...
    </swiper>
  </div>
</div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
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
      console.log("slide change");
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
.imag {
  height: 303px;
  width: 423px;
}
.swiperMainContainer{
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
</style>
