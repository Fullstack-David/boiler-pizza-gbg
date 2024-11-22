import { ref, onMounted } from 'vue'

export function useFetchMenu() {
  const menuItems = ref([])
  const loading = ref(false)
  const error = ref(null)
  const apiKey = import.meta.env.API_KEY_PIZZA_MENU  // backup om inte .env filen fungerar/finns

  const fetchMenu = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(
        "https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu",
        {
          headers: {
            "x-zocom": apiKey,
          },
        }
      );
      const data = await response.json()
      menuItems.value = await data.items
    } catch (err) {
      error.value = err ? err.message : 'Ett fel uppstod vid hämtning av menyn'
      console.error('Fel vid hämtning av meny: ', err)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchMenu()
  })

  return {
    menuItems,
    loading,
    error,
    fetchMenu
  }
}