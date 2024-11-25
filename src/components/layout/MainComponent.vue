<script setup>
import { computed, defineProps } from "vue";
import { useFetchMenu } from "@/shared/useFetchMenu";
import CardComponent from "./CardComponent.vue";
// Med hjälp av defineProps deklarerar du vilka props komponenten tar emot
defineProps({
  pizzas: {
    type: Array,
  },
  salads: {
    type: Array,
  },
  drinks: {
    type: Array,
  },
  loading: {
    type: Boolean,
  },
  error: {
    type: String,
  },
});
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
  <main>
    <h2>Meny</h2>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <!-- CardComponent -->
    <div v-if="!loading && !error">
      <h3>Pizza</h3>
      <div class="item-category">
        <CardComponent :list="pizzas" />
      </div>

      <div class="item-category">
        <h3>Salad</h3>
        <CardComponent :list="salads" />
      </div>

      <div class="item-category">
        <h3>Drink</h3>
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
</style>
