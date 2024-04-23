<template>
    <section class=" section img-bg">
        <div class="thumbs-up">
            <font-awesome-icon :icon="['far', 'thumbs-up']" />
            <div class="empty-star">
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
            </div>
        </div>
        <h1 class="title">What Are Our Customers Saying ? </h1>
        <p class="sub-title">Opinions from our happy customers.</p>

        <div class="container">
            <div class="row">
                <div class="card">
                    <div class="card-header">
                        <p class="customers-message">We are a gallery vehicle dealer.Before we met this site, our sales were sluggish </p>
                        <div class="quote-right">
                            <font-awesome-icon :icon="['fas', 'quote-right']" />
                        </div>
                    </div>
                    <img class="customers" src="/img/man1.png" alt="">
                    <p>Adam</p>
                </div>

                <div class="card">
                    <div class="card-header">
                        <p class="customers-message">One of the quality website i apply to rent a car.There are hundreds of different tools</p>
                        <div class="quote-right">
                            <font-awesome-icon :icon="['fas', 'quote-right']" />
                        </div>
                    </div>
                    <img class="customers" src="/img/testimonial2-1.png" alt="">
                    <p>Cristian</p>

                </div>
                <div class="card">
                    <div class="card-header">
                       <p class="customers-message">I was trying to sell my car.And i put it here and slod it for ore for more than it was worth.</p> 
                       <div class="quote-right">
                            <font-awesome-icon :icon="['fas', 'quote-right']" />
                        </div>
                    </div>
                    <img class="customers" src="/img/man2.png" alt="">
                    <p>Robert</p>

                </div>
                <div class="card">
                    <div class="card-header">
                        <p class="customers-message">A fast and reliable vehicle selling site.Rare qualty website with hundeds of model vheicles</p>
                        <div class="quote-right">
                            <font-awesome-icon :icon="['fas', 'quote-right']" />
                        </div>
                    </div>
                    <img class="customers" src="/img/testimonial4-1.png" alt="">
                    <p>Elizabeth</p>

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
.section{
    padding: 100px;
    text-align: center;
    color: white;
}
.img-bg{
    background-image: url('/public/img/comment-bg-autocar.jpg');
    background-position:top;
    background-position-y:30px;
    background-repeat: no-repeat;
    background-size: cover;
    
}
.thumbs-up{
    color: white ;
    font-size: 50px;
}
.empty-star{
    font-size: 20px;
}
.title{
    font-size: 30px;
    margin-bottom: 20px;
}
.sub-title{
    margin-bottom: 20px;
}
.container{
    max-width: 1024px;
    margin: 0 auto;
}
.row{
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
.card{
    z-index: 0;
    width: calc(3 * 100% / 12 - 12px);
    padding: 12px;
    background-color: white;
    border-radius: 10px;
    color: black;
}
.card-header{
    position: relative;
    margin-bottom: 20px;
}
.quote-right{
    z-index: -1;
    font-size: 70px;
    color: #eceaea;
    position: absolute;
    top: 35%;
    right: 35%;
    
}
.customers{
    width: 100px;
    margin-bottom: 10px;
}
.customers-message{
    z-index: 2;
    line-height: 24px;
}

</style>