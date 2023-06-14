<script setup>
import BlzHeader from './components/BlzHeader.vue'
import BlzFooter from './components/BlzFooter.vue'

/*
import { firebase } from './state/app'
import { auth } from './state/auth'
import { settings } from './state/settings'
*/

</script>

<template>
    <BlzHeader />
    <main class="md:p-10 bg-gray-50">
        <router-view></router-view>
    </main>
  <BlzFooter />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

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
