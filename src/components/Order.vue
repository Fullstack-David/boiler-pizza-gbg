<script setup>
defineProps({
    order: Object
})
</script>

<template>
    <div class="order-items" >
      <p>Customer Number: {{ order.customerTel }}</p>
      <p>Delivery time: {{ order.eta.slice(0, -8).replace("T", " ") }}</p>
      <hr style="background-color: lightgray; width: 20%" />
      <ul class="item-list">
        <li v-for="item in order.items" :key="item.id">
          {{ item.name }} {{ item.price }} kr
        </li>
      </ul>
      <hr style="background-color: lightgray; width: 20%" />
      <p>Order Value: {{ order.orderValue }} kr</p>
      <p>Status: {{ order.state }}</p>
    </div>
</template>

<style scoped>
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