<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-green text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawerOpen = !drawerOpen" />
        
        <q-avatar square size="35px" class="q-ml-sm q-mr-sm">
          <img src="https://virtual.fundetec.edu.co/wp-content/uploads/2024/09/las-mejores-carreras-tecnicas-en-el-sena.png" alt="Logo SENA">
        </q-avatar>
        <q-toolbar-title>Servicios Institucionales - SENA</q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" side="left" bordered class="bg-grey-2 q-pa-md">
      <!-- Imagen decorativa en la parte superior del menú -->
      <div class="q-mb-md text-center">
        <q-img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ufwLBCHEHnVWpcwP-JKO8pRXrq_pcWXoAF0ZTOlipjc2vTeCswcBVLlK&s=10" 
          style="height: 120px; border-radius: 8px;" 
          fit="cover"
        />
      </div>

      <div class="text-h6 q-mb-md text-weight-bold text-grey-9">Navegación</div>
      
      <q-list padding class="q-gutter-y-sm">
        <!-- Botón de Inicio (Home) añadido -->
        <q-item 
          clickable 
          v-ripple 
          to="/" 
          exact
          class="bg-white shadow-1 rounded-borders menu-item-custom"
          active-class="bg-green-2 text-green-9 text-weight-bold"
        >
          <q-item-section avatar>
            <q-icon name="home" color="primary" />
          </q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-item 
          clickable 
          v-ripple 
          to="/enfermeria" 
          class="bg-white shadow-1 rounded-borders menu-item-custom"
          active-class="bg-green-2 text-green-9 text-weight-bold"
        >
          <q-item-section>Enfermería</q-item-section>
        </q-item>

        <q-item 
          clickable 
          v-ripple 
          to="/bienestar" 
          class="bg-white shadow-1 rounded-borders menu-item-custom"
          active-class="bg-green-2 text-green-9 text-weight-bold"
        >
          <q-item-section>Bienestar al Aprendiz</q-item-section>
        </q-item>

        <q-item 
          clickable 
          v-ripple 
          to="/biblioteca" 
          class="bg-white shadow-1 rounded-borders menu-item-custom"
          active-class="bg-green-2 text-green-9 text-weight-bold"
        >
          <q-item-section>Biblioteca</q-item-section>
        </q-item>

        <q-item 
          clickable 
          v-ripple 
          to="/cafeteria" 
          class="bg-white shadow-1 rounded-borders menu-item-custom"
          active-class="bg-green-2 text-green-9 text-weight-bold"
        >
          <q-item-section>Cafetería</q-item-section>
        </q-item>

        <q-item 
          clickable 
          v-ripple 
          to="/coordinacion" 
          class="bg-white shadow-1 rounded-borders menu-item-custom"
          active-class="bg-green-2 text-green-9 text-weight-bold"
        >
          <q-item-section>Coordinación Académica</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const drawerOpen = ref(true)
</script>

<style>
/* Efecto hover: se pone verde claro al pasar el cursor */
.menu-item-custom:hover {
  background-color: #e8f5e9 !important;
  transition: background-color 0.3s ease;
}
</style>