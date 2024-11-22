<template>
    <section
      :class="[drinks[activeSlide].bgClass, 'w-full h-[100vh] relative overflow-hidden flex items-center justify-center transition-colors duration-1000']"
      @colorChange="emitColorChange"
    >
      <!-- Bottom Mask gradient for blending into the component below -->
      <div class="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-white to-transparent"></div>
  
      <!-- Text Section on the Left -->
      <div class="z-10 w-2/5 px-12 relative">
        <transition-group
          name="text"
          tag="div"
          enter-active-class="animate-text-in-right"
          leave-active-class="animate-text-out-left"
          class="relative"
        >
          <div :key="activeSlide" class="absolute top-[-15vh] left-0">
            <h1 class="text-6xl font-bold mb-6 text-white">{{ drinks[activeSlide].name }}</h1>
            <p class="text-2xl text-white">{{ drinks[activeSlide].description }}</p>
          </div>
        </transition-group>
      </div>
  
      <!-- Drinks Section with 3 Cans -->
      <div class="relative flex items-center justify-center w-2/5 h-[80vh]">
        <!-- Left Drink behind center with small animation -->
        <transition
          name="fade-up-in-small"
          enter-active-class="animate-fade-up-in-small"
          leave-active-class="animate-fade-up-out-small"
          class="absolute w-[80%] h-full transform scale-90 left-[-20%] opacity-50 transition-all duration-1000 ease-in-out" 
        >
          <div
            :key="'left-' + activeSlide"
            :style="{ 
              backgroundImage: `url(${drinks[activeSlide].src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
            class="w-full h-full bg-no-repeat bg-center rounded-lg"
          ></div>
        </transition>
  
        <!-- Center Main Drink with full-size animation -->
        <transition
          name="fade-up-in"
          enter-active-class="animate-fade-up-in"
          leave-active-class="animate-fade-up-out"
          class="absolute w-[100%] h-full z-10 transition-all duration-1000 ease-in-out"
        >
          <div
            :key="'center-' + activeSlide"
            :style="{ 
              backgroundImage: `url(${drinks[activeSlide].src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
            class="w-full h-full bg-no-repeat bg-center rounded-lg"
          ></div>
        </transition>
  
        <!-- Right Drink behind center with small animation -->
        <transition
          name="fade-up-in-small"
          enter-active-class="animate-fade-up-in-small"
          leave-active-class="animate-fade-up-out-small"
          class="absolute w-[80%] h-full transform scale-90 right-[-20%] opacity-50 transition-all duration-1000 ease-in-out" 
        >
          <div
            :key="'right-' + activeSlide"
            :style="{ 
              backgroundImage: `url(${drinks[activeSlide].src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
            class="w-full h-full bg-no-repeat bg-center rounded-lg"
          ></div>
        </transition>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drinks: [
          { name: 'Lemon Gin Fizz', description: 'A refreshing lemon-based cocktail.', src: require('@/assets/gin.png'), bgClass: 'bg-gin' },
          { name: 'Passion Fruit Martini', description: 'A tropical mix of passion fruit and vodka.', src: require('@/assets/passion.png'), bgClass: 'bg-passion' },
          { name: 'Raspberry', description: 'Sweet and tart raspberry delight.', src: require('@/assets/berry.png'), bgClass: 'bg-berry' },
          { name: 'On The Peach', description: 'Juicy peach mixed with smooth gin.', src: require('@/assets/peach.png'), bgClass: 'bg-peach' },
          { name: 'Pina Colada', description: 'A creamy pineapple and coconut drink.', src: require('@/assets/pino.png'), bgClass: 'bg-pino' },
        ],
        activeSlide: 0,
      };
    },
    mounted() {
      this.startSlideshow();
    },
    methods: {
      startSlideshow() {
        setInterval(() => {
          this.activeSlide = (this.activeSlide + 1) % this.drinks.length;
          this.emitColorChange();
        }, 6000);
      },
      emitColorChange() {
        this.$emit('colorChange', this.drinks[this.activeSlide].bgClass);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adjust any padding or margin that may cause issues */
  .w-full {
    border: none;
    padding: 0;
    margin: 0;
  }
  </style>
  