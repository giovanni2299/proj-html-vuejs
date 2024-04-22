<script>
import HeadreApp from './components/HeadreApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';
import {store} from './store.js'

export default{
  data(){
    return{
      store: store
    }
  },
  components:{
    HeadreApp,
    MainApp,
    FooterApp
  }
}
</script>

<template>
  <HeadreApp/>
  <MainApp/>
  <FooterApp/>

</template>

<style lang="scss">


</style>./components/MainApp.vue/index.js
