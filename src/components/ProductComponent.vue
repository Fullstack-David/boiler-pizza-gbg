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

<script>
export default {
    data() {
        return {
           menuItems: [{
                'id': 1,
                'type': 'pizza',
                'name': 'margarita',
                'imgUrl': '',
                'description': 'anlbabglabjfgbaljf',
                'price': 120,
                'toppings': ['mozzarella', 'ost', 'champinjoner']
            }, 
        {
                "id": 20,
                "type": "salad",
                "name": "Italian salad",
                "imgUrl": "https://link.to.asset.jpg/",
                "description": "Salad ipsum dolor amet platter mayo pesto, bacon & tomato...",
                "price": 129,
                "ingredients": ["sliced cucumbers", "tomatoes", "green bell pepper", "red onion"]
            }]
        }
    }
}
</script>

<style>
.product-container {
    background-color: blue;
}
    
.item-container{
    border: 2px solid yellow;
    border-radius: 10px;
    margin: 8px 0px;
    padding: 15px;
}
</style>