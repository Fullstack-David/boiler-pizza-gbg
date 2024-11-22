import { ref, onMounted } from 'vue'
import axios from 'axios'
import dotenv from 'dotenv'


export function useFetchMenu() {
  // dotenv.config();
  const menuItems = ref([])
  const loading = ref(false)
  const error = ref(null)
  const apiKey = /* process.env.API_KEY_PIZZA_MENU || */ 'sp-B2mWxADrthdHqd22' // backup om inte .env filen fungerar/finns

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
      menuItems.value = await response.json()
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