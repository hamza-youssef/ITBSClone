import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import ITBS from "./components/pages/ITBS.vue";
import Stage from "./components/pages/Stage.vue";
import Prep from "./components/pages/Prep.vue";
import BI from "./components/pages/BI.vue";
import GL from "./components/pages/GenieLogiciel.vue";
import SysEmb from "./components/pages/SystemEmb.vue";
import Telecom from "./components/pages/Telecom.vue";
import MarkDigt from "./components/pages/MarkDigt.vue";
import DataScience from "./components/pages/DataScience.vue";
import Management from "./components/pages/Management.vue";
import Finance from "./components/pages/Finance.vue";
import Login from "./components/pages/Login.vue";
import Profile from "./components/pages/Profile.vue";
import ProfileEtud from "./components/pages/ProfileEtud.vue";
import ProfileProf from "./components/pages/ProfileProf.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/notre-ecole", component: ITBS },
  { path: "/stage", component: Stage },
  { path: "/preparatoire", component: Prep },
  { path: "/BI", component: BI },
  { path: "/GL", component: GL },
  { path: "/SysEmb", component: SysEmb },
  { path: "/Telecom", component: Telecom },
  { path: "/Marketing", component: MarkDigt },
  { path: "/DataScience", component: DataScience },
  { path: "/Management", component: Management },
  { path: "/Financiere", component: Finance },
  { path: "/Login", component: Login },
  { name: 'profile', path: '/profile', component: Profile, props: true },
  { name: 'profileEtud', path: '/profileEtudiant', component: ProfileEtud, props: true },
  { name: 'ProfileProf', path: '/profileProfesseur', component: ProfileProf, props: true },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
});
export default router;
