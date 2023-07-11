<script setup lang="ts">
    import '~/assets/css/header.css';

    const colorMode = useColorMode();
    const appConfig = useAppConfig();

</script>
<template>
    <header>
        <nav class="nav-top navbar shadow-lg">
            <div class="flex-1">
                <a v-bind:title="appConfig.title" href="/" class="btn btn-ghost hover:bg-transparent group normal-case text-xl">
                    <img v-bind:src="colorMode.value == 'light' ? appConfig.logo : appConfig.logoDark" class="group-hover:opacity-75" />
                </a>
            </div>
            <div class="hidden md:flex navbar-end">
                <NavMain />
            </div> 
            <div class="flex md:hidden navbar-end drawer-content">
                <label for="mobile-menu-drawer" class="btn drawer-button btn-ghost text-gray-800 hover:text-gray-900 border-0 dark:text-white dark:hover:text-gray-400 dark:hover:bg-transparent">
                    <Icon name="quill:hamburger" class="inline-flex w-6 h-6" />
                </label>
            </div>
        </nav>
        <nav class="nav-drawer block md:hidden drawer">
            <NavDrawer />
        </nav>
    </header>
</template>
