import { createRouter, createWebHistory } from 'vue-router'
import EmailPage from '../views/EmailPage.vue'
import FulfillmentPage from '../views/FulfillmentPage.vue'
import HomeView from '../views/HomeView.vue'
import InvoicePage from '../views/InvoicePage.vue'
import ProductPage from '../views/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/email',
      name: 'email',
      component: EmailPage
    },
    {
      path: '/products',
      name: 'products',
      component: ProductPage
    },
    {
      path: '/fulfillment',
      name: 'fulfillment',
      component: FulfillmentPage
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: InvoicePage
    }
  ]
})

export default router
