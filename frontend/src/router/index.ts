import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmailPage from '../views/EmailPage.vue'
import CustomersPage from '../views/CustomersPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import FulfillmentPage from '../views/FulfillmentPage.vue'
import InvoicePage from '../views/InvoicePage.vue'

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
      path: '/customers',
      name: 'customers',
      component: CustomersPage
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
