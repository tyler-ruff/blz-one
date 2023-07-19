<script setup>
    import data from "~/static/solutions_data.json";
</script>
<template>
    <div class="solutions">
        <h1>
            Discover Our Solutions
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <article class="flex mx-2 my-3" v-for="(solution, index) of data" :key="index">
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
    .solutions{
        padding:20px;
    }
    h1{
        padding: 10px;
    }
</style>