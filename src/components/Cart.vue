<script setup>
import { store } from "@/store/cart";
import { sendOrder } from "../shared/useSendOrder";
import Order from "./Order.vue";
const { orderConfirmation, orderConfirmed, postOrder } = sendOrder();
</script>

<template>
  <div class="cart-container">
    <h2>Kundvagn</h2>
    <div class="cart-items" v-for="item in store.cart" :key="item.id">
      <div class="cart-item">
        <p class="item-name">{{ item.name }}</p>
        <p class="item-price">{{ item.price }} SEK</p>
        <button class="remove-btn" @click="store.removeFromCart(item.id)">
          Ta bort
        </button>
      </div>
    </div>

    <div class="total">
      <p class="total-price">Totalpris: {{ store.sumOfCart }} SEK</p>
      <button class="order-btn" @click="postOrder(store.cart)">
        Skicka in min beställning
      </button>
    </div>
    <div v-if="orderConfirmed">
      <Order :order="orderConfirmation" />
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
}

.cart-items {
  margin-bottom: 20px;
}

.cart-item {
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 1rem;
}

.item-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.item-price {
  font-size: 16px;
  color: #666;
}

.remove-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
}

.remove-btn:hover {
  background-color: #e53935;
}

.total {
  text-align: center;
  margin-top: 20px;
}

.total-price {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.order-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 10px;
}

.order-btn:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.order-btn:hover {
  background-color: #45a049;
}

.loading {
  text-align: center;
  color: #00796b;
}

.error-message {
  color: red;
  text-align: center;
}
</style>
