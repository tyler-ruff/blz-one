<script setup>
    import data from "~/static/solutions_data.json";
</script>
<template>
    <div>
        <h1>
            Discover Our Solutions
        </h1>
        <div class="solutions grid grid-cols-3">
            <article class="flex my-3" v-for="(solution, index) of data" :key="index">
                <LinkCard 
                    v-bind:title="solution.title"
                    v-bind:body="solution.description"
                    v-bind:url="solution.url"
                />
            </article>
        </div>
    </div>
</template>
<style scoped>
    h1, .solutions{
        padding: 10px;
    }
</style>