<script setup lang="ts">
    const colorMode = useColorMode()
    const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <button aria-label="Toggle Dark Mode" title="Toggle Dark Mode" class="inline-flex btn pt-3 md:pt-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900" @click="onClick">
    <ColorScheme placeholder="...">
      <template v-if="colorMode.value === 'dark'">
        <Icon name="circum:dark" color="white" class="w-5 h-5" />
      </template>
      <template v-else>
        <Icon name="entypo:light-up" color="black" class="w-5 h-5" />
      </template>
    </ColorScheme>
  </button>
</template>
