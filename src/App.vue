<template>
  <div :class="activeColorClass" class="transition-colors duration-1000 min-h-screen">
    <!-- Add responsive classes to your components -->
    <MyHeader :activeColorClass="activeColorClass" class="w-full" />

    <HeroSection2 
      @colorChange="updateColorClass" 
      class="px-4 md:px-8 lg:px-16" 
    />

    <div class="bg-white w-full"> 
      <ItemWheel class="w-full max-w-screen-xl mx-auto px-4 md:px-8" />
    </div>

    <ContactUs 
      :activeColorClass="activeColorClass" 
      class="w-full px-4 md:px-8 lg:px-16"
    />
  </div>
</template>


<script>
import MyHeader from './components/MyHeader.vue';
import ItemWheel from './components/ItemWheel.vue';
import HeroSection2 from './components/HeroSection2.vue';
import ContactUs from './components/ContactUs.vue';

export default {
  data() {
    return {
      activeColorClass: 'bg-gin',
    };
  },
  methods: {
    updateColorClass(newColorClass) {
      this.activeColorClass = newColorClass;
    },
  },
  components: {
    MyHeader,
    HeroSection2,
    ItemWheel,
    ContactUs,
  },
};
</script>

<style scoped>
/* Ensure no margin or padding between components */
div {
  margin: 0;
  padding: 0;
}
</style>
