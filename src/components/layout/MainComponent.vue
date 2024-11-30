<script setup>
import { computed } from "vue";
import { useFetchMenu } from "@/shared/useFetchMenu";
import Menu from "./Menu.vue";

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

    <!-- Menu components -->
    <div v-if="!loading && !error">
      <section class="item-category">
        <h3>Pizza</h3>
        <Menu :list="pizzas" />
      </section>

      <section class="item-category">
        <h3>Sallad</h3>
        <Menu :list="salads" />
      </section>

      <section class="item-category">
        <h3>Dryck</h3>
        <Menu :list="drinks" />
      </section>
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
  margin-bottom: 1rem;
}

.item-category {
  margin-bottom: 2rem;
}

h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
}
</style>              