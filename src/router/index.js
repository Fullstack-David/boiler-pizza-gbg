import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";
import OrderHistory from "@/views/OrderHistory.vue";
import Cart from "@/components/Cart.vue";

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
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
