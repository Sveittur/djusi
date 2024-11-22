<template>
  <section
    :class="[activeColorClass]"
    class="w-full h-[120vh] py-12 relative flex justify-center items-center transition-all duration-1000"
  >
    <!-- Top Mask gradient using Tailwind -->
    <div class="absolute top-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-white to-transparent"></div>

    <!-- Contact Form Card -->
    <div
      class="w-[50vw] mt-20 p-10 bg-white/20 backdrop-blur-md rounded-lg shadow-xl relative z-10 opacity-90"
    >
      <h2 class="text-4xl font-extrabold text-center mb-8 text-white">
        Contact Us
      </h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name Field -->
        <div>
          <label for="name" class="block text-lg font-semibold text-white mb-2">Name:</label>
          <input
            type="text"
            v-model="formData.name"
            id="name"
            name="from_name"
            required
            class="mt-1 block w-full px-4 py-3 border border-transparent rounded-lg shadow-sm bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-lg"
            placeholder="Your name"
          />
        </div>

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-lg font-semibold text-white mb-2">Email:</label>
          <input
            type="email"
            v-model="formData.email"
            id="email"
            name="from_email"
            required
            class="mt-1 block w-full px-4 py-3 border border-transparent rounded-lg shadow-sm bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-lg"
            placeholder="Your email"
          />
        </div>

        <!-- Message Field -->
        <div>
          <label for="message" class="block text-lg font-semibold text-white mb-2">Message:</label>
          <textarea
            v-model="formData.message"
            id="message"
            name="message"
            required
            class="mt-1 block w-full px-4 py-3 border border-transparent rounded-lg shadow-sm bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-lg"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-400 to-purple-600 text-white text-lg font-semibold shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
        >
          Send Message
        </button>

        <!-- Status Message -->
        <p
          v-if="statusMessage"
          :class="[emailStatus.success ? 'text-green-400' : 'text-red-500', 'text-center mt-4 font-semibold']"
        >
          {{ statusMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

    
  <script>
  import { sendEmail } from '@/util/emailService';
  
  export default {
    props: ['activeColorClass'], // Receive activeColorClass from App.vue
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
        statusMessage: '',
        emailStatus: {},
      };
    },
    methods: {
      async handleSubmit() {
        const form = this.$el.querySelector('form');
        const response = await sendEmail(form);
        if (response.success) {
          this.statusMessage = 'Your message was sent successfully!';
          this.emailStatus = { success: true };
          this.formData = { name: '', email: '', message: '' }; // Reset form
        } else {
          this.statusMessage = 'There was an error sending your message. Please try again later.';
          this.emailStatus = { success: false };
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional additional styling */
  </style>
  