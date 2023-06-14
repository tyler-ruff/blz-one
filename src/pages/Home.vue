<script setup>
    import { auth } from './../state/auth'
    import Feed from './dashboard/Feed.vue'
    import Hero from './../components/one/Hero.vue'
</script>
<template>
    <div v-if="auth.loggedIn == true">
        <Feed />
    </div>
    <div v-if="auth.loggedIn == false" class="mx-auto max-w-xl text-center px-10 pt-5 pb-5">
        <Hero
            title="Join the Nation."
            description="Build a virtual empire with Blazed City. Claim your virtual paradise, today.">
            <router-link to="/register">
                <a class="cursor-pointer btn btn-primary block w-full rounded bg-blue-600 hover:text-blue-700 hover:bg-blue-200 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                    Sign Up
                </a>
            </router-link>
            <router-link to="/login">
                <a class="cursor-pointer btn btn-primary text-white block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring active:text-blue-500 sm:w-auto">
                    Login
                </a>
            </router-link>
        </Hero>
    </div>
</template>