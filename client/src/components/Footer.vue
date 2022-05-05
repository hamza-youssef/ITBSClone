<template>
  <div class="dfooter1">
  
    <div class="container d-flex flex-column min-vh-100  ">
  <footer class="row row-cols-5 py-5 my-5 border-top  mt-auto ">
    
<div class="col foot1">
      <h4>À PROPOS</h4>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><img src="https://www.itbs.tn/hojoseq/2020/04/logo_itbs_134x50.png" alt="logo" class="nav-link p-0 pb-4 text-muted" /></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">ITBS est implantée dans un campus universitaire entre Nabeul et Hammamet. Notre réseau est également présent en France, Canada et New York.</p></li>

      </ul>
    </div>
    <div class="col foot1">
      <h4>NOUS CONTACTER</h4>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">Pour toute information complémentaire, n’hésitez pas à nous contacter.</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted"> Av. Dali Jezi, 8062 Nabeul, Tunisie</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted"> +216 72 233 777</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">+216 92 337 777</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">+216 52 124 606</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted"> contact@itbs.tn</p></li>
      </ul>
    </div>

    <div class="col foot1">
      <h4>LIENS UTILES</h4>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">ACTUALITÉS</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">ESPACE ETUDIANT</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">ESPACE ENSEIGNANT</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">WEBMAIL</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">POLITIQUE DE CONFIDENTIALITÉ</p></li>
        <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">NOUS CONTACTER</p></li>
      </ul>
    </div>
    <div class="col-lg-6 copy1">
      <p class="text-muted">Copyright © 2021 ITBS. Designed by <b>HY & MAS</b> , All Rights Reserved.</p>
    </div>
  </footer>
  
</div>

  </div>
</template>

<script>
export default {
  name: "FooteR",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dfooter1{
  margin-top: -150px;
  padding-top: 20px;
}
.foot1{
margin-left: 140px;
}
.foot1 h4{
  margin-bottom: 20px;
  font-family: "monospace";
}
.copy1{
  margin-bottom: -50px;
  margin-left: 33.333333%;
  margin-top: 40px;
}
p{
      font-weight: 400;
    font-style: normal;
    color: #666;
    font-size: 14px;
  font-family: "monospace";
}
p b{
  color: #58ACFA;
}
</style>
