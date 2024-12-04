<template>
    <div class="mt-5">
        <v-row>
            <v-col v-for="data in this.$store.getters.productos" :key="data.url" cols="3">
               <producto
                 :info="data"
                 @compra="compra"
               >
             </producto>
            </v-col>
        </v-row>

  
    </div>
</template>
<script>
import producto from './producto.vue'

export default {
  components: { producto },
  
    methods: {
      compra(data){
           this.$emit('compra',data)
      }  
    },
}
</script>