<template>
  <div>
    <div class="band">
      <h2 class="text-center text-light pt-5">NOTRE ECOLE</h2>
      <p class="text-center text-light">
        <router-link to="/" class="router"> ACCUEIL </router-link>
        / NOTRE ECOLE
      </p>
    </div>

    <h1 class="text-dark text-center mt-4">IT Business School</h1>
    <div class="Bottom-bar"></div>
    <div class="d-flex justify-content-center">
      <div class="mt-5">
        <img
          src="https://i2.wp.com/itbs.tn/hojoseq/2020/04/ITBS-ecole.jpg?w=800&ssl=1"
          width="600"
          height="900"
          alt="School"
        />
      </div>
      <div class="p-5 " style="width: 40%">
        <p class="Head">
          Pourquoi choisir la meilleure école supérieure privée de Nabeul ?
        </p>
        <p class="Title">Des Débouchés Professionnels Internationaux</p>
        <p class="paragraphe ">
          Tout au long de leur formation les étudiants vont apprendre à
          communiquer, vendre, négocier en anglais comme en français, tout en
          évoluant dans un environnement interculturel.
        </p >
        <p class="Title">Une Formation Opérationnelle</p>
        <p class="paragraphe ">
           <b> IT Business School</b> tend à former des cadres et managers internationaux
          directement opérationnels par une immersion totale en 3ème et 5ème
          année à l’étranger, et par de multiples expériences en entreprises.
        </p>
        <p class="Title">Une Notoriété Internationale</p>
        <p class="paragraphe">
          <b> IT Business School</b> est implantée dans un campus universitaire entre
          Nabeul et Hammamet. Le réseau <b>ITBS</b>  est également présent en France, au
          Canada et à New York.
        </p>
        <p class="Title">Un Cursus Structuré</p>
        <p class="paragraphe ">
          Le cursus à <b> IT Business School</b> s’effectue en 2 phases. Les 2 premières
          années sont essentiellement consacrées à la formation personnelle et
          générale de l’étudiant. Les 3 dernières années sont celles de la
          spécialisation professionnelle, elles sont basées sur le développement
          des aptitudes managériales et l’entraînement à la prise de décision.
        </p>
        <p class="Title">Un Stage Garanti</p>
        <p class="paragraphe">
          <b> IT Business School</b> garantit un stage pour chaque étudiant, un stage
          d’insertion d’initiation à la vie professionnelle et un stage de
          perfectionnement sont obligatoire pour chaque cursus.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EcolE",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.band {
  background-image: url(https://itbs.tn/hojoseq/2020/04/itbs-banniere-titre.png);
  margin-top: 100px;
  width: 100%;
  height: 150px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 15px;
}
.router {
  text-decoration: none;
  color: white;
}
.router:hover {
color: #e6e1e1;
}

.Bottom-bar {
  border-style: solid;
  border-bottom-width: 5px;
  border-color: rgb(255, 192, 0);
  width: 130px;
  margin: 0px auto;
}
.Head{
    font-family: 'Raleway';
    font-weight: normal;
    color: #777676;
    margin-bottom: 25px;
    font-size: 22px;
}
.Title{
    font-family: 'Raleway';
    font-weight: normal;
    font-style: normal;
    color: #777676;
        font-size: 18px;

}
.paragraphe{
    color: #777676;
    font-size: 15px;

}

</style>
