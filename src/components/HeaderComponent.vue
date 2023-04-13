<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="">Private Holidays</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Experiences</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Questions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-nav{
  width: 70%;
  justify-content: space-around;
}

@media screen and (max-width:990px) {
  .navbar-nav{
  width: 100%;}
}

@font-face {
  font-family: "lustscript";
  src: local("lustscript"),
   url(../assets/fonts/Lust-Script.ttf) format("truetype");
}

.navbar-brand{
font-family: "lustscript";
font-size: 36px;
font-weight: 400;
font-style: normal;
text-align: left;
color: #171D1C;
}

@media screen and (max-width:550px) {
  .navbar-brand{
    font-size: 24px;}
}
</style>
