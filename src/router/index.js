import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";
import OrderHistory from "@/components/layout/OrderHistory.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/orderHistory",
    name: "orderHistory",
    component: OrderHistory,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
