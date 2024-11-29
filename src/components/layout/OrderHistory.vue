<script setup>
import { useOrderHistory } from "@/shared/useOrderHistory";

const { orderItems, loading, error } = useOrderHistory();
</script>

<template>
  <main>
    <h1>Order History</h1>
    <div class="order-items" v-for="order in orderItems" :key="order.id">
      <p>Customer Number: {{ order.customerTel }}</p>
      <p>Delivery time: {{ order.eta.slice(0, -8).replace("T", " ") }}</p>
      <hr />
      <ul class="item-list">
        <li v-for="item in order.items" :key="item.id">
          {{ item.name }} {{ item.price }} kr
        </li>
      </ul>
      <hr />
      <p>Order Value: {{ order.orderValue }} kr</p>
      <p>Status: {{ order.state }}</p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.order-items {
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-list li {
  list-style-type: none;
}
</style>
