<template>
  <div>
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-light bg-light opacity-75"
    >
      <div class="container-fluid">
        <router-link to="/">
          <img src="../assets/LogoFac1.png" alt="logo" class="taille" />
        </router-link>

        <!-- <a class="navbar-brand" href="# ">
          <img src="../assets/LogoFac1.png" alt="logo" width="100px" />
        </a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-center"
          id="main_nav"
        >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                ITBS
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/notre-ecole" class="router">
                    <div class="dropdown-item">Notre Ecole</div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/stage" class="router">
                    <div class="dropdown-item">
                      Stage et insertion professionnelle
                    </div>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Cycle des ingénieurs
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/preparatoire" class="router">
                    <div class="dropdown-item">
                      Cycle Préparatoire Intégré en Informatique
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/BI" class="router">
                    <div class="dropdown-item">
                      Génie Informatique décisionnel (BI)
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/GL" class="router">
                    <div class="dropdown-item">Génie Logiciel</div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/SysEmb" class="router">
                    <div class="dropdown-item">Système Embarqué</div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/Telecom" class="router">
                    <div class="dropdown-item">Télecom</div>
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Masters
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/Marketing" class="router">
                    <div class="dropdown-item">Marketing digital</div>
                  </router-link>
                </li>

                <li>
                  <router-link to="/DataScience" class="router">
                    <div class="dropdown-item">Information : data science</div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/Management" class="router">
                    <div class="dropdown-item">
                      MASTER MANAGEMENT DE PROJET, SÉCURITÉ ET QUALITÉ
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/Financiere" class="router">
                    <div class="dropdown-item">
                      MASTER INGÉNIERIE FINANCIÈRE
                    </div>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <router-link to="/Login" class="btn btn-outline-warning router">
          <span class="p-1">
            <i class="fa-solid fa-user" style="color: black"></i>
          </span>
          <span>S'Authentifier</span>
        </router-link>

        <!-- navbar-collapse.// -->
      </div>
      <!-- container-fluid.// -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }
  .navbar .nav-item:hover .nav-link {
    color: #ffc000;
  }
  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }

  .navbar .nav-item .dropdown-menu {
    margin-top: 0;
  }
}
.dropdown-item:hover {
  background-color: #ffc000;
  color: white;
}
.router:hover {
  color: white;
}
.router {
  text-decoration: none;
  color: black;
}

.taille {
  width: 100px;
}
</style>
