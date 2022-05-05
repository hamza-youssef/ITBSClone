<template>
    <div>
    <NavBar/>
 <Contenu/>
      <Footer/>

    </div>
</template>

<script>
import NavBar from '../NavBar.vue'
import Footer from '../Footer.vue'
import Contenu from '../ContenuStage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Contenu,
    Footer
 
  }
}
</script>
