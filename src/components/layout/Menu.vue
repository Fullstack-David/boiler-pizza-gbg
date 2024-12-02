<script setup>
  import { ref } from 'vue';
  import { store } from "@/store/cart";
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
        >
      <div class="clickable-container"
        @click="openModal(item)"
        >
        <h4>{{ item.id }}. {{ item.name }}</h4>
        <div class="image-wrapper">
          <img :src="item.imgUrl" :alt="item.name" />
        </div>
        <p><strong>Beskrivning:</strong> {{ item.description }}</p>
      </div>
        <div class="card-footer">
          <h5>Pris: {{ item.price }} kr</h5>
          <img @click="store.addToCart(item)" class="add-to-cart-img" src="../../assets/add-to-cart.png" alt="add-to-cart">
        </div>
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

.card-footer{
  display: flex;
  justify-content: center;
}

.add-to-cart-img {
  z-index: 1;
  width: 2rem;
  transition: transform 0.3s ease;
}

.add-to-cart-img:hover {
  transform: scale(1.2) rotate(10deg);
  cursor: pointer;
}
</style>
