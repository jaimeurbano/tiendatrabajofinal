<template>
    <div>
        <v-badge color="error" :content="this.$store.getters.compras">
            <v-btn icon @click="detalle()">
                <v-icon>mdi-cart</v-icon>
              </v-btn>
          </v-badge>
       <factura 
        :show="show"
        @cerrar="cerrar"
      
       ></factura>
    </div>
</template>
<script>

export default {
    props: {
   
   
   },
    data() {
        return {
            show : false          
          }
    },
    methods : {
        detalle(){
            this.show = true
        },

        cerrar(){
            this.show = false
        }
    }
    
}
</script>