<template>
  <div :class="activeColorClass" class="transition-colors duration-1000">
    <MyHeader :activeColorClass="activeColorClass" />

    <HeroSection2 @colorChange="updateColorClass" />

    <div class="bg-white"> <!-- No gap here, explicitly set background white -->
      <ItemWheel />
    </div>

    <ContactUs :activeColorClass="activeColorClass" />
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
