<template>
    <button @click="operacion == 1 ? aumentar() : disminuir()">
        <slot name="simbolo"> + </slot>
    </button>
</template>

<script>
export default {
    props: {
        operacion: {
            type: Number,
            default: 1 // 1 para aumentar, -1 para disminuir
        },
        id: {
            type: Number
        }
    },
    methods: {
        aumentar() {
            this.$emit('cambiarCantidad', { id: this.id, cambio: 1 });
        },
        disminuir() {
            this.$emit('cambiarCantidad', { id: this.id, cambio: -1 });
        }
    }
}
</script>
