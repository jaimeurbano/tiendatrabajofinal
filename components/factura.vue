<template>
    <v-dialog v-model="mostrar" width="auto" persistent>
      <v-card max-width="900" prepend-icon="mdi-update" class="factura-card">
        <div class="factura-header">
          <h2 class="factura-titulo">Factura de Compra</h2>
          <div class="factura-info">
            <p>Fecha: {{ fechaActual }}</p>
            <p>No. Factura: #{{ numeroFactura }}</p>
          </div>
        </div>

        <v-card-text class="pa-4">
          <v-data-table
            :headers="titulos"
            :items="productos"
            density="comfortable"
            class="factura-tabla"
          >
            <!-- Slot para la columna de cantidad -->
            <template v-slot:item.cantidad="{ item }">
              <div class="cantidad-control">
                <controlcalidad :id="item.id" :operacion="1" @cambiarCantidad="cambiarCantidad" />
                <span class="cantidad-valor">{{ item.cantidad }}</span>
                <controlcalidad :id="item.id" :operacion="-1" @cambiarCantidad="cambiarCantidad">
                  <template v-slot:simbolo>-</template>
                </controlcalidad>
              </div>
            </template>
  
            <!-- Slot para la columna de precio -->
            <template v-slot:item.precio="{ item }">
              <div class="precio-celda">{{ calcularPrecio(item) | currency }}</div>
            </template>
  
            <!-- Slot para la columna de imagen -->
            <template v-slot:item.imagen="{ item }">
              <v-img
                :src="item.imagen"
                max-height="80"
                max-width="80"
                alt="Imagen del producto"
                class="producto-imagen"
              ></v-img>
            </template>
  
            <!-- Slot para el pie de tabla -->
            <template v-slot:body.append>
              <tr class="factura-totales">
                <td colspan="4" class="text-end subtotal-row">
                  <div class="totales-desglose">
                    <div class="desglose-item">
                      <span>Subtotal:</span>
                      <span>{{ subtotal | currency }}</span>
                    </div>
                    <div class="desglose-item">
                      <span>IVA (14%):</span>
                      <span>{{ iva | currency }}</span>
                    </div>
                    <div class="desglose-item total">
                      <span><strong>Total:</strong></span>
                      <span><strong>{{ total | currency }}</strong></span>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>

        <v-divider></v-divider>

        <div class="factura-footer">
          <div class="terminos">
            <p>Términos y condiciones:</p>
            <small>Esta factura es un comprobante de compra válido.</small>
          </div>
          <v-btn 
            class="cerrar-btn" 
            color="primary" 
            @click="cerrar()"
            elevation="2"
          >
            Cerrar
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import controlcalidad from './controlcantidad.vue';
  
  export default {
    components: { controlcalidad },
    props: {
      show: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        mostrar: false,
        numeroFactura: Math.floor(Math.random() * 100000),
        titulos: [
          { 
            title: 'Producto',
            align: 'start',
            key: 'titulo',
            width: '25%'
          },
          { 
            title: 'Descripción',
            align: 'start',
            key: 'descripcion',
            width: '30%'
          },
          { 
            title: 'Cantidad',
            align: 'center',
            key: 'cantidad',
            width: '15%'
          },
          { 
            title: 'Precio',
            align: 'end',
            key: 'precio',
            width: '15%'
          },
          { 
            title: 'Imagen',
            align: 'center',
            key: 'imagen',
            width: '15%'
          },
        ],
      };
    },
    computed: {
      fechaActual() {
        return new Date().toLocaleDateString();
      },
      productos() {
        return this.$store.getters.procomprados;
      },
      subtotal() {
        return this.productos.reduce((acc, item) => acc + this.calcularPrecio(item), 0);
      },
      iva() {
        return this.subtotal * 0.16;
      },
      total() {
        return this.subtotal + this.iva;
      },
    },
    methods: {
      cerrar() {
        this.$emit('cerrar');
      },
      cambiarCantidad({ id, cambio }) {
        if (cambio === 1) {
          this.$store.dispatch('incrementarCantidad', id);
        } else {
          this.$store.dispatch('decrementarCantidad', id);
        }
      },
      calcularPrecio(item) {
        return item.cantidad * item.precio;
      },
    },
    watch: {
      show(val) {
        this.mostrar = val;
      },
    },
    filters: {
      currency(value) {
        return `$${value.toFixed(2)}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .factura-card {
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    margin: 20px;
  }

  .factura-header {
    background-color: #f8f9fa;
    padding: 20px 24px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 2px solid #e9ecef;
  }

  .factura-titulo {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
  }

  .factura-info {
    display: flex;
    justify-content: space-between;
    color: #6c757d;
    font-size: 0.9rem;
  }

  .factura-tabla {
    margin-top: 20px;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    overflow: hidden;
  }

  .factura-tabla :deep(th) {
    background-color: #f8f9fa !important;
    color: #495057 !important;
    font-weight: 600 !important;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }

  .factura-tabla :deep(td) {
    padding: 12px 16px !important;
    color: #495057;
  }

  .cantidad-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .cantidad-valor {
    min-width: 30px;
    text-align: center;
    font-weight: 500;
  }

  .precio-celda {
    font-weight: 500;
    color: #2c3e50;
  }

  .producto-imagen {
    border-radius: 8px;
    border: 1px solid #e9ecef;
    overflow: hidden;
    margin: 0 auto;
  }

  .factura-totales {
    background-color: #f8f9fa;
  }

  .totales-desglose {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .desglose-item {
    display: flex;
    justify-content: space-between;
    color: #6c757d;
  }

  .desglose-item.total {
    color: #2c3e50;
    font-size: 1.1rem;
    padding-top: 8px;
    border-top: 2px solid #e9ecef;
    margin-top: 8px;
  }

  .factura-footer {
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa;
  }

  .terminos {
    color: #6c757d;
    font-size: 0.9rem;
  }

  .terminos small {
    display: block;
    margin-top: 4px;
    color: #adb5bd;
  }

  .cerrar-btn {
    text-transform: none;
    font-weight: 500;
    padding: 0 24px;
  }

  @media print {
    .cerrar-btn {
      display: none;
    }
  }
  </style>
  
  
  
 
  