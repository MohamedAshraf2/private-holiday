<template>
  <div class="contact-form">
    <h2 class="hh2">Send us a message</h2>
    <div class="form">
      <div class="form-group">
        <input
          type="text"
          id="name"
          v-model="name"
          class="form-control"
          placeholder="Your name"
        />
        <div class="underline"></div>
      </div>
      <div class="form-group">
        <input
          type="email"
          id="email"
          v-model="email"
          class="form-control"
          placeholder="Email"
        />
        <div class="underline"></div>
      </div>
      <div class="form-group">
        <textarea
          id="message"
          v-model="message"
          class="form-control"
          placeholder="Message"
        ></textarea>
        <div class="underline"></div>
      </div>
    </div>
  </div>
  <button type="submit" class="btn" @click="submitForm">Send</button>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log("Form submitted:", this.name, this.email, this.message);
      this.name ="",
      this.email="",
      this.message=""
    },
  },
};
</script>

<style scoped lang="scss">
@import './styles.scss'
</style>
