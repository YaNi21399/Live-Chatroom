import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/firebase/config";

// 要求使用者為登入狀態
// 若為未登入狀態，頁面將自動導向welcome page
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "welcome" });
  } else {
    next()
  }
};

// 要求使用者為未登入狀態
// 若為登入狀態，頁面將自動導向chatroom page
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "chatroom" });
  } else {
    next()
  }
}

const routes = [
  {
    path: "/",
    name: "welcome",
    component: () => import("../views/WelcomeView.vue"),
    beforeEnter: requireNoAuth
  },
  {
    path: "/chatroom",
    name: "chatroom",
    component: () => import("../views/Chatroom.vue"),
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
