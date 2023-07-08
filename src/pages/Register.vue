<script setup>
    import { reactive } from 'vue'

    import { signUp, googleSignIn } from './../state/auth'

    let firstName = ""
    let lastName =""
    let email = ""
    let password = ""
    let passwordRepeat = ""

    const error = reactive({
        show: false,
        title: '',
        message: {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            passwordRepeat: false,
            firebase: false
        }
    })

    function registerSubmit(){
        if(email.length === 0 || password.length === 0 ||
        firstName.length === 0 || lastName.length === 0 
        || passwordRepeat.length === 0){
            error.show = true
            error.title = "Error, please correct the errors below"
            if(email.length === 0){
                error.message.email = "Please enter an email.";
            } else {
                error.message.email = false;
            }
            if(password.length === 0){
                error.message.password = "Please enter a password.";
            } else {
                error.message.password = false;
            }
            if(passwordRepeat.length === 0){
                error.message.passwordRepeat = "Please enter a password (again).";
            } else {
                error.message.passwordRepeat = false;
            }
            if(firstName.length === 0){
                error.message.firstName = "Please enter your first name.";
            } else {
                error.message.firstName = false;
            }
            if(lastName.length === 0){
                error.message.lastName = "Please enter your last name.";
            } else {
                error.message.lastName = false;
            }
        } else {
            error.show = false;
            error.title = "";
            error.message = {
                firstName: false,
                lastName: false,
                email: false,
                password: false,
                passwordRepeat: false,
                firebase: false
            }
            signUp(email, password, firstName, lastName);
        }
    }
    function googleSubmit(){
        googleSignIn();
    }
</script>
<template>
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12 select-none">
        <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img alt="Pattern" src="https://blazed.sirv.com/logo/CityNight-Beaker.png?w=1300&h=1300" class="absolute inset-0 h-full w-full object-cover" />
        </aside>
    
        <main aria-label="Main" class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div class="max-w-xl lg:max-w-3xl">
    
                <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Join Blazed
                </h1>
        
                <p class="mt-4 leading-relaxed text-gray-500">
                    Join the Blazed Nation today by becoming a citizen, its completely free!
                </p>

                <div v-if="error.show === true" v-cloak id="error-box">
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
        
                <form v-on:submit.prevent="registerSubmit" action="#" id="signup-form" class="select-none mt-8 grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                        <label for="field-firstname" class="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input type="text" v-model="firstName" placeholder="John" class="input input-bordered w-full max-w-xs" :class="{ 'input-error': error.message.firstName  }" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="field-lastname" class="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input type="text" v-model="lastName" placeholder="Smith" class="input input-bordered w-full max-w-xs" :class="{ 'input-error': error.message.lastName  }" />
                    </div>
                    <div class="col-span-6">
                        <label for="field-email" class="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input type="email" v-model="email" placeholder="name@example.com" class="input input-bordered w-full" :class="{ 'input-error': error.message.email  }" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="field-password" class="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input type="password" v-model="password" class="input input-bordered w-full" :class="{ 'input-error': error.message.password  }" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="field-password-repeat" class="block text-sm font-medium text-gray-700">
                            Password Confirmation
                        </label>
                        <input type="password" v-model="passwordRepeat" class="input input-bordered w-full" :class="{ 'input-error': error.message.passwordRepeat  }" />
                    </div>
        
                    <div class="col-span-6">
                        <p class="text-sm text-gray-500">
                            By creating an account, you agree to our
                            <a href="https://blazedlabs.com/tos" target="_blank" class="text-gray-700 underline">
                                Terms and Conditions
                            </a>
                            and
                            <a href="https://blazedlabs.com/privacy" target="_blank" class="text-gray-700 underline">
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
        
                    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                            Create an account
                        </button>
                        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                            Already have an account?
                            <a href="/login" class="text-gray-700 underline">Log in</a>.
                        </p>
                    </div>
                    <div class="col-span-6 divider">OR</div>
                    <div class="col-span-6 sm:flex justify">
                        <button class="flex w-full btn" v-on:click.prevent="googleSubmit">
                            <i class="inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512" class="w-5 h-5 mr-2" fill="currentColor">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                                </svg>
                            </i>
                            Signup with Google
                        </button>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>