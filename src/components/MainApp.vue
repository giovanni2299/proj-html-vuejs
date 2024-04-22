<template>
    <main>
        <div class="row">
            <MainSectionSlider/>
            <div class="container">
                <MainSectionCard/>

            </div>
        </div>
    
    </main>
</template>

<script>
import MainSectionSlider from './MainSectionSlider.vue';
import MainSectionCard from './MainSectionCard.vue';
    export default {
        components:{
            MainSectionSlider,
            MainSectionCard
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss'
</style>