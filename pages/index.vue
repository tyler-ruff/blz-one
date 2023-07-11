<script setup>
  definePageMeta({
    title: "Home"
  });
  const buttons = [
    {
      label: "Solutions",
      url: "/solutions"
    }
  ];
</script>
<template>
  <div class="text-center">
    <Hero
      title="Build Your Nation"
      description="Build your next online community with Blazed One."
      v-bind:links="buttons"
    />
  </div>
</template>
