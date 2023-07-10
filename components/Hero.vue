<script setup>
  defineProps(['title', 'description', 'links']);
</script>
<template>
  <article class="hero">
    <h1 class="block text-3xl text-blue-700 dark:text-white sm:text-5xl">
      {{ title }}
    </h1>
    <p class="block mt-6 sm:text-xl/relaxed text-gray-700 dark:text-white px-10 md:px-20">
      {{ description }}
    </p>
    <div
      class="
        action-buttons
        mt-8
        flex flex-wrap
        justify-center
        gap-2
        px-10
        md:px-0
      "
    >
      <div 
        v-for="(button, index) in links" 
        :key="index"
        class="flex">
        <router-link v-bind:to="button.url">
          <a
            class="
              cursor-pointer
              btn 
              btn-primary
              dark:border-gray-400
              block
              w-full
              rounded
              bg-blue-600
              dark:bg-blue-800
              hover:text-blue-700
              dark:hover:text-white
              hover:bg-blue-200
              dark:hover:bg-blue-900
              dark:hover:border-gray-100
              px-12
              py-3
              text-sm
              font-medium
              text-white
              shadow
              focus:outline-none 
              focus:ring
              active:bg-blue-500
              sm:w-auto
            "
          >
            {{ button.label }}
          </a>
        </router-link>
      </div>
    </div>
  </article>
</template>
<style scoped>
.hero {
  padding-top: 60px;
  padding-bottom: 60px;
  display: block;
}
.dark .hero .btn{
  background: #485563;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.dark .hero .btn:hover{
  background: #485563;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #384553, #485563);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #384553, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
