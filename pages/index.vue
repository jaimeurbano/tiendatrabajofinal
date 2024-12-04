<template>
    <div>
      <h2>Página de Inicio</h2>
      <p>Aquí iría el contenido de la página de inicio.</p>
      <p>Contador : {{ this.$store.state.count }} </p>
      <NuxtLink 
        to="/dashboard/">
        <v-btn append-icon="$vuetify" variant="outlined">
          Continuar
        </v-btn>
      </NuxtLink>
      
    </div>
  </template>
  
  <script>
export default {
  computed: {
    counter() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}

</script>