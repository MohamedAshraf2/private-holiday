<template>
  <div class="container mainContainer">
    <div class="input-container">
      <input
        type="text"
        class="form-control"
        :placeholder="HotelLocations[0]"
        v-model="selectedOption"
        required
        @focus="isDropdownOpen = true"
      />
      <font-awesome-icon
        icon="fa-solid fa-circle-chevron-down"
        class="dropdown-icon"
        @click="isDropdownOpen = !isDropdownOpen"
        :class="{ open: isDropdownOpen }"
      />

      <ul class="dropdown-list" v-if="isDropdownOpen">
        <li
          v-for="(option, index) in HotelLocations"
          :key="index"
          @click="selectOption(option), $emit('add', option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
    <!-- <div v-if="!selectedOption">Error! Choose something!</div> -->
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  props:['HotelLocations'],
  data() {
    return {// dropdown options
      selectedOption: "", // selected option
      isDropdownOpen: false, // dropdown visibility flag
    };
  },
  validations() {
    return {
      selectedOption: { required },
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style>
.input-container {
  position: relative;
  display: inline-block;
}

.form-control {
  border: none;
  border-bottom: 2px solid RGBA(204, 204, 204, 1);
  padding: 5px 10px;
  font-size: 16px;
  width: 150px;
}

.dropdown-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #e4e4e4;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}

.dropdown-icon.open {
  transform: translateY(-50%) rotate(180deg);
}

.dropdown-list {
  list-style: none;
  margin: 0;
  padding: 5px 0;
  border: 1px solid #ccc;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1;
}

.dropdown-list li {
  padding: 5px 10px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f4f4f4;
}

@media screen and (max-width: 1200px) {
  .form-control{
    width: 300px;
}
}

@media screen and (max-width: 500px) {
  .form-control{
    width: 170px;
}
}
</style>
