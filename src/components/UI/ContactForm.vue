<template>
  <div class="contact-form">
    <h2>Send us a message</h2>
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

<style scoped>
@font-face {
  font-family: "keplerstd-bolddisp";
  src: local("keplerstd-bolddisp"),
    url(../../assets/fonts/KeplerStd-BoldDisp.otf) format("truetype");
}
h2 {
  font-family: keplerstd-bolddisp;
  align-self: flex-start;
  margin: 10% 0 5% 10%;
}
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  width: 75%;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid RGBA(204, 204, 204, 1);
  font-size: 13px;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  box-shadow: none;
}

/* .underline {
  width: 100%;
  height: 1px;
  background-color: RGBA(204, 204, 204, 1);
} */

.btn {
  background-color: #f31131;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 30px;
  font-size: 16px;
  margin: 7% 50% 0 0;
  cursor: pointer;
}

.btn:hover {
  background-color: #c4061f;
}
</style>
