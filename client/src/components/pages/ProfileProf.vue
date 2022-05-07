<template>
  <div class="container">
    <h1>Professeur</h1>
    <!-- Logout Button -->
    <div class="form-row text-center m-5">
      <button @click="logout()" class="btn btn-danger ">
        Déconnexion
      </button>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'Profile',
  methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/');
    }
    
  }
}
</script>

<style scoped>
.container{
  text-align: center;
}

</style>>