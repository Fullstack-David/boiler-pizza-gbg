<script setup>
import { defineProps } from "vue";

const props = defineProps({
  list: Array,
});
</script>

<template>
  <div class="item-category">
    <div class="product-container">
      <div class="item-container" v-for="item in list" :key="list.id">
        <h4>{{ item.id }}. {{ item.name }}</h4>
        <img :src="item.imgUrl" :alt="item.name" />
        <p><strong>Beskrivning:</strong> {{ item.description }}</p>
        <div class="topping-section">
          <h5 v-if="item.toppings"><strong>Toppings:</strong></h5>
          <ul v-if="item.toppings">
            <li v-for="topping in item.toppings" :key="item.topping">
              {{ topping }}
            </li>
          </ul>
        </div>
        <h5 v-if="item.ingredients">Ingredients:</h5>
        <ul v-if="item.ingredients">
          <li v-for="ingredient in item.ingredients" :key="item.ingredient">
            {{ ingredient }}
          </li>
        </ul>
        <h5>Pris {{ item.price }} kr</h5>
      </div>
    </div>
  </div>
</template>
