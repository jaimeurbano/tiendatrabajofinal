// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Define tu estado inicial aquí
    
      comprasrealizadas : [],

      productos : [
        {
            imagen : 'https://http2.mlstatic.com/D_Q_NP_2X_867088-MLU77514228492_072024-P.webp',
            precio :  1387900,
            titulo : 'Xiaomi POCO Poco X6 Pro 5G',
            descripcion : 'Dual SIM 512 GB amarillo 12 GB RAM',
            id : 1
        },
        {
          imagen : 'https://http2.mlstatic.com/D_Q_NP_2X_714263-MLA75293844241_032024-P.webp',
          precio : 998900,
          titulo : 'Samsung Galaxy A35 5G 5G',
          descripcion : 'Dual SIM 256 GB rosa 8 GB RAM',
          id : 2

       },
       {
        imagen : 'https://http2.mlstatic.com/D_NQ_NP_2X_792546-MLA74179807568_012024-F.webp',
        precio : 643900,
        titulo : 'Xiaomi Redmi Note 13 4G',
        descripcion : 'Dual SIM 256 GB verde 8 GB RAM',
        id : 3

     } ,
     {
        imagen : 'https://http2.mlstatic.com/D_Q_NP_2X_617818-MCO53298443953_012023-P.webp',
        precio : 1844918,
        titulo : 'Celular iPhone 11 Pro',
        descripcion : '256gb - Garantía 14 Meses (Reacondicionado)',
        id : 4

     } 
    
       
      
      ]

    };
  },
  mutations: {
    incrementarCantidad(state, id) {
        const index = state.comprasrealizadas.findIndex(item => item.id === id);
        if (index !== -1) {
            state.comprasrealizadas[index].cantidad += 1;
        }
    },
    decrementarCantidad(state, id) {
        const index = state.comprasrealizadas.findIndex(item => item.id === id);
        if (index !== -1 && state.comprasrealizadas[index].cantidad > 1) {
            state.comprasrealizadas[index].cantidad -= 1;
        }
    },
    agregarcompra(state, producto) {
        state.comprasrealizadas.push(producto);
    }
},
actions: {
    incrementarCantidad({ commit }, id) {
        commit('incrementarCantidad', id);
    },
    decrementarCantidad({ commit }, id) {
        commit('decrementarCantidad', id);
    },
    agregarcompra({ commit }, producto) {
        commit('agregarcompra', producto);
    }
},

  
  getters: {
    totalCompras: (state) => {
      return state.comprasrealizadas.reduce((total, item) => total + item.cantidad * item.precio, 0);
    },
    count: (state) => state.count,
    productos: (state) => state.productos,
    compras: (state) => {
      const cantidad = state.comprasrealizadas.reduce((accumulator, objeto) => {
        return accumulator + objeto.cantidad;
      }, 0); 
      return cantidad
    },
    procomprados: (state) => state.comprasrealizadas,

    getProductoById: (state) => (id) => {
        return state.comprasrealizadas.findIndex(pro => pro.id === id);
    }

  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
  return {
    provide: {
      store: store
    }
  }
})

