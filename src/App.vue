<script setup>
import NavbarComponent from "./components/layout/NavbarComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
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

<style>
.product-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 20px;
}

.item-container {
  border: 1px solid grey;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.item-container img {
  width: 100%;
  border-radius: 10px;
}

.item-container li {
  list-style-type: none;
}
</style>
