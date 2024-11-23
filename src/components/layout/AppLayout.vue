<script setup>
import HeaderComponent from "./HeaderComponent.vue";
import MainComponent from "./MainComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import { defineProps } from "vue";

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
  <HeaderComponent />
  <MainComponent
    :pizzas="pizzas"
    :salads="salads"
    :drinks="drinks"
    :loading="loading"
    :error="error"
  />
  <FooterComponent />
</template>
