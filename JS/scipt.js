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
      counter: 0,

    }
  },

  methods: {
    button(isNext){
      if(isNext) this.counter++;
      else this.counter--
      if(this.counter === this.images.length) this.counter = 0;
      if(this.counter < 0) this.counter = this.images.length - 1;
      console.log(this.counter)
    }
  }

}).mount('#app')