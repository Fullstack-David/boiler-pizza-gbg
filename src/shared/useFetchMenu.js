import { ref, onMounted } from "vue";
import { useImageFix } from "./useImageFix";

export function useFetchMenu() {
  const menuItems = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchMenu = async () => {
    loading.value = true;
    error.value = null;

    try {
      /////////////////////////////////////////////////////
      // Varför hämtar vi från en lokal fil när vi har tillgång till API:et?

      // Fetcha locala menuData.json fil från public mappen
      const response = await fetch("/menuData.json");
      /////////////////////////////////////////////////////

      const data = await response.json();
      menuItems.value = data.items;
      menuItems.value = useImageFix(menuItems.value);
    } catch (err) {
      error.value = "Ett fel uppstod vid hämtning av menyn..";
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
