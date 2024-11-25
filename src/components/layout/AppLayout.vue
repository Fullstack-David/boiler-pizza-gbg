<!-- <script setup>
import MainComponent from "./MainComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import { defineProps } from "vue";
import { RouterView } from "vue-router";

// :propNamn="data"
defineProps({
  pizzas: {
    type: Array,
    required: true,
  },
  salads: {
    type: Array,
    required: true,
  },
  drinks: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  error: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <main>
    <router-view />
    <MainComponent
      :pizzas="pizzas"
      :salads="salads"
      :drinks="drinks"
      :loading="loading"
      :error="error"
    />
  </main>
</template> -->
