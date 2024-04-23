<template>
    <main>
        <div class="row">
            <MainSectionSlider/>
            <div class="container">
                <MainSectionCard1/>
                
            </div>
            <MainSectionCard5/>
            <MainSectionCard6/>
        </div>
    
    </main>
</template>

<script>
import MainSectionSlider from './MainSectionSlider.vue';
import MainSectionCard1 from './MainSectionCard1.vue';
import MainSectionCard5 from './MainSectionCard5.vue';
import MainSectionCard6 from './MainSectionCard6.vue';
    export default {
        components:{
            MainSectionSlider,
            MainSectionCard1,
            MainSectionCard5,
            MainSectionCard6
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/main.scss'
</style>