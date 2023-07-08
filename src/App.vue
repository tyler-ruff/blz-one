<script setup>
import BlzHeader from './components/BlzHeader.vue'
import BlzFooter from './components/BlzFooter.vue'
</script>

<template>
    <BlzHeader />
    <main class="md:p-10 bg-gray-50">
        <router-view></router-view>
    </main>
  <BlzFooter />
</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
