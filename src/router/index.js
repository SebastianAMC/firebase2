import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/auth";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
    meta: {
      login: true,
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
 // const authRequired = to.meta.login;
if (to.path == "/login" && auth.currentUser){
  next('/')
} else if (to.matched.some(route => route.meta.login) && !auth.currentUser){
  next('login')
} else{
  next()
}
  

});


export default router;
