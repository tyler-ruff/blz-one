<script setup lang="ts">

  const appConfig = useAppConfig();
  const route = useRoute();

  let title = "";
  if(!route.meta.title){
    title = appConfig.title;
  } else {
    title = `${route.meta.title} | ${appConfig.title}`;
  }
  
  let description = '';
  if(!route.meta.description){
    description = appConfig.description;
  } else {
    description = appConfig.description;
  }

  useSeoMeta({
    title,
    ogTitle: title,
    twitterTitle: title,
    description,
    ogDescription: description,
    twitterDescription: description,
    ogImage: appConfig.cover,
    twitterImage: appConfig.cover,
    ogImageAlt: 'Blazed Labs Beaker',
    twitterCard: 'summary',
    colorScheme: appConfig.color,
    applicationName: appConfig.title,
    appleMobileWebAppTitle: appConfig.title,
    ogSiteName: appConfig.title,
    author: appConfig.company,
    creator: appConfig.company,
    publisher: appConfig.company,
    generator: 'Nuxt',
    ogUrl: appConfig.baseUrl,
    ogType: 'website',
    fbAppId: appConfig.fbAppId
  });
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
