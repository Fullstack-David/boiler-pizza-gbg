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
    <div class="product-container">
      <div class="item-container" v-for="item in list" :key="item.id">
        <div class="clickable-container" @click="openModal(item)">
          <h4>{{ item.id }}. {{ item.name }}</h4>
          <div class="image-wrapper">
            <img class="product-img" :src="item.imgUrl" :alt="item.name" />
            <p v-if="item.toppings" class="topping-name">{{ item.toppings.join(', ') }}</p>
            <p v-if="item.ingredients" class="topping-name">{{ item.ingredients.join(', ') }}</p>
          </div>
        </div>
        <div class="card-footer">
          <h5>{{ item.price }}:-</h5>
          <img @click="store.addToCart(item)" class="add-to-cart-img" src="../assets/add-to-cart.png" alt="add-to-cart">
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.clickable-contatiner{
  display: flex;
  flex-direction: column;
}

.image-wrapper{
  display: flex;
}

.item-container {
  padding: .5rem;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.product-img {
  width: 5vh;
  height: 5vh;
  border-radius: 10px;
  margin: 2%;
}

.card-footer{
  display: flex;
  flex-direction: column;
}

.add-to-cart-img {
  width: 2rem;
  transition: transform 0.3s ease;
}

.add-to-cart-img:hover {
  transform: scale(1.2) rotate(10deg);
  cursor: pointer;
}
</style>
