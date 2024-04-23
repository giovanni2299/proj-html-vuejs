<template>
    <!-- PRIMA SECTION DEL MAIN -->
    <div class="padding container">
        <div class="flex margin-bottom">
            <div class="col squere">Keywords</div>
            <div class="col squere">Location</div>
            <div class="col squere">
                All Ctegories
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </div>
            </div>
            <div class="col squere">
                Brand
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </div>
            </div>
            <div class="col squere">
                Fuel Type
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </div>
            </div>
            <div class="col squere">
                Transmission
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </div>
            </div>
            <div class="col squere">
                Status
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </div>
            </div>
            <div class="col squere btn">
                Search
            </div>
        </div>
        <MainSectionCard2/>
        <MainSectionCard3/>
        <MainSectionCard4/>
        
        
    </div>
</template>

<script>
import MainSectionCard2 from './MainSectionCard2.vue';
import MainSectionCard3 from './MainSectionCard3.vue';
import MainSectionCard4 from './MainSectionCard4.vue';

    export default {
        components:{
            MainSectionCard2,
            MainSectionCard3,
            MainSectionCard4,
            
        }
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/reset.scss';
.container{
    max-width: 1024px;
    margin: 0 auto;
}
.padding{
    padding: 32px 0;
}
.flex{
    display: flex;
    gap: 5px;
    align-items: center;
}
.margin-bottom{
    margin-bottom: 24px;
}
.col{
    width: calc(100% / 8);
    padding: 24px;
    text-align: center;
    border-radius: 5px;
}
.squere{
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid gray;
    font-size: 14px;
    position: relative;
    
}
.col.squere.btn{
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: black;
    color: white;
    font-size: 14px;
}
.icon{
    position: absolute;
    right: 5px;
}
</style>