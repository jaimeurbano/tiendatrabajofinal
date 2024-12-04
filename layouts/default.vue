<template>
  <v-layout class="rounded rounded-md">
   <cabezote
    :productos="articulos"
   ></cabezote>
  
    <v-navigation-drawer>
    
      <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
     
      <slot 
      /> 
    </v-main>
  </v-layout>
</template>
<script>
 
export default {
  props: {
    articulos: {
      type: Array,
      required: true,
     
    },
  },
  
}

</script>
