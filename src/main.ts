import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import App from './App.vue'
import Router from './router'

import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'

import Category from '@/components/category/Category.vue'
import CategoryList from '@/components/category/List.vue'

import Product from '@/components/product/Product.vue'
import ProductList from '@/components/product/List.vue'
import ProductFull from '@/components/product/ProductFull.vue'

import MyButton from '@/components/ui/MyButton.vue'

import Basket from '@/components/basket/Basket.vue'
import BasketItem from '@/components/basket/BasketItem.vue'

import Count from '@/components/ui/Count.vue'
import Clear from '@/components/ui/Clear.vue'
import SignIn from '@/components/SignIn.vue'

import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel'
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row';     

import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

import './assets/styles/main.scss'

const app = createApp(App)


app.component('ToastPrime', Toast)
app.component('ToastServicePrime', ToastService)

app.component('DataTablePrime', DataTable)
app.component('ColumnPrime', Column)
app.component('ColumnGroupPrime', ColumnGroup)
app.component('RowPrime', Row)

app.component('ButtonPrime', Button)
app.component('OverlayPanelPrime', OverlayPanel)
app.component('InputNumberPrime', InputNumber)
app.component('InputTextPrime', InputText)

app.component('Header', Header)
app.component('Main', Main)
app.component('Footer', Footer)

app.component('CategoryItem', Category)
app.component('CategoriesList',CategoryList)

app.component('Product', Product)
app.component('ProductList', ProductList)
app.component('ProductFull', ProductFull)

app.component('MyButton', MyButton)

app.component('Basket', Basket)
app.component('BasketItem', BasketItem)

app.component('Count', Count)
app.component('Clear', Clear)
app.component('SignIn', SignIn)

app.use(ToastService);
app.use(PrimeVue);
app.use(createPinia())
app.use(Router)
app.mount('#app')
