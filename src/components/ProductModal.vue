<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: Object,
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');  
};
</script>

<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h2>{{ item.name }}</h2>
      <img :src="item.imgUrl" :alt="item.name" />
      <p><strong>Beskrivning:</strong> {{ item.description }}</p>

      <div v-if="item.ingredients">
        <h3>Ingredienser:</h3>
        <ul>
          <li v-for="ingredient in item.ingredients" :key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
      </div>

      <div v-if="item.allergens">
        <h3>Allergener:</h3>
        <ul>
          <li v-for="allergen in item.allergens" :key="allergen">
            {{ allergen }}
          </li>
        </ul>
      </div>

      <p><strong>Pris:</strong> {{ item.price }} kr</p>
      <button @click="closeModal">Stäng</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
