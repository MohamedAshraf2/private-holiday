<template>
  <div class="d-flex justify-content-center">
    <form class="formWidth">
      <div class="row reservCont justify-content-between">
        <reservation-inputs @add="(i) => (hotel = i)" :optionsData="locations" class="col-lg-6 col-md-12 col-xl-2" />
        <TimePickComponent @add="(i) => (startDate = i)" class="col-lg-6 col-md-12 col-xl-2" />
        <TimePickComponent @add="(i) => (endDate = i)" class="col-lg-6 col-md-12 col-xl-2" />
        <reservation-inputs @add="(i) => (beds = i)" :optionsData="bedsNums" class="col-lg-6 col-md-12 col-xl-2" />
        <div class="col-xl-2 col-lg-2 col-md-12">
          <button type="button" class="btn btn-circle" @click="logAll">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="ico" />
          </button>
        </div>
      </div>
      <p v-if="valid">Pleas Enter Valid data</p>
    </form>
  </div>
</template>

<script>
import TimePickComponent from "./TimePickComponent.vue";
import ReservationInputs from "./ReservationInputs.vue";

import { ref } from "vue";

export default {
  data() {
    return {
      valid : false,
      startDate: ref("0"),
      endDate: ref("0"),
      hotel: ref("0"),
      beds: ref("0"),
      locations:['Mauritius1','Mauritius2','Mauritius3','Mauritius4'],
      bedsNums:[" 1 Bed "," 2 Beds "," 3 Beds " ]
    };
  },

  methods: {
    logAll: function () {
      if(this.startDate == "0" || this.endDate == "0" || this.hotel == "0" || this.beds == "0" ){
        this.valid = true
      }else {
        console.log("start = " + this.startDate);
        console.log("end = " + this.endDate);
        console.log("hotelName = " + this.hotel);
        console.log("beds = " + this.beds);
        this.valid = false
      }
    },
  },

  components: {
    TimePickComponent,
    ReservationInputs,
  },
};
</script>

<style scoped>

.container{
  align-items: center;
  justify-content: center;
}
.formWidth{
  width: 73%;
  align-self: center;
}
.reservCont {
 /* width: 80%; */
  display: flex;
  align-items: center;
  /* max-width: 68rem; */
  margin: 2rem auto;
  padding: 4rem 1rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.096);
}

.ico {
color: white;
}

.btn-circle {
  width: 40px;
  height: 40px;
  padding: 6px 0px;
  border-radius: 25px;
  margin-left: 10%;
  background-color: RGBA(243, 17, 49, 1);
}

@media screen and (max-width: 1200px) {

  .btn-circle {
    margin-left: 40%;
  }
}
@media screen and (max-width: 1024px) {
  .btn-circle {
    margin-left: 60%;
  }
}
@media screen and (max-width: 993px) {
  .btn-circle {
    margin-left: 0;
  }
}
</style>
