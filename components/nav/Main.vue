<script setup>
    import config from '~/content/config.json'
</script>
<template>
    <ul class="menu menu-horizontal px-1">
        <li v-for="(item, index) in config.menu" :key="index">
            <a v-bind:href="item.url">
                {{ item.label }}
            </a>
        </li>
    </ul>
</template>