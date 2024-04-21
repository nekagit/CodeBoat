import { createRouter, createWebHistory } from 'vue-router'
import CustomerPage from '../views/Shop/CustomerPage.vue'
import SOPSportView from '../views/SOP/SOPSportView.vue'
import InvoicePage from '../views/Shop/InvoicePage.vue'
import InvoiceLinePage from '../views/Shop/InvoiceLinePage.vue'
import ProductPage from '../views/Shop/ProductPage.vue'
// import AhmedShop from '../views/AhmedShop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SOPSportView 
    },
    //   {
    //   path: '/shop',
    //   name: 'shop',
    //   component: AhmedShop
    // },
    // {
    //   path: '/email',
    //   name: 'email',
    //   component: EmailPage
    // },
    {
      path: '/products',
      name: 'products',
      component: ProductPage
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomerPage
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: InvoicePage
    },
    {
      path: '/invoiceLines',
      name: 'invoiceLines',
      component: InvoiceLinePage
    }
  ]
})

export default router
