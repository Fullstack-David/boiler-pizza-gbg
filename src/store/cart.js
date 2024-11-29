import { reactive } from 'vue'

export const store = reactive({
    cart:[],
    
    addToCart(item) {
        this.cart.push(item)
    }
})
