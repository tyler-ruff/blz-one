<script setup lang="ts">
    import config from '~/content/config.json'
    import '~/assets/css/header.css'

    const colorMode = useColorMode();
    const appConfig = useAppConfig();
    const user = useCurrentUser();
</script>
<template>
    <header>
        <nav class="nav-top navbar shadow-lg">
            <div class="flex-1">
                <a v-bind:title="appConfig.title" href="/" class="btn btn-ghost hover:bg-transparent group normal-case text-xl">
                    <img v-bind:src="colorMode.value == 'light' ? config.logo : config.logoDark" class="group-hover:opacity-75" />
                </a>
            </div>
            <div class="hidden md:flex navbar-end">
                <NavMain />
            </div> 
            <!--
            <div class="hidden md:flex dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar mr-3">
                    <div v-if="!user" title="Not logged in." class="w-10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="currentColor" class="w-8 h-8 m-1">
                            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM471 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                        </svg>
                    </div>
                    <div v-if="user">
                        <img class="rounded-full avatar" referrerpolicy="no-referrer" v-bind:src="user?.photoURL" />
                    </div>
                </label>
                <ul tabindex="0" class="p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 flex mt-36">
                    <li class="select-none btn-disabled bg-transparent">
                        <b class="text-gray-400">
                            {{ user?.displayName }}
                        </b>
                    </li>
                    <li v-for="(menuItem, index) of user.menu" :key="index">
                        <a v-bind:href="menuItem.url" class="cursor-pointer justify-between">
                            {{ menuItem.label }}
                        </a>
                    </li>
                </ul>
            </div>
            -->
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
