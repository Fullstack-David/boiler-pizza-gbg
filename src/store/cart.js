import { computed, reactive } from 'vue';


export const store = reactive({
    cart:[],
    sumOfCart: computed(() => {
        return store.cart.reduce((total, item) => total + item.price, 0);
    }),

    addToCart(item) {
        this.cart.push(item)
    },
    removeFromCart(id) {
        const index = this.cart.findIndex(item => item.id === id);
        if (index !== -1) {
            this.cart.splice(index, 1);
        }
    }
})
