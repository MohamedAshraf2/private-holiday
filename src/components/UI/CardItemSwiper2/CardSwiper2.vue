<template>
  <div class="card">
    <div class="card-half card-half-left">
      <div class="images-container">
        <div class="card-image1">
          <a href="#" class="imgLink">
            <img src="../../../assets/images/resisss.jpg  " />
          </a>
        </div>
        <div class="card-image3">
          <img src="../../../assets/images/resisss.jpg  " />
          <img src="../../../assets/images/resisss.jpg  " />
          <img src="../../../assets/images/resisss.jpg  " />
        </div>
      </div>
    </div>
    <div class="card-half card-half-right">
      <!-- <div class="cardtxt"> -->
      <h1 class="card-title cardtxt">{{ title }}</h1>
      <p class="card-description cardtxt">{{ description }}</p>
      <!-- </div> -->
      <div class="cardtxt">
        <!-- <i
          class="icon"
          v-for="(icon, index) in icons"
          :class="icon"
          :key="index"
        ></i> -->
        <div class="card-icons">
        <div class="tooltips">
        <svg class="svgg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="22"
          height="16"
          viewBox="0 0 22 16"
          
        >
          <image
            id="bed"
            width="22"
            height="16"
            xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABcUlEQVQ4jdWTOUsEQRCFv9XV9UJdEVZEBMErGxTFhg6MBAMTf4CImYGBsYihgeH+DtlI8BeMDILBRN5nsCjKYuCBIioFNTIMrcyykQ+anumufv3qVXVmZnaelGjR+SW+aI3nDM7qPAqMAIPAMNAPFIBeoBVoS5x7Ap6Bsh+Ed8ANcAKcAcfWeEcR8aHjUlEWHZLvN13PqfpuFTPmOJvJxn5OgTXgArgCKmn8AbqAAR2bwFDcCkEZ2E5J9gNrvIqKOPCDcMVFHIeka4E+4BXYB651X5RNAk1ikx+Ee9Z470kCF3E7sKMFjPCpNjUDG+JhbO/cD8I5azwRcBsJiNqtE/jQaichhfpS5S4rnCmL4iVgAcjrEKJGnRsS8XL5g6qSAl/6QXivGUlLdmimu0K8CEz/4rVLSI+OqT/iCnUpCavG/yMWz0rAhBZAXl0tkMJJ0UtCXATGgUdgtVrWeLv5QbgOGGu8YvRAlrVXa8UWUA/wDW0zUkHLMW9tAAAAAElFTkSuQmCC"
          /></svg>
          <span class="tooltiptext">Tooltip text</span>
        <p class="numsOf">3</p>
      </div>
      <div class="tooltips">
        <svg class="svgg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="24"
          height="16"
          viewBox="0 0 24 16"
        >
          <image
            id="bath"
            width="24"
            height="16"
            xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAABqUlEQVQ4jaXUz4tOURgH8M8wSJRYTby9ERHF3d66RBgxJSwtp5R/gK29qLFnYeytFDZK9OqNold+baT8bBYWojTI6EzPHbfbzHuH91u3e87pOd/veZ7zfc7Q6OETBsA6fC3y7OdCFEtq8224hzvYsAjdg2iXk063d6AesHTzlu3V+Xkcxyb8CKF+eI5j795PHWq3Rjrt1sibeuxwbf6iMn65iAzWp4NjaqGAusAE3mIrbjeQp3LORKancWG+oPolr8F97MRv3I0vrbewHCfxC1fwucizM/1OUc0gbb4e5MIA+1FErT9gbyLFY4xiuiHLWYFr2BU1Ty74jpWVmE/JDCG2Ktb24BW+dLq9fvxPk8AlXMSyWEy1Xxvj6aixuJv5sCKyr2IoxhPDke5rnMINjIU9x5rSb8DlIs+elI02Gf+jeIQdA5LPcZYCnYrvd2PjgOTJFA+qAsnPfe32jzhb5NmM2lt0E+Nhw/9F2jte5Nmtcn+9k6/iSFzys3jwkjVXR2zpjnS61Gzf4vsY/bOvyLPEMYe6QMK5cFUiaESRZ7MxnW7vYXT9X+APkQRcxU/3cF0AAAAASUVORK5CYII="
          />
        </svg>
        <span class="tooltiptext">Tooltip text</span>
        <p class="numsOf">2</p>
      </div>
      <div class="tooltips">
        <svg class="svgg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16"
          height="17"
          viewBox="0 0 16 17"
        >
          <image
            id="beachfront"
            width="16"
            height="17"
            xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAABYElEQVQ4jY3TzUtVURQF8N97GoSKGkETQ6UXlGA0KFAcNUmzJgYKzqIMGpdNGjVr0B9QNMlGDhskQdRfkGiTmkUQDYpyIuqD1xfIlnPhcnofLbhc7j57r7P3XutWLl66qgP6UEc/TmG9nF5tUXsZr7CLTdxMRAN5Ynf2XcFj3MIf3MNH3MaTdL6E59iOgq7aybEywX3cxV8sYAoPMZqKA+M4hE/RYXmE4VQceIBz6bYcNWxhJR/hCwZxHp/xGg0cbkISBNOYzJcYrb/Fd5zFESyneCPl1Iv5MddKhQJRdDopciK1/QYj6fxMrkKOHiziBr6ld8j5LOX1diKYxy+slWJ7uJOMVe1EcB2r+JnFY+FXMNtuByHXhVK7OX7jRTuCuP093rVrsRVBxK8VZmmHZv/CEGZwHB9CKvxI3vgHQRBOC3nmMJG2WyDcWCDMs4GXeIqdguAovuJRev4Hxw4IsA/TYEGV9jJASgAAAABJRU5ErkJggg=="
          />
        </svg>
        <span class="tooltiptext">Beachfront</span>
        <p class="numsOf">1</p>
      </div>
      </div>
      </div>
      <button class="card-button cardtxt btn">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://fastly.picsum.photos/id/410/200/200.jpg?hmac=hVMLZXpDnTKOed7U0eNRwQvhs6LRl-g0XjEFRs4V3cU",
        "https://fastly.picsum.photos/id/410/200/200.jpg?hmac=hVMLZXpDnTKOed7U0eNRwQvhs6LRl-g0XjEFRs4V3cU",
        "https://fastly.picsum.photos/id/410/200/200.jpg?hmac=hVMLZXpDnTKOed7U0eNRwQvhs6LRl-g0XjEFRs4V3cU",
        "https://fastly.picsum.photos/id/410/200/200.jpg?hmac=hVMLZXpDnTKOed7U0eNRwQvhs6LRl-g0XjEFRs4V3cU",
      ], // array of image urls
      title: "Card Title", // card title
      description: "Card description goes here.", // card description
      buttonText: "BOOK NOW", // button text
    };
  },
};
</script>

<style scoped lang="scss">
@import './styles.scss'
</style>
