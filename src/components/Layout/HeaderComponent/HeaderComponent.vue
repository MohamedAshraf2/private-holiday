<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="">Private Holidays</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto">
            <img src="../../../assets/images/Rectangle.png" class="imge" />
            <li class="nav-item">
              <a class="nav-link">
                <button
                  class="btn"
                  @click.prevent="
                    navegatorname('Home'), $emit('navigatto', goTo)
                  "
                >
                  Home
                </button>
              </a>
            </li>
            <img src="../../../assets/images/Rectangle.png" class="imge" />
            <li class="nav-item">
              <a class="nav-link"
                ><button
                  class="btn"
                  @click.prevent="
                    navegatorname('Experiences'), $emit('navigatto', goTo)
                  "
                >
                  Experiences
                </button></a
              >
            </li>
            <img src="../../../assets/images/Rectangle.png" class="imge" />
            <li class="nav-item">
              <a class="nav-link"
                ><button
                  class="btn"
                  @click.prevent="
                    navegatorname('Questions'), $emit('navigatto', goTo)
                  "
                >
                  Questions
                </button>
              </a>
            </li>
            <img src="../../../assets/images/Rectangle.png" class="imge" />
            <li class="nav-item">
              <a class="nav-link">
                <button
                  class="btn"
                  @click.prevent="
                    navegatorname('Contact'), $emit('navigatto', goTo)
                  "
                >
                  Contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      goTo: "",
    };
  },
  methods: {
    navegatorname(val) {
      this.goTo = val;
      // console.log(this.goTo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './styles.scss'
</style>
