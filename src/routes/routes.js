// src/routes/routes.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Enfermeria from '../views/Enfermeria.vue'
import Bienestar from '../views/Bienestar.vue'
import Biblioteca from '../views/Biblioteca.vue'
import Cafeteria from '../views/Cafeteria.vue'
import Coordinacion from '../views/Coordinacion.vue'
// Si creas la vista Acerca, impórtala también:
// import Acerca from '../views/Acerca.vue'

const routes = [
  { path: '/', redirect: '/enfermeria' },
  { path: '/enfermeria', component: Enfermeria },
  { path: '/bienestar', component: Bienestar },
  { path: '/biblioteca', component: Biblioteca },
  { path: '/cafeteria', component: Cafeteria },
  { path: '/coordinacion', component: Coordinacion },
  // { path: '/acerca', component: Acerca }
]

export const router = createRouter({
  routes,
  history: createWebHashHistory()
})
