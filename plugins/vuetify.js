import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // Importar estilos de Vuetify

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi', // Usar MDI como iconfont
      },
  })

  nuxtApp.vueApp.use(vuetify)
})