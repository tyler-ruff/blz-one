<script setup>
    import '~/assets/css/docs.css'
    const route = useRoute();
    definePageMeta({
        layout: "docs",
    });
</script>
<template>
    <div class="docs">
        <ContentDoc :path="route.path">
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
    </div>
</template>