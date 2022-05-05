<template>
  <div>
      <div class="band">
      <h2 class="text-center text-light pt-5">STAGES ET INSERTION PROFESSIONNELLE
</h2>
      <p class="text-center text-light">
        <router-link to="/" class="router"> ACCUEIL </router-link>
        / STAGES ET INSERTION PROFESSIONNELLE
      </p>
    </div>

    <h1 class="text-dark text-center mt-4">STAGES ET INSERTION PROFESSIONNELLE</h1>
    <div class="Bottom-bar"></div>
    <div class="d-flex justify-content-center">
      
      <div class="p-5 " style="width: 40%">
        <p class="paragraphe ">
         Le <b> service insertion professionnelle d’ ITBS</b>  est un service central de l’école, il joue un rôle d’interface entre les étudiants, les enseignants-chercheurs, les entreprises et les professionnels afin d’initier et de mettre en place les initiatives orientées vers l’insertion professionnel.
        </p >

                <p class="paragraphe ">
Ce service a pour mission de fédérer, d’initier et de mettre en place les initiatives orientées vers l’insertion professionnelle de ses étudiants, à tous niveaux de formation, du projet professionnel jusqu’au marché du travail.        </p >

                <p class="paragraphe ">
Dans le cadre de l’ouverture sur l’environnement socio-économique, l’école supérieure privée des technologies d’information et de mangement de Nabeul IT Business School est désormais partenaire avec des grandes entreprises, des associations et des centres de divertissement afin d’encourager la coopération et l’échange et <b> garanti un stage</b>  d’insertion et d’initiation à la vie professionnelle et un <b>stage de perfectionnement</b>  pour chaque étudiant. Une politique de certification est aussi en place afin de valider les acquis de la formation universitaire par des certificats professionnels constitue un moyen d’acquérir un diplôme en faisant valoir son expérience professionnelle.        </p >
      </div>

      <div class="mt-5">
        <img
          src="https://i1.wp.com/itbs.tn/hojoseq/2020/04/Stage-et-Insertion-Professionnel.jpg?w=1200&ssl=1"
          width="555"
          height="370"
          alt="School"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContenuStage",
  props: {
    msg: String,
  },
};
</script>

<style>

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

.paragraphe{
    color: #777676;
    font-size: 15px;

}

</style>