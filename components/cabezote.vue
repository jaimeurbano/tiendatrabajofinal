<template>
    <div>
      <v-app-bar 
        image="https://i.pinimg.com/originals/bc/8b/be/bc8bbeaa5d0a69fec95e3857a57c3109.png"
        dark
        height="150"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title  
        ><h1>CELULARES</h1></v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <carrito class="mr-5"
         :productos="productos"
        >

        </carrito>
      </v-app-bar>
      
    </div>
  </template>
  <script>
  export default {
    props:{
      productos : Array,
    }
  }
  </script>
  <style scoped>
   
  </style>