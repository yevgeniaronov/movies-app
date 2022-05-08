import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView/index.vue"; // in real-would app would use barrel import file

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies/:id",
    name: "movie",
    component: () =>
      import(
        /* webpackChunkName: "movie-view" */ "../views/MovieView/index.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
