<template>
    <div>
     <h1>{{titulo}}</h1>
     <img  :style="{ width : ancho + 'px', height : alto + 'px' }"
     :src="img">
    </div>
</template>
<script>
export default {
    props: {
        titulo : String,
        img: String,
        ancho:Number,
        alto:Number
   
  }
}
</script>