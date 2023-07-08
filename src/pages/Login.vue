<script setup>
import { ref, reactive } from 'vue'

import { signIn, googleSignIn } from './../state/auth'

let email = "";
let password = "";

const error = reactive({
    show: false,
    title: '',
    message: {
        email: false,
        password: false,
        firebase: false
    }
})

function loginSubmit(){
    if(email.length === 0 || password.length === 0){
        //console.log('error')
        error.show = true;
        error.title = "Error!";
        if(email.length === 0){
            error.message.email = "Please fill out Email.";
        } else {
            error.message.email = false;
        }
        if(password.length === 0){
            error.message.password = "Please fill out Password.";
        } else {
            error.message.password = false;
        }
    } else {
        error.message = {
            email: false,
            password: false,
            firebase: false
        }
        signIn(email, password);
    }
}

function googleSubmit(){
    googleSignIn();
}
</script>
<template>
    <div class="mx-auto max-w-screen-xl px-5 py-16 sm:px-6 lg:px-8 select-none">
        <div class="mx-auto max-w-lg">
            <h1 class="text-center text-2xl font-bold text-gray-600 sm:text-3xl">
                Login to Blazed
            </h1>
        
            <p class="text-center pt-5 selection-none">
                <router-link to="/">
                    <a class="cursor-pointer hover:underline">
                        &#8592; Return to Home
                    </a>
                </router-link>
            </p>

            <form action="#" v-on:submit.prevent="loginSubmit" class="login-box mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                <p class="text-center text-lg text-gray-500 font-medium pb-5">
                    Sign In
                </p>
                    <div v-if="error.show == true">
                        <div class="alert alert-error select-none">
                        <span id="error-output">
                            <h3 class="font-bold text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> 
                                {{ error.title }} 
                            </h3>
                            <ul class="block">
                                <li v-for="errorItem in error.message">
                                    <span v-if="errorItem !== false">
                                        &bull; {{ errorItem }}
                                    </span>
                                </li>
                            </ul>
                        </span>
                        </div>
                    </div>
                    <div>
                        <label for="field-email" class="sr-only">Email</label>
                        <div class="relative">
                            <input type="email" v-model="email" id="field-email" class="w-full rounded-lg input-bordered p-4 pe-12 text-sm shadow-sm" :class="{ 'input-error': error.message.email  }" placeholder="Enter email" />
                            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label for="field-password" class="sr-only">Password</label>
                        <div class="relative">
                            <input type="password" v-model="password" id="field-password" class="w-full rounded-lg input-bordered p-4 pe-12 text-sm shadow-sm" :class="{ 'input-error': error.message.password  }" placeholder="Enter Password" />
                            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </span>
                        </div>
                    </div>
            
                    <button type="submit" class="block login w-full btn px-5 py-3 text-sm font-medium text-white">
                        Sign in
                    </button>

                    <div class="divider pt-5 pb-5">OR</div>
                    
                    <button class="flex w-full btn g-login" v-on:click.prevent="googleSubmit">
                        <i class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512" class="w-5 h-5 mr-2" fill="currentColor">
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                            </svg>
                        </i>
                        Login with Google
                    </button>
                </form>
                <p class="block ext-center text-sm text-gray-800 selection-none pt-5">
                    No account?
                    <a class="hover:underline" href="/register">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
</template>
<style scoped>
.login-box{
    background: #757F9A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #D7DDE8, #757F9A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #D7DDE8, #757F9A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.login{
    background: #485563;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.login:hover{
    background: #485563;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #242c35, #485563);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #242c35, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.login:active{
    background: #485563;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.g-login{

}
</style>