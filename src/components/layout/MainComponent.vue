<script setup>
import { computed } from "vue";
import { useFetchMenu } from "@/shared/useFetchMenu";
import CardComponent from "./CardComponent.vue";

const { menuItems, loading, error } = useFetchMenu();

// computes
const pizzas = computed(() => menuItems.value.filter((item) => item.type === "pizza"));
const salads = computed(() => menuItems.value.filter((item) => item.type === "salad"));
const drinks = computed(() => menuItems.value.filter((item) => item.type === "drink"));

</script>
<template>
  <main>
    <h2>Meny</h2>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <!-- CardComponent -->
    <div v-if="!loading && !error">
      <h3 class="category-header">Pizza</h3>
      <div class="item-category">
        <CardComponent :list="pizzas" />
      </div>

      <div class="item-category">
        <h3 class="category-header">Salad</h3>
        <CardComponent :list="salads" />
      </div>

      <div class="item-category">
        <h3 class="category-header">Drink</h3>
        <CardComponent :list="drinks" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  flex-grow: 1;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}

.category-header {
  margin: 1rem 0;
}
</style>
