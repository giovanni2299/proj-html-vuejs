<template>
    <header>
        <div class="container">
            <ul class="row">
                <li class="col">
                    <img :src="`/img/favicon-autocar.png`" alt="">
                </li>
                <li v-for="element in  store.headerMenu" class="col">
                    <a href="#">
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
        }
    }
</script>

<style lang="scss" scoped>

.button-text{
    font-size: 10px;
}
.flex{
    display: flex;
    align-items: center;
    gap: 5px;
}
.container{
    max-width: 1024px;
    margin: 0 auto;
}
.row{
    display: flex;
    align-items: center;
    gap: 10px;
}
.img-button{
    width: 20px;
    
}
a{
    text-decoration:none ;
    color: currentColor;
    
}
ul, ol, menu{
    list-style: none;
}

</style>