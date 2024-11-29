<script setup>
import { reactive, ref } from 'vue';
import { useFetchMenu } from '@/shared/useFetchMenu';

// hämta menuItems och tillgång till datan
const { menuItems, loading, error } = useFetchMenu();

const cartItems = reactive([]);

// Lägg till produkt till en kunds beställning
function addToCart(itemId) {
    const item = menuItems.value.find(item => item.id === itemId);
    if (item) {
        cartItems.push({ id: item.id, name: item.name, price: item.price });
    } else {
        console.warn(`Produkt med ID ${itemId} hittades inte`);
    }
}

// funktion för att ta bort en produkt från kunds aktuella beställning
function removeFromCart(itemId) {
    const index = cartItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
        cartItems.splice(index, 1);
    }
}

//HA KVAR
// Funktion för att summera totalpriset för kundvagnen (FÅ EN FÖRKLARING)
function sumOfCart() {
    return cartItems.reduce((total, item) => total + item.price, 0) || 0;
}

// Skicka beställning till API 
async function sendOrder() {
    if (cartItems.length === 0) {
        console.warn("Ingen order att skicka.");
        return;
    }

    const apiUrl = "https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/orders";
    const API_KEY_PIZZA_MENU = 'sp-B2mWxADrthdHqd22';

    loading.value = true;
    error.value = null;

    const orderItems = cartItems.map(item => ({
        item: item.id
    }));

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'x-zocom': API_KEY_PIZZA_MENU,
                'Content-Type': 'application/json',
             },
             body: JSON.stringify({orderItems}),
            });

            if (!response.ok) throw new Error('Kunde inte skicka beställningen');

        cartItems.length = 0;
        console.log('Order skickad!');
    } catch (err) {
        error.value = err.message;
        console.error(err);
    } finally {
        loading.value = false;
    }
}

// addCustomer('Nyat', 1, '6789998212');

</script>

<template>
<div class="cart-container">
    <h2>Kundvagn</h2>
    <div class="cart-items" v-for="item in cartItems" :key="item.id">
        <div class="cart-item">
    <p class="item-name">{{ item.name }} </p>
    <p class="item-price">{{ item.price }} SEK</p>
    <button class="remove-btn" @click="removeFromCart(item.id)">Ta bort</button>
    </div>
    </div>

    <div class="total">
    <p class="total-price">Totalpris: {{ sumOfCart() }} SEK</p>
    <button class="order-btn" :disabled="loading" @click="sendOrder">Skicka in min beställning</button>
    </div>

    <p v-if="loading" class="loading">Laddar...</p>
    <p v-if="error" class="error-message"> Fel: {{ error }}</p>
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
