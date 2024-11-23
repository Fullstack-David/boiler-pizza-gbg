<script setup>
import { computed } from "vue";
import { useFetchMenu } from "./shared/useFetchMenu.js";
import AppLayout from "./components/layout/AppLayout.vue";
const { menuItems, loading, error } = useFetchMenu();

// computes
const pizzas = computed(() =>
  menuItems.value.filter((item) => item.type === "pizza")
);
const salads = computed(() =>
  menuItems.value.filter((item) => item.type === "salad")
);
const drinks = computed(() =>
  menuItems.value.filter((item) => item.type === "drink")
);
</script>

<template>
  <div class="app-container">
    <AppLayout
      :pizzas="pizzas"
      :salads="salads"
      :drinks="drinks"
      :loading="loading"
      :error="error"
    />
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
