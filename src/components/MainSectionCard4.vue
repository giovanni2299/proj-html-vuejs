<template>
    <!-- QUARATA SECTION DEL MAIN -->
    <section class="padding-bottom">
        
        <div class="row">
            <div class="col8 bg-img">
                <div class="years-experience">
                    24 <br>
                    years of experience
                </div>
                <div class="team">
                    240 <br>
                    special Expert Team
                </div>
                <img class="car" src="/img/aoutcar-about-1.png" alt="">
            </div>

            <div class="col4 flex">
                <h1>Want to buy or sell a vehicle?</h1>
                <p>You can put your vehicles for sale by resistering on uor website.Whether you are dealer or sell personally. Sell your veicle in the most profitable way.With this system. Which has milions of members.You will be able to buy and sell vehicles quickly. </p>
                <img class="driver" src="/img/divider.jpg" alt="">
                <div>

                </div>

                <div class="flex-row">
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'car']" />
                    </div>
                    <div>
                        <h1 class="title">Model Veicles</h1>
                        <p>We are sure that you will find vehicles of suitable models on our website.</p>
                    </div>
                </div>

                <div class="flex-row">
                    <div class="icon row">
                        <font-awesome-icon  :icon="['fas', 'car']" />
                        <font-awesome-icon class="wrench" :icon="['fas', 'wrench']" />
                    </div>
                    <div>
                        <h1 class="title">2nd Hand Vehicles</h1>
                        <p>You can put your used vehicles for sale by adding them to our website.</p>
                    </div>
                </div>
                <div class="btn flex-btn">
                    Get to know us <font-awesome-icon :icon="['fas', 'arrow-right']" />
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
.padding-bottom{
    padding-bottom: 100px;
}
.row{
    display: flex;
}
.years-experience{
    font-weight: bold;
    font-size: 30px;
    line-height: 52px;
    text-align: center;
    width: 200px;
    aspect-ratio: 1;
    background-color: black;
    color: white;
    border-radius: 50%;
    position: absolute;
    top: 5%;
    left: 10%;
}
.team{
    font-weight: bold;
    font-size: 30px;
    line-height: 52px;
    text-align: center;
    width: 200px;
    aspect-ratio: 1;
    background-color: black;
    color: white;
    border-radius: 50%;
    position: absolute;
    top: 65%;
    right: 10%;
    
}
.col8{
    width: calc(8 * 100% / 12);
    position: relative;
    
}
.bg-img{
    background-image: url('/public/img/circle-auto-car-1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.col4{
    padding: 12px;
    width: calc(4 * 100% / 12);
}
.flex{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.driver{
    width: 100px;
}
.flex-row{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
}
.title{
    margin-bottom: 8px;
}
.icon{
    font-size: 45px;
    margin-right: 20px;
    position: relative;
}
.wrench{
    color: rgb(240, 9, 9);
    font-size: 30px;
    position: absolute;
    bottom: 10px;
    left: 12px;
}
.btn{
    color: white ;
    border-radius: 5px;
    padding: 15px 10px;
    width: 150px;
    border: 1px solid black;
    background-color: black;
}
.flex-btn{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>