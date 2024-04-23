<template>
    <header>
        <div class="container">
            <ul class="row">
                <li class="col logo-col">
                    <img class="logo" src="/img/logo-autocar11.png" alt="">
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
                <button class="btn btn-ham flex">
                    <font-awesome-icon :icon="['fas', 'bars']" />
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
.container{
    max-width: 1024px;
    margin: 0 auto;
}
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

.logo-col{
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold ;
    font-size: 18px;
}

.logo{
    width: 150px;
}

.img-button{
    filter: invert(1);
    width: 20px;
    
}
.btn{
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: white;
    padding: 10px;
}
.btn.btn-ham{
    color: black;
    background-color: white;
    height: 40px;
}
</style>