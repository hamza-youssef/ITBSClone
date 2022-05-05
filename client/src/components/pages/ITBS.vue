<template>
    <div>
    <NavBar/>
    <Ecole/>  
      <Footer/>

    </div>
</template>

<script>
import NavBar from '../NavBar.vue'
import Footer from '../Footer.vue'
import Ecole from '../Ecole.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Ecole
  }
}
</script>
