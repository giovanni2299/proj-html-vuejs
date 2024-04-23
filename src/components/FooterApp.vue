<template>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col4">
                    <img src="/img/logo-footer-autocar11.png" alt="">

                </div>
                <div class="col4 central">
                    <h2>Join Our Newsletter</h2>
                    <p class="text">Subscribe to be informated about our services and products.</p>
                    <input class="email" type="email" placeholder="Your Email Adress">
                    <div class="btn"> Subscribe <font-awesome-icon :icon="['fas', 'arrow-right']" /> </div class="btn">
                </div>
                <div class="col4">
                    <h2>My Account</h2>
                </div>
                <div class="col4">
                    <h2>Quick Links</h2>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.page-footer{
    background-color: black;
    padding: 50px;
    color: white;
}
.container{
    max-width: 1024px;
    margin: 0 auto;
}
.row{
    display: flex;
    flex-wrap: wrap;
}
.col4{
    width: calc(3 * 100% / 12);
    padding: 10px;
}
.col4.central{
    flex-grow: 1;
}
.col4 img{
    width: 150px;
}
.text{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
}
.email{
    border: none;
    border-radius: 5px;
    padding: 20px;
    width: 100%;
}
.btn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 5px;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    text-align: center;
    color: #aaaaaa;
}
</style>