<script setup lang="ts">
    import config from '~/content/config.json';

    const colorMode = useColorMode();
    
    let mobileMenu = ref(false);
    const drawer = ref(null);

    const { isSwiping, direction } = useSwipe(drawer, {
        onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection){
            if(direction === "left"){
                menuDrawerToggle();
            }
        }
    });

    function menuDrawerToggle(){
        mobileMenu.value = !mobileMenu.value;
    }
</script>
<template>
    <input id="mobile-menu-drawer" v-model="mobileMenu" type="checkbox" class="drawer-toggle" />
    <div class="drawer-side">
        <label for="mobile-menu-drawer" class="drawer-overlay"></label>
        <ul ref="drawer" class="drawer-menu menu p-4 w-80 h-full bg-base-200 border-r border-r-gray-400 text-base-content">
            <li class="justify-between">
                <a href="/" class="cursor-pointer text-gray-800 group inline">
                    <i class="inline-flex">
                        <img v-bind:src="colorMode.value == 'light' ? config.logo : config.logoDark" />
                    </i>
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
            <li class="pt-5 px-10">
                <ColorModeSwitch />
            </li>
            <!--
            <li class="btn-disabled pt-5 bg-transparent">
                <hr />
            </li>
            <li class="btn-disabled bg-transparent">
                <p class="text-gray-500">
                    {{ user.name }}
                </p>
            </li>
            <li v-for="(menuItem, index) in user.menu" :key="index">
                <a v-bind:href="menuItem.url">
                    {{ menuItem.label }}
                </a>
            </li>
            -->
        </ul>
    </div>
</template>