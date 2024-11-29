<script setup>
import { store } from '@/store/cart';
import { ref } from 'vue';

const items = ref(store.cart)
console.log(items)
</script>

<template>
    <section>
        <h2>Your Order</h2>
        <ul>
            <li v-for="item in items" :key="item.id">
                <h3>{{ item.name }}</h3>
                <p>{{ item.price }}:-</p>
            </li>
        </ul>
        <p>Total:</p>
        <button @click="sendOrder">Comfirm Order</button>
    </section>
</template>

<style scoped></style>