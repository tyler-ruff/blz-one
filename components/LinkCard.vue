<script setup>
    defineProps(['title', 'body', 'url']);
</script>
<template>
    <router-link class="group" v-bind:to="url">
        <div class="card w-96 bg-gray-600 group-hover:bg-gray-700 dark:bg-gray-700 dark:group-hover:opacity-75 text-primary-content">
            <div class="card-body">
                <h2 class="card-title">
                    {{ title }}
                </h2>
                <p>
                    {{ body }}
                </p>
                <div class="card-actions justify-end">
                    <button class="btn group-hover:bg-gray-200 dark:bg-gray-900 dark:group-hover:bg-gray-800 dark:text-white">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </router-link>
</template>