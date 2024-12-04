<template>
    <div class="dashboard-container">
      <header class="dashboard-header">
        <h1>Mi Dashboard</h1>
        <nav>
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/settings">Configuración</router-link></li>
            <li><router-link to="/reports">Reportes</router-link></li>
          </ul>
        </nav>
      </header>
  
      <main class="dashboard-main">
        <router-view />
      </main>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  /* ... Estilos del componente (ya definidos anteriormente) ... */
  </style>