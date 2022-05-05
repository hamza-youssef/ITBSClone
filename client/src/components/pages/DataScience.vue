<template>
  <div>
    <NavBar />
    <Contenu />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../NavBar.vue";
import Footer from "../Footer.vue";
import Contenu from "../ContenuDataScience.vue";
export default {
  name: "Prep",
  props: {
    msg: String,
  },
  components: {
    NavBar,
    Contenu,
    Footer,
  },
};
</script>

<style></style>
