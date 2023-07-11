<script setup>
    const slug = ref('');
</script>
<template>
    <ContentDoc :path="slug">
        <template v-slot="{ doc }">
            <h1 class="docs-title">
                {{ doc.title }}
            </h1>
            <ContentRenderer :value="doc"/>
        </template>
        <template #not-found> 
            <h1>
                404 not found
            </h1> 
        </template>
    </ContentDoc>
</template>