<script setup>
import { useFetchMenu } from '@/shared/useFetchMenu';
import { ref } from 'vue';

// hämta meny objektet från useFetchMenu()
const { menuItems, loading, error } = useFetchMenu();

// valt id, saknar initialt värde
const selectedId = ref(null);

// när användaren valt produkt ändras selectedID till den valda produktens id, skicka med detta till kundvagnen
function selectItem(id) {
    selectedId.value = id;
    console.log('Valt id:', id)
}
</script>

<template>
<div v-for="item in menuItems" :key="item.id">
<p>{{ item.name }}</p>
</div>
</template>

<style scoped>
</style>