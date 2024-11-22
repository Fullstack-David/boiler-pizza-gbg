<script setup>
import ProductList from "./components/ProductList.vue";
import MockData from "./components/MockData.vue";
</script>

<template>
  <MockData />
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-gray-900 text-white p-6 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <img
            src="../src/assets/logo.png"
            alt="Logo"
            class="h-10 w-10 rounded-full"
          />
          <h1 class="text-2xl font-bold">Welcome to Slajs GBG</h1>
        </div>
        <nav class="flex space-x-8 text-sm">
          <a href="#" class="hover:text-gray-400">Meny</a>
          <a href="#" class="hover:text-gray-400">Kontakt</a>
          <a href="#" class="hover:text-gray-400">Om oss</a>
        </nav>
      </div>
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
</template>

<style>
/* Anpassade stilar om det behövs */
</style>
