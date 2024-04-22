<template>
    <div class="padding container">
        <div class="flex">
            <div class="col squere">Keywords</div>
            <div class="col squere">Location</div>
            <div class="col squere">All Ctegories</div>
            <div class="col squere">Brand</div>
            <div class="col squere">Fuel Type</div>
            <div class="col squere">Transmission</div>
            <div class="col squere">Status</div>
            <div class="col squere btn">
                Search
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
.container{
    max-width: 1024px;
    margin: 0 auto;
}
.padding{
    padding: 32px 0;
}
.flex{
    display: flex;
    gap: 10px;
    align-items: center;
}
.col{
    width: calc(8 * 100% / 12 - 10px);
    padding: 24px;
    text-align: center;
    border-radius: 5px;
}
.squere{
    border: 1px solid gray;
    font-size: 12px;
}
.col.squere.btn{
    cursor: pointer;
    background-color: black;
    color: white;
   
}
</style>