<script setup>
import { defineProps } from "vue";

const props = defineProps({
  list: Array,
});
</script>

<template>
  <div class="product-container">
    <div class="item-container" v-for="item in list" :key="list.id">
      <img class="product-img" :src="item.imgUrl" :alt="item.name" />
      <div>
        <h4>{{ item.id }}. {{ item.name }}</h4>
        <p v-if="item.toppings" class="topping-name">{{ item.toppings.join(', ') }}</p>
        <p v-if="item.ingredients" class="topping-name">{{ item.ingredients.join(', ') }}</p>
      </div>
      <div class="price-cart-container">
        <p>{{ item.price }}:-</p>
        <img class="add-to-cart-img" src="../../assets/add-to-cart.png" alt="add-to-cart">
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.item-container {
  border: 1px solid grey;
  border-radius: 10px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0;
}

.product-img {
  width: 5vh;
  height: 5vh;
  border-radius: 10px;
  margin: 2%;
}

.topping-name {
  font-size: small;
}

.price-cart-container {
  margin-left: auto;
  margin-right: 2px;
}

.add-to-cart-img {
  width: 2rem;
  transition: transform 0.3s ease;
}

.add-to-cart-img:hover {
  transform: scale(1.2) rotate(10deg);
}
</style>