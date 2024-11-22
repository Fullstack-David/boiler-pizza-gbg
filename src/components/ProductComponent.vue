<script setup>
import { computed } from 'vue';
import { useFetchMenu } from '../shared/useFetchMenu.js'
const { menuItems, loading, error } = useFetchMenu();

// computes
const pizzas = computed(() => menuItems.value.filter(item => item.type === 'pizza'))
const salads = computed(() => menuItems.value.filter(item => item.type === 'salad'))
const drinks = computed(() => menuItems.value.filter(item => item.type === 'drink'))
</script>

<template>
    <h3>Pizzor</h3>
    <div class="product-container">
        <div class="item-container" v-for=" pizza in pizzas" :key="pizza.id">
            <h4>{{ pizza.id }}. {{ pizza.name }}</h4>
            <img :src="pizza.imgUrl" :alt="pizza.name">
            <p>Beskrivning {{ pizza.description }}</p>

            <h5 v-if="pizza.toppings"> Toppings:</h5>
            <ul v-if="pizza.toppings">
                <li v-for="topping in pizza.toppings" :key="topping">{{ topping }}</li>
            </ul>

            <h5 v-if="pizza.ingredients"> Ingredients:</h5>
            <ul v-if="pizza.ingredients">
                <li v-for="ingredient in pizza.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
            <h5>Pris {{ pizza.price }} kr</h5>
        </div>
    </div>

    <h3>Salader</h3>
    <div class="product-container">
        <div class="item-container" v-for=" salad in salads" :key="salad.id">
            <h4>{{ salad.id }}. {{ salad.name }}</h4>
            <img :src="salad.imgUrl" :alt="salad.name">
            <p>Beskrivning {{ salad.description }}</p>

            <h5 v-if="salad.toppings"> Toppings:</h5>
            <ul v-if="salad.toppings">
                <li v-for="topping in salad.toppings" :key="topping">{{ topping }}</li>
            </ul>

            <h5 v-if="salad.ingredients"> Ingredients:</h5>
            <ul v-if="salad.ingredients">
                <li v-for="ingredient in salad.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
            <h5>Pris {{ salad.price }} kr</h5>
        </div>
    </div>

    <h3>Drycker</h3>
    <div class="product-container">
        <div class="item-container" v-for=" drink in drinks" :key="drink.id">
            <h4>{{ drink.id }}. {{ drink.name }}</h4>
            <img :src="drink.imgUrl" :alt="drink.name">
            <p>Beskrivning {{ drink.description }}</p>

            <h5 v-if="drink.toppings"> Toppings:</h5>
            <ul v-if="drink.toppings">
                <li v-for="topping in drink.toppings" :key="topping">{{ topping }}</li>
            </ul>

            <h5 v-if="drink.ingredients"> Ingredients:</h5>
            <ul v-if="drink.ingredients">
                <li v-for="ingredient in drink.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
            <h5>Pris {{ drink.price }} kr</h5>
        </div>
    </div>
</template>

<style>
.product-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 20px;
}

.item-container {
    border: 2px solid yellow;
    border-radius: 10px;
    margin-bottom: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.item-container img {
    width: 100%;
}

.item-container li {
    list-style-type: none;
}
</style>