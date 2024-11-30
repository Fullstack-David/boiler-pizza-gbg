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
        <img :src="item.imgUrl" :alt="item.name" />
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

<style scoped>
.item-container {
  cursor: pointer;
  transition: transform 0.2s;
}

.item-container:hover {
  transform: scale(1.05);
}
</style>
