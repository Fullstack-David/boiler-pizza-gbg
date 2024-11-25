<script setup>
import { computed, defineProps } from "vue";
import { useFetchMenu } from "@/shared/useFetchMenu";
// Med hjälp av defineProps deklarerar du vilka props komponenten tar emot
// defineProps({
//   pizzas: {
//     type: Array,
//     Required: true,
//   },
//   salads: {
//     type: Array,
//   },
//   drinks: {
//     type: Array,
//   },
//   loading: {
//     type: Boolean,
//   },
//   error: {
//     type: String,
//   },
// });
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
    <h2>Vår Meny</h2>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <!-- Pizzas -->
    <div v-if="!loading && !error">
      <div class="item-category">
        <h3>Pizzor</h3>
        <div class="product-container">
          <div class="item-container" v-for="pizza in pizzas" :key="pizza.id">
            <h4>{{ pizza.id }}. {{ pizza.name }}</h4>
            <img :src="pizza.imgUrl" :alt="pizza.name" />
            <p><strong>Beskrivning:</strong> {{ pizza.description }}</p>
            <div class="topping-section">
              <h5 v-if="pizza.toppings"><strong>Toppings:</strong></h5>
              <ul v-if="pizza.toppings">
                <li v-for="topping in pizza.toppings" :key="topping">
                  {{ topping }}
                </li>
              </ul>
            </div>
            <h5 v-if="pizza.ingredients">Ingredients:</h5>
            <ul v-if="pizza.ingredients">
              <li v-for="ingredient in pizza.ingredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
            <h5>Pris {{ pizza.price }} kr</h5>
          </div>
        </div>
      </div>
      <!-- Salads -->
      <div class="item-category">
        <h3>Salader</h3>
        <div class="product-container">
          <div class="item-container" v-for="salad in salads" :key="salad.id">
            <h4>{{ salad.id }}. {{ salad.name }}</h4>
            <img :src="salad.imgUrl" :alt="salad.name" />
            <p><strong>Beskrivning: </strong>{{ salad.description }}</p>
            <div class="topping-section">
              <h5 v-if="salad.toppings"><strong>Toppings:</strong></h5>
              <ul v-if="salad.toppings">
                <li v-for="topping in salad.toppings" :key="topping">
                  {{ topping }}
                </li>
              </ul>

              <h5 v-if="salad.ingredients">Ingredients:</h5>
              <ul v-if="salad.ingredients">
                <li v-for="ingredient in salad.ingredients" :key="ingredient">
                  {{ ingredient }}
                </li>
              </ul>
            </div>
            <h5>Pris {{ salad.price }} kr</h5>
          </div>
        </div>
      </div>

      <!-- Drinks -->
      <div class="item-category">
        <h3>Drycker</h3>
        <div class="product-container">
          <div class="item-container" v-for="drink in drinks" :key="drink.id">
            <h4>{{ drink.id }}. {{ drink.name }}</h4>
            <img :src="drink.imgUrl" :alt="drink.name" />
            <p><strong>Beskrivning:</strong> {{ drink.description }}</p>
            <h5 v-if="drink.toppings"><strong>Toppings:</strong></h5>
            <ul v-if="drink.toppings">
              <li v-for="topping in drink.toppings" :key="topping">
                {{ topping }}
              </li>
            </ul>
            <h5 v-if="drink.ingredients">Ingredients:</h5>
            <ul v-if="drink.ingredients">
              <li v-for="ingredient in drink.ingredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
            <h5>Pris {{ drink.price }} kr</h5>
          </div>
        </div>
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
</style>
