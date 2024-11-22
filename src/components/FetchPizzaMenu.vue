<script setup>
import { useFetchMenu } from '../shared/useFetchMenu.js';
const { menuItems, loading, error } = useFetchMenu()
console.log('menuItems', menuItems)
</script>

<template>
    <div class="menu-container">
      <!-- Visa laddningsindikator -->
      <div v-if="loading" class="loading">
        Laddar meny...
      </div>
  
      <!-- Visa felmeddelande om något gick fel -->
      <div v-else-if="error" class="error">
        {{ error }}
      </div>
  
      <!-- Visa menyn när den är laddad -->
      <div v-else class="menu-grid">
        <div v-for="item in menuItems" 
             :key="item.id" 
             class="menu-item">
          <img :src="item.imgUrl" 
               :alt="item.name" 
               class="menu-item-image">
          
          <div class="menu-item-content">
            <h3>{{ item.name }}</h3>
            <p class="description">{{ item.description }}</p>
            <p class="price">{{ item.price }} kr</p>
            
            <div class="toppings">
              <span v-for="topping in item.toppings" 
                    :key="topping" 
                    class="topping-tag">
                {{ topping }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .menu-container {
    padding: 1rem;
  }
  
  .loading, .error {
    text-align: center;
    padding: 2rem;
  }
  
  .error {
    color: red;
  }
  
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .menu-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s;
  }
  
  .menu-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .menu-item-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .menu-item-content {
    padding: 1rem;
  }
  
  .description {
    color: #666;
    margin: 0.5rem 0;
  }
  
  .price {
    font-weight: bold;
    color: #2c3e50;
    margin: 0.5rem 0;
  }
  
  .toppings {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .topping-tag {
    background-color: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
  </style>
