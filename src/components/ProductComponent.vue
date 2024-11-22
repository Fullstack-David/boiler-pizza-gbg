<script setup>
import {useFetchMenu} from '../shared/useFetchMenu.js'
import {useImageFix} from '../shared/useImageFix.js'
const { menuItems, loading, error } = useFetchMenu();
// const { fixedMenu } = useImageFix(menuItems) 

</script>


<template>
    <div class="product-container" >
       <div class="item-container" v-for=" menuItem in menuItems" :key="menuItem.id">
            <h2>{{ menuItem.id }}. {{ menuItem.name }}</h2>
            <img :src="menuItem.imgUrl" :alt="menuItem.name">
            <p>Beskrivning {{ menuItem.description }}</p>

            <h4 v-if="menuItem.toppings"> Toppings:</h4>
            <ul v-if="menuItem.toppings">
                <li v-for="topping in menuItem.toppings" :key="topping">{{ topping }}</li>
            </ul>

            <h5 v-if="menuItem.ingredients"> Ingredients:</h5>
            <ul v-if="menuItem.ingredients">
                <li v-for="ingredient in menuItem.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>

            <h4>Pris {{ menuItem.price }} kr</h4>
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
    
.item-container{
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