<template>
    <!-- SECONDA SECTION DEL MAIN -->
    <div>
        <div class="flex margin-bottom">
                <div class="card">
                    <div class="card-header">
                        <img src="/img/cabrio.jpg" alt="">
                    </div>
                    <div class="card-body">
                        <p class="class-car">Cabrio</p>
                        <p class="info">3 listing</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img src="/img/coupe.jpg" alt="">
                    </div>
                    <div class="card-body">
                        <p class="class-car">Coupe</p>
                        <p class="info">0 listing</p>

                    </div>

                </div>
                <div class="card">
                    <div class="card-header">
                        <img src="/img/hatchback.jpg" alt="">
                    </div>
                    <div class="card-body">
                        <p class="class-car">Hatchback</p>
                        <p class="info">2 listing</p>

                    </div>

                </div>
                <div class="card">
                    <div class="card-header">
                        <img src="/img/pickup.jpg" alt="">
                    </div>
                    <div class="card-body">
                        <p class="class-car">Pick Up</p>
                        <p class="info">0 listing</p>

                    </div>

                </div>
                <div class="card">
                    <div class="card-header">
                        <img src="/img/sedan.jpg" alt="">
                    </div>
                    <div class="card-body">
                        <p class="class-car">Sedan</p>
                        <p class="info">3 listing</p>

                    </div>

                </div>
                <div class="card">
                    <div class="card-header">
                        <img src="/img/suv.jpg" alt="">
                    </div>
                    <div class="card-body">
                        <p class="class-car">Suv</p>
                        <p class="info">4 listing</p>

                    </div>

                </div>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/reset.scss';
.flex{
    display: flex;
    gap: 5px;
    align-items: center;
}
.margin-bottom{
    margin-bottom: 24px;
}
.card{
    text-align: center;
    width: calc(100% / 6);
    box-shadow: 2px 2px 2px 2px #e1e1e1;
    padding: 10px;
    cursor: pointer;
}
.class-car{
    margin-bottom: 10px;
    font-size: 18px;
}
.info{
    font-size: 12px;
    color: gray;
}
</style>