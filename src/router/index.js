import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/client/home.vue"),
    // component: () => import("../views/admin/home.vue"),
  },
  {
    path: "/men",
    name: "men",
    component: () => import("../views/client/men.vue"),
  },
  {
    path: "/women",
    name: "women",
    component: () => import("../views/client/women.vue"),
  },
  {
    path: "/clothes",
    name: "clothes",
    component: () => import("../views/client/clothes.vue"),
  },
  {
    path: "/buy",
    name: "buy",
    component: () => import("../views/client/buy.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/client/cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
