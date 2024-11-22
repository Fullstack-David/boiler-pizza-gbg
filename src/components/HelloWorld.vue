<script setup>
import { useImageFix } from '../shared/useImageFix.js'

const menu = [
    {
      "id": 1,
      "type": "pizza",
      "name": "Romana",
      "imgUrl": "https://link.to.asset.jpg/",
      "description": "Pizza ipsum dolor amet platter mayo pesto, thin crust bianca bacon & tomato...",
      "price": 129,
      "toppings": [
        "mozarella",
        "parmaskinka",
        "oliver"
      ]
    },
    {
      "id": 20,
      "type": "salad",
      "name": "Italian salad",
      "imgUrl": "no-image",
      "description": "Salad ipsum dolor amet platter mayo pesto, bacon & tomato...",
      "price": 129,
      "ingredients": [
        "sliced cucumbers",
        "tomatoes",
        "green bell pepper",
        "red onion"
      ]
    },
  ]

  const { fixedMenu } = useImageFix(menu)
</script>


<template>

</template>


<style>

</style>