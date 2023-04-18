<template class="container">
  <div class="cardx">
    <div class="swiperView card-half">
      <div class="card-image row">
        <card-swiper-2 class="imge col-md" />
        <card-swiper-2 class="imge col-md" />
      </div>
      <div class="card-image row">
        <card-swiper-2 class="imge col-md" />
        <card-swiper-2 class="imge col-md" />
      </div>
    </div>
  </div>
</template>

<script>
import CardSwiper2 from "./CardSwiper2.vue";

export default {
  components: {
    CardSwiper2,
  },
};
</script>

<style scoped>
.cardx {
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
}
.swiperView {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card-half {
  width: 85%;
  height: 50%;
  padding: 20px;
  box-sizing: border-box;
}

.card-image {
  /* display: flex; */
  /* overflow: hidden; */
}

.imge {
  /* width: 100%; */
  /* height: 100%; */
  /* object-fit: cover; */
  margin: 1%;
}
</style>
