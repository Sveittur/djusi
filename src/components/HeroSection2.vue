<template>
  <section
    :class="[drinks[activeSlide].bgClass, 'w-full h-[100vh] relative overflow-hidden flex items-start md:items-center justify-center transition-colors duration-1000']"
    @colorChange="emitColorChange"
  >
    <!-- Bottom Mask gradient for blending into the component below -->
    <div class="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-white to-transparent"></div>

    <!-- Content Wrapper -->
    <div class="mobile-padding z-10 flex flex-col md:flex-row items-center justify-start md:justify-center w-full h-full px-4 md:px-12">

    <div
  class="z-10 flex flex-col md:flex-row items-center justify-start md:justify-center w-full h-full px-4 md:px-12 pt-[150px] md:pt-0"
>
      <!-- Text Section -->
      <div class="w-full md:w-2/5 px-4 md:px-12 text-center md:text-left">
        <transition-group
          name="text"
          tag="div"
          enter-active-class="animate-text-in-right"
          leave-active-class="animate-text-out-left"
          class="relative"
        >
          <div :key="activeSlide">
            <h1 class="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
              {{ drinks[activeSlide].name }}
            </h1>
            <p class="text-sm sm:text-lg md:text-xl text-white">
              {{ drinks[activeSlide].description }}
            </p>
          </div>
        </transition-group>
      </div>

      <!-- Drinks Section -->
      <div
        class="relative flex items-center justify-center w-full md:w-2/5 h-[50vh] sm:h-[60vh] md:h-[80vh] mt-[-30px] md:mt-0"
      >
        <!-- Left Drink -->
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
              backgroundPosition: 'center',
            }"
            class="w-full h-full bg-no-repeat bg-center rounded-lg"
          ></div>
        </transition>

        <!-- Center Drink -->
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
              backgroundPosition: 'center',
            }"
            class="w-full h-full bg-no-repeat bg-center rounded-lg"
          ></div>
        </transition>

        <!-- Right Drink -->
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
              backgroundPosition: 'center',
            }"
            class="w-full h-full bg-no-repeat bg-center rounded-lg"
          ></div>
        </transition>
      </div>
    </div>
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

  @media (max-width: 768px) {
  .mobile-padding {
    padding-top: 150px;
  }
}
  </style>
  