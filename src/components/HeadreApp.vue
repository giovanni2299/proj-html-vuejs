<template>
    <header>
        <div class="container">
            <ul class="row">
                <li class="col">
                    <img :src="`/img/favicon-autocar.png`" alt="">
                </li>
                <li v-for="element in headerItem" class="col">
                    <a :href="element.src">
                        {{element.name}}
                    </a>
                </li>
                
                <button class="btn flex">
                    <img class="img-button" :src="`/img-icon/padlock.png`" alt="">
                    <span class="button-text">My account </span>
                     
                </button>
                <button class="btn flex">
                    <img class="img-button" src="`/img-icon/add.png`" alt="">
                    <span class="button-text">Add car</span>
                    
                </button>
                <button class="btn flex">
                    hamburger menu
                </button>
                <button class="btn flex">
                    <img class="img-button" :src="`/img-icon/headphones.png`" alt="">
                    <span class="button-text">+1 (234)567 89 10</span>
                        
                </button>
            </ul>
        </div>
    </header>
</template>

<script>
import {store} from '../store.js'
    export default {
        data(){
            return{
                store: store
            }
        },
        props:{
            headerItem:{
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/header.scss';
@use '../style/partials/reset.scss';
</style>