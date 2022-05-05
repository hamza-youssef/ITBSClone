<template>
  <div >

    <NavBar/>     
    <Carousel/>
    <Cards/>
    <Videos/>
    <Footer/>

  </div>
</template>

<script>  
import NavBar from '../NavBar.vue'
import Carousel from '../Carousel.vue'
import Cards from '../Cards.vue'
import Videos from '../Videos.vue'
import Footer from '../Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Carousel,
    Cards,
    Videos,
    Footer

  }
}
</script>

<style>

</style>
