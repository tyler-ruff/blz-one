<script setup>
    const appConfig = useAppConfig();
</script>
<template>
    <ul class="menu menu-horizontal px-1">
        <li v-for="(item, index) in appConfig.menu" :key="index">
            <a v-bind:href="item.url">
                {{ item.label }}
            </a>
        </li>
    </ul>
</template>