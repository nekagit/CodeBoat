import { createRouter, createWebHistory } from 'vue-router'
import CustomerPage from '../views/CustomerPage.vue'
import HomeView from '../views/HomeView.vue'
import InvoicePage from '../views/InvoicePage.vue'
import InvoiceLinePage from '../views/InvoiceLinePage.vue'
import ProductPage from '../views/ProductPage.vue'
// import AhmedShop from '../views/AhmedShop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
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
