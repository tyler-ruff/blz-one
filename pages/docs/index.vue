<script setup>
    import '~/assets/css/docs.css'
    definePageMeta({
        layout: "docs",
        title: "Documentation Home"
    });
</script>
<template>
    <h1>
        Documentation
    </h1>
    <div>
        <NuxtLink to="/docs/hello">
            Hello
        </NuxtLink>
    </div>
</template>