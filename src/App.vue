<script setup>
import NavbarComponent from "./components/layout/NavbarComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
import OrderHistory from "./components/layout/OrderHistory.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-container">
    <NavbarComponent />

    <!-- RouterView används av Vue Router för att visa innehållet för den aktuella routen. -->

    <RouterView />
    <FooterComponent />
  </div>
</template>

<style></style>
