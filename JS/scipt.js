const { createApp } = Vue;

createApp({

  data() {

    return {
      images: [
        "assets-slider/img/01.webp",
        "assets-slider/img/02.webp",
        "assets-slider/img/03.webp",
        "assets-slider/img/04.webp",
        "assets-slider/img/05.webp",
      ],
      counter: 1,

    }

  }

}).mount('#app')