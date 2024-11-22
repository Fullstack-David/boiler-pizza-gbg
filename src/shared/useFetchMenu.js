import { ref, onMounted } from 'vue'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

export function useFetchMenu() {
  const menuItems = ref([])
  const loading = ref(false)
  const error = ref(null)
  const apiKey = process.env.API_KEY_PIZZA_MENU || 'sp-B2mWxADrthdHqd22' // backup om inte .env filen fungerar/finns

  const fetchMenu = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await axios.get('http://slajs-assets.s3-website.eu-north-1.amazonaws.com/menu/',
        {
          headers: {
            "x-zocom": apiKey
          }
        }
      )
      menuItems.value = response.data
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