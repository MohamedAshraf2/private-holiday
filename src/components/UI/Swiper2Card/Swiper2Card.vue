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
import CardSwiper2 from "../CardItemSwiper2/CardSwiper2.vue";

export default {
  components: {
    CardSwiper2,
  },
};
</script>

<style scoped lang="scss">
@import './styles.scss'
</style>
