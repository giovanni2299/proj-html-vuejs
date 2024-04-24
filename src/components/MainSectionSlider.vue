<template>
    <div class="hello img-bg">
        <div class="arrow-right">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </div>
        <div class="arrow-left">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </div>
        <div class="description-section">
            <h1 class="des-title">
                Buy And Sell Your
                <br>
                Car At Its Value
            </h1>
            <span>Find the right price and dealer.</span>
            <p class="text">Learn more <font-awesome-icon :icon="['fas', 'arrow-right']" /></p>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store: store,
        }
       
    }
    
}
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss';
@use '../style/partials/reset.scss';

.arrow-right,
.arrow-left {
    line-height: 24px;
    width: 20px;
    cursor: pointer;
    color: white;
    font-size: 20px;
}

.arrow-left {
    position: absolute;
    top: 50%;
    left: 5%;
}

.arrow-right {
    position: absolute;
    top: 50%;
    right: 5%;
}

.img-bg {
    display: block;
    background-image: url('/public/img/slider-autocar-5.jpg');
    height: 620px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
}
.img-bg-2{
    display: block;
    background-image: url('/public/img/slider-autocar-6.jpg');
    height: 620px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
}

.description-section {
    color: white;
    position: absolute;
    top: 40%;
    left: 20%;
    font-weight: bold;

}

.des-title {
    margin-bottom: 10px;
    font-size: 40px;
}

.text {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
}
</style>