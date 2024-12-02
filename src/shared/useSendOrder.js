import { ref } from 'vue';

export function sendOrder() {
    const orderConfirmation = ref({})
    const orderConfirmed = ref(false)

    const postOrder = async (cartItems) => {
        if (cartItems.length === 0) {
            console.warn("Ingen order att skicka.");
            return;
        }

        orderConfirmation.value = {};
        orderConfirmed.value = false;
        const allIds = cartItems.map(item => item.id);

        try {
            const response = await fetch("https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/orders", {
                method: 'POST',
                headers: {
                    'x-zocom': import.meta.env.VITE_API_KEY,
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

            //////////////////////////////////////////////
            // Vad är det tanken att detta ska åstadkomma?
            cartItems.length = 0;
            console.log('Order skickad!');
            //////////////////////////////////////////////

            orderConfirmation.value = responseData.order
            orderConfirmed.value = true

        } catch (err) {
            console.error(err);
        }
    }

    return {orderConfirmation, orderConfirmed, postOrder};
}