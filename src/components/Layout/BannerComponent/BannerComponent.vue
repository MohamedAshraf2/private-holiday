<template class="mainBannerComponent">
  <div class="imageComponent">
    <p class="bannerTxt">ENJOY FREEDOM LAND</p>
  </div>
  <div class="revCont">
    <reservation-container />

  </div>
</template>

<script>
import ReservationContainer from "../../UI/ReservationContainer/ReservationContainer.vue";

export default {
  name: "BannerComponent",
  components: {
    ReservationContainer,
    
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles.scss';
</style>
