<template>
  <header
    :class="[activeColorClass, 'shadow-md sticky top-0 z-50 transition-all duration-300 opacity-75', { 'shrink': scrolled }]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div :class="['flex items-center transition-all duration-300', { 'h-16': scrolled, 'h-24': !scrolled }]">
        <!-- Logo Section -->
        <div class="flex-shrink-0 flex items-center">
          <a href="/" class="text-3xl font-bold text-white">
            Djúsí&nbsp;
          </a>
        </div>

        <div class="flex-grow"></div>

        <div class="flex items-center space-x-4 ml-auto">
          <!-- <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <svg class="w-7 h-9 fill-current text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.645c0-.932.247-1.355 1.443-1.355h2.557v-5h-4.08c-4.923 0-5.92 2.345-5.92 5.92v2.08z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <svg class="w-7 h-9 fill-current text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.865 9.865 0 01-3.127 1.196 4.92 4.92 0 00-8.384 4.482c-4.087-.205-7.715-2.164-10.141-5.144a4.92 4.92 0 001.523 6.573 4.903 4.903 0 01-2.229-.616v.061a4.926 4.926 0 003.946 4.827 4.903 4.903 0 01-2.224.085 4.926 4.926 0 004.604 3.417 9.864 9.864 0 01-6.102 2.103c-.396 0-.787-.023-1.175-.068a13.94 13.94 0 007.548 2.212c9.056 0 14.004-7.5 14.004-14.004 0-.213-.005-.425-.015-.637a10.005 10.005 0 002.457-2.548z"/>
            </svg>
          </a> -->
          <a href="https://instagram.com/sbskokteilar" target="_blank" aria-label="Instagram">
            <svg class="w-7 h-9 fill-current text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.416.416a4.92 4.92 0 011.737 1.01 4.918 4.918 0 011.01 1.738c.176.456.362 1.246.415 2.415.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.054 1.169-.24 1.96-.415 2.416a4.92 4.92 0 01-1.01 1.737 4.918 4.918 0 01-1.738 1.01c-.456.176-1.246.362-2.415.415-1.267.058-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.416-.415a4.92 4.92 0 01-1.737-1.01 4.918 4.918 0 01-1.01-1.738c-.176-.456-.362-1.246-.415-2.415-.058-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.85c.054-1.17.24-1.96.415-2.416a4.92 4.92 0 011.01-1.737 4.918 4.918 0 011.738-1.01c.456-.176 1.246-.362 2.415-.415 1.267-.058 1.647-.07 4.851-.07m0-2.163c-3.257 0-3.667.014-4.947.072-1.281.059-2.154.268-2.909.571a7.066 7.066 0 00-2.55 1.653 7.066 7.066 0 00-1.653 2.55c-.303.756-.512 1.628-.571 2.909-.058 1.28-.072 1.69-.072 4.947s.014 3.667.072 4.947c.059 1.281.268 2.154.571 2.909a7.066 7.066 0 001.653 2.55 7.066 7.066 0 002.55 1.653c.756.303 1.628.512 2.909.571 1.28.058 1.69.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.154-.268 2.909-.571a7.066 7.066 0 002.55-1.653 7.066 7.066 0 001.653-2.55c.303-.756.512-1.628.571-2.909.058-1.28.072-1.69.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.268-2.154-.571-2.909a7.066 7.066 0 00-1.653-2.55 7.066 7.066 0 00-2.55-1.653c-.756-.303-1.628-.512-2.909-.571-1.28-.058-1.69-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
            </svg>
          </a>
        </div>

        <div class="ml-4 flex-shrink-0">
          <button class="focus:outline-none">
            <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M4 5h16M4 12h16m-7 7h7" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    activeColorClass: {
      type: String,
      default: 'bg-gin',
    },
  },
  data() {
    return {
      scrolled: false, // This will track whether the user has scrolled
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
  },
};
</script>

<style scoped>
/* Optional header styles */
</style>


<style scoped>
/* Initially, the header will be taller */
header {
  height: 100px; /* Initial height */
}

/* When scrolled, the header will shrink */
.shrink {
  height: 64px; /* Shrunk height */
}

/* You can also adjust the inner content's height dynamically */
.h-16 {
  height: 4rem; /* 64px for smaller header after scroll */
}
.h-24 {
  height: 6rem; /* 96px for larger header before scroll */
}
</style>
