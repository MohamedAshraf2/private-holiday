<template>
  <div class="container mainContainer ">
    <div class="input-container">
      <input
        type="text"
        class="underline-input"
        placeholder="pick date"
        :value='date2.toLocaleDateString("en-US",options)'
        @focus="isDropdownOpen = true"
        :class="{ open: isDropdownOpen }"
        @click="isDropdownOpen = !isDropdownOpen "
        @blur="v$.date2.$touch"
        required
        />
        
        <svg
        class="dropdown-icon"
        @click="isDropdownOpen = !isDropdownOpen "
        :class="{ open: isDropdownOpen }"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <image
          id="dropdown_copy"
          data-name="dropdown copy"
          width="16"
          height="16"
          xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZklEQVQ4jY3Tz0qVURQF8F/3qpcmmiPHOahQnyIJCgUV/zQuGjRwIjjxJRQkqkHRKAgUQVAQEnyBO5RQB4IjB0qYIaKTYsf+5PPjemnBgXP23muxzj773Gs2myoYwBu8wMNMHWILn/CjXF4r7bvwDjs4wQx6cr3MWOQ+4n5BKhwEeRPneI1fVVuJEPuM3nR4XThYwm9MtSHL3DTOsBiBDgxiEo/wpw25QNS8wj4+1LJh79P+/yJql4MbAs+xnsQG5lFvIVTPXCPPG8ENgX7slQqH8bUiUs/YcCkWV+gvP2PgCuPZ7UKkIPdk7ipru4pXiCF50kYkVneFLJ0f1XLCxto4iTVRIQdGsB2DNITveNziJRolwTK6swfPwsEu1vAlJrOFkyo5aqI2OLtFE+dSdTUt34XIreBBcm4+03Xe6RgHWEBcrTO7HfuIRe4Uo8m59RsjMIun6Es3F/iJbxmLOXiLy38M/AXz+VTiJwihFQAAAABJRU5ErkJggg=="
        />
      </svg>
      <ul class="dropdown-list" v-if="isDropdownOpen">
        <VDatePicker class="calender" v-model="date2" @click="  $emit('add', date2) ,(isDropdownOpen = !isDropdownOpen )" />
      </ul>
      <!-- <div v-if="!date2">Error! Choose something!</div> -->
    </div>
    <div v-if="v$.date2.$error">Name field has an error.</div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { ref } from "vue";
export default {
  setup () {
    return {
      v$: useVuelidate()
    }
  },
    data() {
        return {
        options : {  year: 'numeric', month: 'long', day: 'numeric' },
      // dropdown options
      date2: ref(new Date()),
      isDropdownOpen: false, // dropdown visibility flag
    };
    
  },
  validations () {
    return {
      date2: { required }
    }
  },
  methods: {

  },
};
</script>

<style scoped>
.input-container {
  position: relative;
  display: inline-block;
}

.underline-input {
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 10px;
  font-size: 16px;
  width: 200px;
}

.calender{
  z-index: 3;
}

.dropdown-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

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
</style>
