<script setup>
  const buttons = [
    {
      label: "Login",
      url: "/login"
    },
    {
      label: "Sign Up",
      url: "/register"
    }
  ]
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
