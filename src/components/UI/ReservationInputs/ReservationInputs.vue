<template>
  <div class="container mainContainer">
    <div class="input-container">
      <input
        type="text"
        class="form-control"
        :placeholder="placehold"
        @focus="isDropdownOpen = true"
        @blur="v$.selectedOption.$touch"
        required
        />
        <!-- @blur="isDropdownOpen=false" -->
        <!-- v-model="selectedOption" -->
      <font-awesome-icon
        icon="fa-solid fa-circle-chevron-down"
        class="dropdown-icon"
        @click="isDropdownOpen = !isDropdownOpen"
        :class="{ open: isDropdownOpen }"
      />

      <ul class="dropdown-list" v-if="isDropdownOpen">
        <li
          v-for="(option, index) in optionsData"
          :key="index"
          @click="selectOption(option), $emit('add', option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
    <div v-if="v$.selectedOption.$error" class="unValid">Please Pick a valid option.</div>
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
  props:['optionsData'],
  data() {
    return {// dropdown options
      selectedOption: "", // selected option
      isDropdownOpen: false, // dropdown visibility flag
      placehold:"select an option" // the value appears on input
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
      this.placehold = option
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import './styles.scss';
</style>
