<script setup>
    import config from '../config/config.js';
    import { auth } from './../state/auth'

    function menuDrawerToggle(){
        const menuDrawerCheckbox = document.querySelector("#mobile-menu-drawer");
        if(menuDrawerCheckbox.checked === true){
            menuDrawerCheckbox.checked = false;
        } else {
            menuDrawerCheckbox.checked = true;
        }
    }
</script>
<template>
    <header>
        <nav class="nav-top navbar shadow-lg">
            <div class="flex-1">
                <a v-bind:title="config.title" href="/" class="btn btn-ghost group normal-case text-xl">
                    <img v-bind:src="config.logo" class="group-hover:opacity-75" />
                </a>
            </div>
            <div class="hidden md:flex navbar-end">
                <ul class="menu menu-horizontal px-1">
                    <li v-for="(item, index) in config.menu" :key="index">
                        <a v-bind:href="item.url">
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </div> 
            <div class="hidden md:flex dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar mr-3">
                    <div v-if="auth.loggedIn === false" title="Not logged in." class="w-10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="currentColor" class="w-8 h-8 m-1">
                            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM471 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                        </svg>
                    </div>
                    <div v-if="auth.loggedIn === true">
                        <img class="rounded-full avatar" referrerpolicy="no-referrer" v-bind:src="auth.profilePic" />
                    </div>
                </label>
                <ul tabindex="0" class="p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 flex mt-36">
                    <li class="select-none btn-disabled bg-transparent">
                        <b class="text-gray-400">
                            {{ auth.name }}
                        </b>
                    </li>
                    <li v-for="(menuItem, index) of auth.menu" :key="index">
                        <a v-bind:href="menuItem.url" class="cursor-pointer justify-between">
                            {{ menuItem.label }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex md:hidden navbar-end drawer-content">
                <label for="mobile-menu-drawer" class="btn btn-circle btn-outline drawer-button">
                    <svg id="burger-menu" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="currentColor" class="inline-flex w-5 h-5">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </label>
            </div>
        </nav>
        <nav class="nav-drawer block md:hidden drawer">
            <input id="mobile-menu-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-side">
                <label for="mobile-menu-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li>
                        <a v-on:click="menuDrawerToggle" class="cursor-pointer text-gray-800 group">
                            <i class="inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="group-focus:text-white" fill="conentColor" viewBox="0 0 384 512">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </i>
                            Close Menu
                        </a>
                    </li>
                    <li class="btn-disabled pt-5 bg-transparent">
                        <hr />
                    </li>
                    <li v-for="(item, index) in config.menu" :key="index">
                        <a v-bind:href="item.url">
                            {{ item.label }}
                        </a>
                    </li>
                    <li class="btn-disabled pt-5 bg-transparent">
                        <hr />
                    </li>
                    <li class="btn-disabled bg-transparent">
                        <p class="text-gray-500">
                            {{ auth.name }}
                        </p>
                    </li>
                    <li v-for="(menuItem, index) of auth.menu" :key="index">
                        <a v-bind:href="menuItem.url">
                            {{ menuItem.label }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<style scoped>
.nav-top{
    background: #757F9A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #D7DDE8, #8b96b5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #D7DDE8, #8b96b5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-top: 1px solid rgba(0,0,0,0.2);
    border-bottom: 1px solid rgba(0,0,0,0.7);
}
.nav-top a:hover{
    color: rgba(0,0,0,0.6);
}
.nav-top a:active{
    color: rgba(255,255,255,0.5);
}
.nav-drawer, .dropdown-content, .drawer{
    z-index:99999;
}
</style>