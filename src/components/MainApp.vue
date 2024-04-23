<template>
    <main>
        <div class="row">
            <MainSectionSlider/>
            <div class="container">
                <MainSectionCard1/>
                
            </div>
        </div>
    
    </main>
</template>

<script>
import MainSectionSlider from './MainSectionSlider.vue';
import MainSectionCard1 from './MainSectionCard1.vue';
    export default {
        components:{
            MainSectionSlider,
            MainSectionCard1
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss'
</style>