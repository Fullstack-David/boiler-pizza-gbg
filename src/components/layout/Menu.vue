<template>
  <div class="item-category">
    <div class="product-container">
      <div 
        class="item-container" 
        v-for="item in list" 
        :key="item.id"
        @click="openModal(item)"
      >
        <h4>{{ item.id }}. {{ item.name }}</h4>
        <div class="image-wrapper">
          <img :src="item.imgUrl" :alt="item.name" />
        </div>
        <p><strong>Beskrivning:</strong> {{ item.description }}</p>
        <h5>Pris {{ item.price }} kr</h5>
      </div>
    </div>
  </div>
  
  <ProductModal 
    v-if="isModalOpen" 
    :item="selectedItem" 
    @close="closeModal"
  />
</template>

<script setup>
import { ref } from 'vue';
import ProductModal from './ProductModal.vue';

const props = defineProps({
  list: Array,
});

const selectedItem = ref(null);
const isModalOpen = ref(false);

const openModal = (item) => {
  selectedItem.value = item;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.item-container {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.item-container:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

h4 {
  margin: 10px 0;
  font-size: 1.25rem;
}

p {
  font-size: 0.9rem;
  color: #666;
}

h5 {
  margin-top: 10px;
  color: #333;
}
</style>
