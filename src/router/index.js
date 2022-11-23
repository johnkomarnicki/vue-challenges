import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../challenges/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/challenge-1",
      name: "challenge-1",
      component: () => import("../challenges/ChallengeOne.vue"),
    },
    {
      path: "/challenge-2",
      name: "challenge-2",
      component: () => import("../challenges/ChallengeTwo.vue"),
    },
  ],
});

export default router;
