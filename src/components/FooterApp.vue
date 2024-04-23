<template>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col4">
                    <div>
                        <img src="/img/logo-footer-autocar11.png" alt="">
                    </div>
                    <ul>
                        <li class="mg-b">
                            <font-awesome-icon class="icon" :icon="['fas', 'location-dot']" />
                            <span class="text-icon">{{this.store.footerArrayCompanyInfo.adress}}</span>
                        </li>
                        <li class="mg-b">
                            <font-awesome-icon class="icon" :icon="['fas', 'phone-volume']" />
                            <span class="text-icon">{{this.store.footerArrayCompanyInfo.number}}</span>
                        </li>
                        <li class="mg-b">
                            <font-awesome-icon class="icon" :icon="['far', 'envelope']" />
                            <span class="text-icon">{{this.store.footerArrayCompanyInfo.mail}}</span>
                        </li >
                        <div class="brand-container">
                            <font-awesome-icon class="icon" :icon="['fab', 'facebook-f']" />
                            <font-awesome-icon  class="icon central" :icon="['fab', 'instagram']" />
                            <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
                        </div>
                    </ul>
                </div>
                <div class="col4 grow">
                    <h2>Join Our Newsletter</h2>
                    <p class="text">Subscribe to be informated about our services and products.</p>
                    <input class="email" type="email" placeholder="Your Email Adress">
                    <div class="btn"> Subscribe <font-awesome-icon :icon="['fas', 'arrow-right']" /> </div class="btn">
                </div>
                <div class="col4">
                    <h2 class="mg-b">My Account</h2>
                    <ul>
                        <li v-for="(element, i) in store.footerArrayAccount" :key="i" class="mg-b item">
                            - {{element.name}}

                        </li>
                        
                    </ul>
                </div>
                <div class="col4">
                    <h2 class="mg-b">Quick Links</h2>
                    <ul>
                        <li v-for="(element, i) in store.footerArrayLinks" :key="i" class="mg-b item">
                            - {{element.name}}
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import {store} from '../store.js'
    export default {
        data(){
            return{
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
ul, ol, menu{
    list-style: none;
}
.page-footer{
    background-color: black;
    padding: 50px;
    color: white;
}
.container{
    max-width: 1024px;
    margin: 0 auto;
}
.row{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
    
}
.col4{
    width: calc(100% / 4 - 20px);
    padding: 10px;
}

.col4.grow{
    flex-grow: 1;
}
.col4 img{
    width: 150px;
    margin-bottom: 15px;
}
.text{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
}
.email{
    border: none;
    border-radius: 5px;
    padding: 20px;
    width: 100%;
}
.btn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 5px;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    text-align: center;
    color: #aaaaaa;
}
.mg-b{
    margin-bottom: 10px;
}
.item{
    cursor: pointer;
}
.brand-container{
    width: 150px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
.icon{
    font-size: 20px;
    margin-right: 10px;
    
}
.icon.central{
    margin-left: 10px;
    margin-right: 10px;
}

.text-icon{
    font-size: 14px;
    cursor: pointer;
}
</style>