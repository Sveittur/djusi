<template>
  <section class="h-[50vh] sm:h-[65vh] md:h-[80vh] mt-6 sm:mt-8 md:mt-12 relative flex items-center">
    <div class="flex h-full w-full overflow-hidden items-center justify-center relative" ref="scrollContainer">
      <!-- Make arrows smaller on mobile -->
      <button 
        class="absolute left-2 sm:left-4 md:left-8 z-20 p-3 sm:p-4 md:p-6 bg-pink-300 hover:bg-pink-500 text-white rounded-full transition duration-300"
        @click="prevDrink"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        class="flex h-full w-full items-center justify-center transition-transform duration-1000 ease-in-out"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <!-- Make drink cards smaller on mobile -->
        <div
          v-for="(drink, index) in drinks"
          :key="drink.name"
          :class="[
            'relative flex-shrink-0 w-[30%] sm:w-[25%] md:w-[20%] h-[40vh] sm:h-[50vh] md:h-[65vh] mx-2 sm:mx-3 md:mx-4 rounded-xl overflow-hidden transition-all duration-1000 ease-in-out transform',
            { 'selected': selectedIndex === index }
          ]"
          @click="selectDrink(index)"
        >
          <div
            :class="[
              'background-grow',
              drink.bgClass,
              selectedIndex === index ? 'selected' : ''
            ]"
          ></div>
          <img :src="drink.src" :alt="drink.name" class="w-full h-full object-cover pointer-events-none rounded-xl z-10" />
        </div>
      </div>

      <!-- Right arrow with mobile adjustments -->
      <button 
        class="absolute right-2 sm:right-4 md:right-8 z-20 p-3 sm:p-4 md:p-6 bg-pink-300 hover:bg-pink-500 text-white rounded-full transition duration-300"
        @click="nextDrink"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
</template>













<script>
export default {
  data() {
    return {
      drinks: [
        { name: 'Lemon Gin Fizz', src: require('../assets/gin.png'), bgClass: 'bg-gin' }, 
        { name: 'Passion Fruit Martini', src: require('../assets/passion.png'), bgClass: 'bg-passion' },
        { name: 'Raspberry', src: require('../assets/berry.png'), bgClass: 'bg-berry' },
        { name: 'On The Peach', src: require('../assets/peach.png'), bgClass: 'bg-peach' },
        { name: 'Pina Colada', src: require('../assets/pino.png'), bgClass: 'bg-pino' },
      ],
      selectedIndex: 2, // Start in the middle
      translateX: 0, // The amount to translate the entire container
    };
  },
  methods: {
    selectDrink(index) {
      const stepDiff = index - this.selectedIndex;
      this.selectedIndex = index;

      // Wait for ref to be available
      this.$nextTick(() => {
        const containerWidth = this.$refs.scrollContainer?.clientWidth || window.innerWidth;
        
        let cardWidthPercent = 0.3; // 30% for mobile
        if (containerWidth >= 640) cardWidthPercent = 0.25; // 25% for sm
        if (containerWidth >= 768) cardWidthPercent = 0.22; // 22% for md
        
        const cardWidth = cardWidthPercent * containerWidth;
        const offset = stepDiff * cardWidth;
        this.translateX -= offset;
      });
    },
    nextDrink() {
      if (this.selectedIndex < this.drinks.length - 1) {
        this.selectDrink(this.selectedIndex + 1);
      }
    },
    prevDrink() {
      if (this.selectedIndex > 0) {
        this.selectDrink(this.selectedIndex - 1);
      }
    },
  },
};
</script>







<style scoped>
section {
  margin-top: 0;
  padding: 0;
}
/* Smoother transition with a longer duration */
.drink-enter-active, .drink-leave-active {
  transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
}
.drink-enter-from, .drink-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.drink-enter-to, .drink-leave-from {
  transform: translateX(0);
  opacity: 1;
}

/* Background growth effect */
.background-grow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 0; /* Ensure the background remains behind the image */
  transition: width 1s ease-in-out, height 1s ease-in-out;
}

/* When selected, the background expands from the center */
.selected .background-grow {
  width: 200%;
  height: 200%;
}

/* Ensure the image remains on top */
img {
  z-index: 10; /* Keep the image above the background */
  position: relative;
}

/* Style for the candy pink arrows with more margin and bigger size */
button {
  z-index: 20;
  background-color: #ff69b4; /* Candy pink */
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 1rem; /* Add margin between button and screen edge */
}

button:hover {
  background-color: #ff1493; /* Slightly darker pink on hover */
}

button svg {
  width: 32px;
  height: 32px;
}
</style>
