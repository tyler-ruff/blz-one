<script setup>
    const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
<template>
    <ContentNavigation v-slot="{ navigation }" :query="docsQuery">
        <nav>
            <div class="join join-vertical w-full">
                <div v-for="(link, index) of navigation" 
                    :key="link._path"
                    class="collapse join-item">
                    <input type="radio" 
                           v-bind:name="`accordian-${index}`" 
                           checked="checked" />
                    <div class="collapse-title text-xl font-medium">
                        <NuxtLink :to="link._path" :key="index">
                            {{ link.title }}
                        </NuxtLink>
                    </div>
                    <div class="collapse-content"> 
                        <ul v-if="link.children">
                            <li v-for="(sublink, sindex) of link.children">
                                <NuxtLink :to="sublink._path" :key="sindex">
                                    {{ sublink.title }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </ContentNavigation>
  </template>