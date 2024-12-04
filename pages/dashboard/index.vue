<template>
    <div>
      <NuxtLayout :articulos="comprasrealizadas">
        <manager
          @compra="compra">
        </manager>
      </NuxtLayout> 
    </div>
</template>
<script>


export default {
   layout: 'default', 
 
    data() {
        return {
         
         
                    
           
        }
    },
   
    methods: {
      compra(data){
         this.comprasrealizadas.push(data)
        
      }
    },
}
</script>