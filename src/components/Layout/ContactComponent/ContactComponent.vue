<template>
  <div class="contact-component">
    <div class="form-container">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "../../UI/ContactForm/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style scoped lang="scss">
@import './styles.scss'
</style>
