import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'listarPromocion',  
    component: () => import(/* webpackChunkName: "listarPromocion" */ '../views/promocion/Listar.vue')
  },
  {
    path: '/crear',
    name: 'crearPromocion',  
    component: () => import(/* webpackChunkName: "crearPromocion" */ '../views/promocion/Crear.vue')
  },
  {
    path: '/canjear',
    name: 'canjearPromocion',  
    component: () => import(/* webpackChunkName: "canjearPromocion" */ '../views/promocion/Canjear.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
