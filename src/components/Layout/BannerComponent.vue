<template class="mainBannerComponent">
  <div class="imageComponent">
    <p class="bannerTxt">ENJOY FREEDOM LAND</p>
  </div>
  <div class="revCont">
    <reservation-container />

  </div>
</template>

<script>
import ReservationContainer from "../UI/ReservationContainer.vue";

export default {
  name: "BannerComponent",
  components: {
    ReservationContainer,
    
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "proximanova-extrabld";
  src: local("proximanova-extrabld"),
    url(../../assets/fonts/FontsFree-Net-Proxima-Nova-Xbold.otf) format("truetype");
}
.mainBannerComponent {
  display: flex;
}
.imageComponent {
  display: flex;
  background-image: url("../../assets/images/luxuryretreats\ .jpg");
  height: 509px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.bannerTxt {
  font-family: "proximanova-extrabld";
  font-size: calc(50px + (35 - 10) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: #ffffff;
}

.revCont {
  margin-top: -5%;
}

@media screen and (max-width: 990px) {
}

@media screen and (max-width: 550px) {
}
</style>
