import { ref, onMounted } from "vue";
import { useImageFix } from "./useImageFix";

export function useFetchMenu() {
  const menuItems = ref([]);
  const loading = ref(false);
  const error = ref(null);
  // const apiKey = import.meta.env.API_KEY_PIZZA_MENU; // backup om inte .env filen fungerar/finns

  const fetchMenu = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(
        "https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu",
        {
          headers: {
            // "x-zocom": apiKey
            "x-zocom": "sp-435y45y3kle",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      menuItems.value = await data.items;
      menuItems.value = useImageFix(menuItems.value);
    } catch (err) {
      error.value = err.message = "Ett fel uppstod vid hämtning av menyn..";
      console.error("Error: ", err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchMenu();
  });

  return {
    menuItems,
    loading,
    error,
  };
}
