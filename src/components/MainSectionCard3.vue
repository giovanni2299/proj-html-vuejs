<template>

    <section class="flex-section">
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img :src="`/img/bmw-8-series-convertible-technical-data-sp-desktop-400x300.jpg`" alt="">
                </div>
                <div class="card-body">
                    <p>BMW M9</p>
                    <p>ciao</p>
                    <ul class="flex">
                        <li>34'000</li>
                        <li>BMW</li>
                        <li>Electric</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img :src="`/img/bmw88-400x300.jpg`" alt="">
                </div>
                <div class="card-body">

                </div>
            </div>

        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img :src="`/img/bmw442-400x300.jpg`" alt="">

                </div>
                <div class="card-body">

                </div>
            </div>

        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img :src="`/img/yeni-ibiza-2-400x300.jpg`" alt="">

                </div>
                <div class="card-body">

                </div>
            </div>

        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img :src="`/img/makyajli-2022-seat-arona-1-400x300.jpg`" alt="">

                </div>
                <div class="card-body">

                </div>
            </div>

        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img :src="`/img/vw-taigo3832-400x300.jpg`" alt="">

                </div>
                <div class="card-body">

                </div>
            </div>

        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img :src="`/img/2019-vw-t-cross-400x300.jpg`" alt="">

                </div>
                <div class="card-body">

                </div>
            </div>

        </div>
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img :src="`/img/volkswagen-passat-1280x720-1-400x300.jpg`" alt="">

                </div>
                <div class="card-body">

                </div>
            </div>

        </div>
    </section>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/reset.scss';

.flex-section {
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;

}
.flex{
    display: flex;
    gap: 5px;
}
.col-3 {
    width: calc(3 * 100% / 12);
}

.card {
    box-shadow: 2px 2px 2px 2px #e1e1e1;
    padding: 10px;
}
</style>