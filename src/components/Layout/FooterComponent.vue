<template>
  <footer
    class="text-center text-md-start text-white"
    style="background-color: rgb(23, 29, 28, 1)"
  >
    <div class="rowFotter ">
      <!-- Grid row -->
      <div class="row mt-5 footer-left">
        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3 first-col">
          <!-- Content -->
          <h6 class="fw-bold mt-4">Information</h6>
          <p>
            <a href="#!" class="x">About us</a>
          </p>
          <p>
            <a href="#!" class="x">Online enquiry</a>
          </p>
          <p>
            <a href="#!" class="x">Call us</a>
          </p>
          <p>
            <a href="#!" class="x">General enquiries</a>
          </p>
          <p>
            <a href="#!" class="x">Booking conditions</a>
          </p>
          <p>
            <a href="#!" class="x">Privacy policy</a>
          </p>
          <p>
            <a href="#!" class="x">Refund policy</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 first-col">
          <!-- Content -->
          <h6 class="fw-bold mt-4 ">Experiences</h6>
          <p>
            <a href="#!" class="x">Beach</a>
          </p>
          <p>
            <a href="#!" class="x">Adventure</a>
          </p>
          <p>
            <a href="#!" class="x">Wildlife</a>
          </p>
          <p>
            <a href="#!" class="x">Honeymoon</a>
          </p>
          <p>
            <a href="#!" class="x">Culture & heritage</a>
          </p>
          <p>
            <a href="#!" class="x">Nature</a>
          </p>
          <p>
            <a href="#!" class="x">Spiritual</a>
          </p>
          <p>
            <a href="#!" class="x">Hill station</a>
          </p>
        </div>

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 thr-col">
          <!-- Content -->
          <h6 class="fw-bold mt-4 ">Themes</h6>
          <p>
            <a href="#!" class="x">Party</a>
          </p>
          <p>
            <a href="#!" class="x">Wedding</a>
          </p>
          <p>
            <a href="#!" class="x">Group tours</a>
          </p>

        </div>

        <!-- Grid column -->

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 med-column first-col">
          <!-- Content -->
          <h6 class="fw-bold mt-4 h6-med">Popular destinations</h6>
          <div class="rowmed">
            <div class="rowmed-left">
              <p>
                <a href="#!" class="x">Leh-Ladakh</a>
              </p>
              <p>
                <a href="#!" class="x">Manali</a>
              </p>
              <p>
                <a href="#!" class="x">Ooty </a>
              </p>
              <p>
                <a href="#!" class="x">Allepey </a>
              </p>
              <p>
                <a href="#!" class="x">Darjeeling </a>
              </p>
              <p>
                <a href="#!" class="x">Goa </a>
              </p>
              <p>
                <a href="#!" class="x">Mahabaleshwar</a>
              </p>
              <p>
                <a href="#!" class="x">Agra</a>
              </p>
            </div>
            <div class="rowmed-right">
              <p>
                <a href="#!" class="x">Coorg </a>
              </p>
              <p>
                <a href="#!" class="x">Mysore </a>
              </p>
              <p>
                <a href="#!" class="x">Gir </a>
              </p>
              <p>
                <a href="#!" class="x">Kabini </a>
              </p>
              <p>
                <a href="#!" class="x">Jaipur </a>
              </p>
              <p>
                <a href="#!" class="x">Kodaikanal </a>
              </p>
              <p>
                <a href="#!" class="x">Andaman </a>
              </p>
              <p>
                <a href="#!" class="x">Shimla</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Grid column -->
      </div>

      <div class="mb-4 mt-5 links">
        <!-- Links -->

        <p class="mt-4">Phone: +91-80-41127931</p>
        <p>Email: info@aztechdesign.co</p>

        <h6 class="fw-bold mt-4 mb-4">Address</h6>
        <p>1st Main, Bucharest</p>
        <p>2nd Stage Raiffisen Tower</p>
        <p>Bucharest - 400400,</p>
        <p>Romania</p>
      </div>

      <!-- Grid row -->
    </div>
  </footer>
  <!-- Footer -->

  <!-- End of .container -->
</template>

<script>
export default {};
</script>

<style scoped>
.x {
  text-decoration: none;
  color: white;
  font-style: normal;
}
h6{
    font-size: 14px;
}
.first-col p,
.thr-col p{
    margin: 5px 0 0 0;
    font-size: 13px;
    width: max-content;
}
.rowFotter {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.footer-left{
    width: 50%;
}
.links {
  text-align: end;
}

.links p{
margin: 0% !important;
}

.h6-med{
    width: max-content;
    
}
.rowmed{
    display: flex;
    /* justify-content: center; */
    width: 100%;
}

.first-col{
    padding: 0% !important;
    margin-left: 0% !important;
    margin-right: 5% !important;
}
.thr-col{
    padding: 0% !important;
    margin-left: 0% !important;
    margin-right: 3% !important;
}
.rowmed-right{
    margin-left:40%;
    
}

@media screen and (max-width: 769px) {
  .rowFotter {
    display: block;
  }
  .footer-left{
    margin: auto;
}

.first-col{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.thr-col{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.links{
    text-align: center;
}
.rowmed{
    justify-content: center;
}
.rowmed-right{
    margin-left:20%;
    
}
}

</style>
