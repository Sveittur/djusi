<template>
    <section class="w-full h-[110vh] relative overflow-hidden">
      <!-- Slideshow container -->
      <div class="absolute inset-0">
        <!-- Slide for each image -->
        <div
          v-for="(image, index) in slides"
          :key="index"
          :class="[
            'absolute w-full h-full transition-opacity duration-1000 ease-in-out',
            { 'opacity-100': activeSlide === index, 'opacity-0': activeSlide !== index }
          ]"
          :style="{ 
            backgroundImage: `url(${image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(255, 255, 255, 0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(255, 255, 255, 0) 100%)'
          }"
        ></div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
          require('../assets/gin.jpg'), // Path to your image 1
          require('../assets/pina.jpg'), // Path to your image 2
          require('../assets/passion.jpg')  // Path to your image 3
        ], // Array of image paths
        activeSlide: 0, // To track the current slide index
      };
    },
    mounted() {
      this.startSlideshow();
    },
    methods: {
      startSlideshow() {
        setInterval(() => {
          this.activeSlide = (this.activeSlide + 1) % this.slides.length; // Loop through the slides
        }, 6000); // Change slide every 8 seconds
      },
    },
  };
  </script>
  
  <style scoped>
  /* Full height and width for the hero section to ensure it takes space properly */
  section {
    width: 100%;
    height: 100vh; /* Adjust the height as needed */
    position: relative;
  }
  
  /* Each slide should take up full width and height */
  div {
    min-width: 100%;
  }
  
  /* For smoother transitions, the slides should have absolute positioning and overlapping */
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
  }
  
  /* Mask image will create a fade effect at the bottom of each slide */
  </style>
  