import { createRouter, createWebHistory } from "vue-router";
import show_user from "../views/show_user.vue";
import add_user from "../views/add_user.vue";
import edit_user from "../views/edit_user.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: show_user,
    },
    {
      path: "/add_user",
      component: add_user,
    },
    {
      path: "/edit_user/:id",
      component: edit_user,
    },
  ],
});

export default router;
