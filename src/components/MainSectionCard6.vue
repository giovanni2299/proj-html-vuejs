<template>
    <section class="section">
            <font-awesome-icon class="icon" :icon="['far', 'thumbs-up']" />
            <h1 class="title">Resent Articles</h1>
            <p class="info-car">Useful infrmation about car.</p>

        <div class="container">
            <div class="row">
                <div class="col4">
                    <div class="card">
                        <div class="card-header">
                            <img src="/img/news-autocar-1-600x359.jpg" alt="">
                            <p class="date-descript">06.07.2022 - Auto Car</p>
                        </div>
                        <div class="card-body flex">
                            <h1 class="title">Why BMW is loved?</h1>
                            <p class="description">BMW's have a different line with their design and almost[..]</p>
                            <div class="button">
                                More
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col4">
                    <div class="card">
                        <div class="card-header">
                            <img src="/img/news-autocar-2-600x359.jpg" alt="">
                            <p class="date-descript">06.07.2022 - Auto Car</p>
                        </div>
                        <div class="card-body flex">
                            <h1 class="title">How is solid Asudi?</h1>
                            <p class="description">According to Euro NCAP data with different test organizations. there[..]</p>
                            <div class="button">
                                More
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col4">
                    <div class="card">
                        <div class="card-header">
                            <img src="/img/news-autocar-6-600x359.jpg" alt="">
                            <p class="date-descript">06.07.2022 - Auto Car</p>
                        </div>
                        <div class="card-body flex">
                            <h1 class="title">What brand is Skoda?</h1>
                            <p class="description">Skoda is one of leading automotive manufactures on the[..]</p>
                            <div class="button">
                                More
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col4">
                    <div class="card">
                        <div class="card-header">
                            <img src="/img/news-autocar-5-600x359.jpg" alt="">
                            <p class="date-descript">06.07.2022 - Auto Car</p>
                        </div>
                        <div class="card-body flex">
                            <h1 class="title">Is the Auris Diesel?</h1>
                            <p class="description">You will have a queiter veicle that burns less than[..]</p>
                            <div class="button">
                                More
                            </div>
                        </div>
                    </div>

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
}
.icon{
    color: white;
    padding: 10px;
    font-size: 50px;
    aspect-ratio: 1/1;
    border: 1px solid black;
    background-color: black;
    border-radius: 50%;
    margin-bottom: 10px;
}
.title{
    margin-bottom: 10px;
}
.info-car{
    margin-bottom: 10px;
}
.container{
    width: 1024px;
    margin: 0 auto;
}
.row{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}
.col4{
    width: calc(3 * 100% / 12 - 40px);
}
.card{
    box-shadow: 5px 5px 5px 5px #e1e1e1;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
}
.card-header{
    margin-bottom: 20px;
}
.card-header img{
    display: block;
}
.flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}
.button{
    margin: 0 auto;
    color: white;
    background-color: black;
    padding: 10px;
    width: 100px;
    border: 1px solid black;
}
.title{
    font-size: 20px;
}
.description{
    text-align: left;
    font-size: 14px;
    margin-bottom: 20px;
}
</style>