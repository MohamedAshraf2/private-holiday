<template>
  <div class="contact-component">
    <div class="form-container">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "../UI/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style>
.contact-component {
  width: 100%;
  height: 573px;
  background-image: url("../../assets/images/luxuryretreats\ .jpg");
  position: relative;
}
.form-container {
  width: 29%;
  position: absolute;
  bottom: 0;
  right: 160px;
  height: 400px;
  background-color: white;
}

@media screen and (max-width: 930px) {
  .form-container {
    width: 40%;
  }
}
@media screen and (max-width: 710px) {
  .form-container {
    width: 80%;
    right: 30px;
  }
}
</style>
