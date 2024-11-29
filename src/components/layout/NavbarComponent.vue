<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header-content">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="h-10 w-10 rounded-full" />
    </div>
    <h1 class="">Welcome to Slajs GBG</h1>
    <nav class="header-nav">
      <a href="#">Meny</a>

      <RouterLink to="/orderHistory">Order History</RouterLink>
      <RouterLink to="/home">Home</RouterLink>

  <!-- RouterLink visar innehållet utan att ladda om sidan -->
      <RouterLink to="/">Home</RouterLink>

      <RouterLink to="/about">About us</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.logo-container {
  display: flex;
}
header {
  background-color: black;
  color: #fff;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

header h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

header .header-nav {
  display: flex;
  flex-direction: start;
  padding: 20px;
}

header nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

.logo-container {
  padding: 20px;
}

header nav a:hover {
  color: #f0a500;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: center;
  }

  .header-content h1 {
    font-size: 20px; /* Minska textstorlek */
    margin: 10px 0;
  }

  .header-nav {
    flex-direction: row; /* Placera länkar i en vertikal lista */
    gap: 10px;
  }

  .header-nav a {
    font-size: 16px; /* Anpassa länkstorleken */
  }
}
</style>
