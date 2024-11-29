import { ref } from 'vue';

// Skicka beställning till API 
export async function sendOrder() {

    const orderConfirmation = ref({})

    const postOrder = async (cartItems) => {
         orderConfirmation.value = {}

         if (cartItems.length === 0) {
             console.warn("Ingen order att skicka.");
             return;
         }

         const allIds = cartItems.map(item => item.id);

         const apiUrl = "https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/orders";
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'x-zocom': import.meta.env.VITE_API_KEY_PIZZA_MENU,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: allIds,
                    customerTel: '0761234567'
                }),
            });

            const responseData = await response.json();
            console.log('API RESPONSE:', responseData);

            if (!response.ok) throw new Error('Kunde inte skicka beställningen');

            cartItems.length = 0;
            console.log('Order skickad!');

            orderConfirmation.value = responseData.order

        } catch (err) {
            console.error(err);
        }
    } 

    return {orderConfirmation, postOrder};
}