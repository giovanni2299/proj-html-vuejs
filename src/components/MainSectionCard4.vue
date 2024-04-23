<template>
    <!-- QUARAT SECTION DEL MAIN -->
    <section>
        
        <div class="row">
            <div class="col8 bg-img">
                <img class="car" src="/img/aoutcar-about-1.png" alt="">
            </div>
            <div class="col4">
                ciao
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.row{
    display: flex;
}
.col8{
    width: calc(8 * 100% / 12);
    
}
.bg-img{
    background-image: url('/public/img/circle-auto-car-1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.col4{
    width: calc(4 * 100% / 12);
}
.car{

}
</style>