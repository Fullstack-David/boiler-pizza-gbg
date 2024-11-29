import { ref, onMounted } from "vue";

export function useOrderHistory() {
  const orderItems = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/orders",
        {
          headers: {
            "x-zocom": apiKey,
            "Content-Type": "application/json",
          },
          Body: {
            customerTel: "string", // kundens telefonnummer
          },
        }
      );
      const data = await response.json();
      console.log(data);
      orderItems.value = await data.orders;
      console.log(data.orders);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchOrders();
  });
  return {
    orderItems,
    loading,
    error,
  };
}
