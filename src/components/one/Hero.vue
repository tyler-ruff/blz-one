<script setup>
    defineProps(['title', 'description', 'links'])
</script>
<template>
    <article class="hero">
        <h1 class="block text-3xl text-blue-700 sm:text-5xl">
            {{ title }}
        </h1>
        <p class="block mt-4 sm:text-xl/relaxed px-10 md:px-20">
            {{ description }}
        </p>
        <div class="action-buttons mt-8 flex flex-wrap justify-center gap-4 px-10 md:px-0">
            <slot></slot>
        </div>
    </article>
</template>
<style scoped>
    .hero{
        padding-top:60px;
        padding-bottom:60px;
        display:block;
    }
    .action-buttons a{
        display:block;
        padding: 12px 3px;
    }
</style>