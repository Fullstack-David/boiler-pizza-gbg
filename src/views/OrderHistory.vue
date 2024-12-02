<script setup>
import { useOrderHistory } from "@/shared/useOrderHistory";
import Order from "@/components/Order.vue";

const { orderItems, loading, error } = useOrderHistory();
</script>

<template>
  <main>
    <h1>Order History</h1>
    <Order v-for="order in orderItems" :key="order.id" :order="order"/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

h1 {
  text-align: center;
  margin: 2rem 0;
}
</style>
