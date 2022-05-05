<template>
  <div class="card">
    <h1 class="card__title text-center mt-5">Espace Admin</h1>
    <h4 class="text-center ">Bonjour {{user.name}}   </h4>
    <!-- Table Gestion -->
<div class="d-flex justify-content-around mt-5">
  <!-- First -->
<div class="card " style="width: 18rem;">
  <img class="card-img-top" src="../../assets//prof.png" alt="Card image cap">
  <div class="card-body">
    <a href="#" >
   <h5 class="card-title text-center">Professeur</h5>
    </a>
    </div>
  </div>  <!-- Secund -->
<div class="card " style="width: 18rem;">
  <img class="card-img-top" src="../../assets//etudiant.png" alt="Card image cap">
  <div class="card-body">
    <a href="#" >
   <h5 class="card-title text-center">Etudiant</h5>
    </a>
    </div>
  </div>
    <!-- First -->
<div class="card " style="width: 18rem;">
  <img class="card-img-top" src="../../assets//note.png" alt="Card image cap">
  <div class="card-body">
    <a href="#" >
   <h5 class="card-title text-center">Note</h5>
    </a>
    </div>
  </div>
</div>


    <!-- Logout Button -->
    <div class="form-row text-center m-5">
      <button @click="logout()" class="btn btn-danger ">
        Déconnexion
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  mounted: function () {
     console.log(this.$store.state.user);

    if (this.$store.state.user.userId == -1) {
      this.$router.push('/');
      return ;
    }
    this.$store.dispatch('getUserInfos');
  },
  computed: {
    ...mapState({
      user: 'userInfos',

    })
    
  },
  methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/');
    }
    
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
a:hover{
  color: #ffc000;
}
</style>>