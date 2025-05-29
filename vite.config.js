import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// https://vite.dev/config/
export default defineConfig({
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      icon: faCoffee
    }
  },
  plugins: [vue(),tailwindcss(),],
})
