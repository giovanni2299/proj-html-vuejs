<script>
import HeadreApp from './components/HeadreApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';


export default{
  data(){
    return{
      headerMenu:[
        {
            name:'Home',
            src: '#'
        },
        {
            name:'About Us',
            src: '#'
        },
        {
            name:'Veichles',
            src:'#'
        },
        {
            name:'Dealers',
            src:'#'
        },
        {
            name:'Packages',
            src:'#'
        },
        {
            name:'Blog',
            src:'#'
        },
        {
            name:'Contact',
            src:'#'
        }
    ],
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
  <HeadreApp :headerItem="headerMenu"/>
  <MainApp/>
  <FooterApp/>

</template>

<style lang="scss">
@use './style/general.scss'

</style>
