<script setup>
import BlzHeader from './components/BlzHeader.vue'
import BlzFooter from './components/BlzFooter.vue'
</script>

<template>
    <BlzHeader />
    <Suspense>
          <template #fallback>
              <main>
                  <span class="loading loading-spinner loading-xl"></span>
              </main>
          </template>
          <template #default>
              <main class="p-10 bg-gray-50">
                  <router-view></router-view>
              </main>
          </template>
      </Suspense>
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
