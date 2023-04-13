<template>
  <div class="container">
    <form>
      <div class="row reservCont justify-content-between">
        <reservation-inputs @add="(i) => (hotel = i)" class="col-lg-2" />
        <TimePickComponent @add="(i) => (startDate = i)" class="col-lg-2" />
        <TimePickComponent @add="(i) => (endDate = i)" class="col-lg-2" />
        <reservation-inputs @add="(i) => (beds = i)" class="col-lg-2" />
        <div class="col-lg-2">
          <button
            type="button"
            class="btn btn-danger btn-circle"
            @click="logAll"
          >
            <svg
              class="ico"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import TimePickComponent from "../components/TimePickComponent.vue";
import ReservationInputs from "./ReservationInputs.vue";

import { ref } from "vue";

export default {
  data() {
    return {
      startDate: ref("0"),
      endDate: ref("0"),
      hotel: ref("0"),
      beds: ref("0"),
    };
  },

  methods: {
    logAll: function () {
      console.log("start = " + this.startDate.toLocaleDateString("en-US"));
      console.log("end = " + this.endDate.toLocaleDateString("en-US"));
      console.log("hotelName = " + this.hotel);
      console.log("beds = " + this.beds);
    },
  },

  components: {
    TimePickComponent,
    ReservationInputs,
  },
};
</script>

<style scoped>
.reservCont {
  max-width: 68rem;
  margin: 2rem auto;
  padding: 2rem 1rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.ico {
  width: 15px;
}

.btn-circle {
  width: 50px;
  height: 50px;
  padding: 6px 0px;
  border-radius: 25px;
}
</style>
