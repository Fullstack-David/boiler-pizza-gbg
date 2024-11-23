<script setup>
import Header from "./Header.vue";
import MainContent from "./MainContent.vue";
import FooterApp from "./FooterApp.vue";
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
  <Header />
  <MainContent
    :pizzas="pizzas"
    :salads="salads"
    :drinks="drinks"
    :loading="loading"
    :error="error"
  />
  <FooterApp />
</template>
