<template>
    <div class="img-bg">
        <div class="description-section">
            <h1 class="des-title">
            Buy And Sell Your
            <br>
            Car At Its Value
            </h1>
            <span>Find the right price and dealer.</span>
            <p>Learn more &RightArrow;</p>
        </div>
    </div>
</template>

<script>

    export default {
       
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss';
@use '../style/partials/reset.scss';
.img-bg{
    display: block;
    background-image: url('/public/img/slider-autocar-5.jpg');
    height: 620px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
}
.description-section{
    color: white;
    position: absolute;
    top: 25%;
    left: 10%;
    font-weight: bold;
 
}
.des-title{
    margin-bottom: 0;
}

</style>