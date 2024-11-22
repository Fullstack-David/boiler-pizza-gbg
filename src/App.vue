<script setup>
  import FetchPizzaMenu from './components/FetchPizzaMenu.vue';
</script>

<template>
  <h1>App.vue</h1>
  <FetchPizzaMenu />
</template>

<style scoped></style>

<script setup>
import ProductList from "./components/ProductList.vue";
import MockData from "./components/MockData.vue";
</script>

<template>
  <MockData />
  <div class="app-container">
    <!-- Header -->
    <header class="header-content">
      <div class="logo-container">
        <img
          src="../src/assets/logo.png"
          alt="Logo"
          class="h-10 w-10 rounded-full"
        />
      </div>
      <h1 class="text-2xl font-bold">Welcome to Slajs GBG</h1>
      <nav class="header-nav">
        <a href="#">Meny</a>
        <a href="#">Kontakt</a>
        <a href="#">Om oss</a>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-grow bg-gray-100 py-10">
      <div class="container mx-auto">
        <h2 class="text-xl font-semibold mb-6 text-center">Vår Meny</h2>
        <ProductList title="Våra Specialiteter" :products="MockData.name" />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white p-6 mt-10">
      <div class="container mx-auto text-center">
        <p class="text-sm">
          Kontakt:
          <a href="mailto:info@slajs.com" class="underline">info@slajs.com</a>
        </p>
        <p class="text-sm mt-2">
          &copy; 2024 Slajs GBG. Alla rättigheter reserverade.
        </p>
      </div>
    </footer>
  </div>





</script>



<style>

</style>
