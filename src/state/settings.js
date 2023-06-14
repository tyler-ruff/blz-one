/*
    Blz.one - User Settings State
*/

import { reactive } from 'vue'

export const settings = reactive({
    topAlert: localStorage.getItem("blz-one-alert")
})
/*
if(localStorage.getItem("blz-one-alert") === null){
    localStorage.setItem('blz-one-alert', true);
}

export const settings = reactive({
    topAlert: localStorage.getItem("blz-one-alert")
})

export function closeBox(){
    localStorage.setItem('blz-one-alert', false);
    settings.topAlert = false;
}
*/