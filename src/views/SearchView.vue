<template>
    <ProductList :productsBy="this.productStore.$state.resultSearh"/>
</template>

 
<script lang="ts">
import { IProduct } from 'src/interfaces/product';
import { defineComponent, PropType } from 'vue';
import { useProductListStore } from '@/stores/productList';

export default defineComponent({
    setup() {
        const productStore = useProductListStore();
        return { productStore };
    },
    props: {
        products: {
           type: Array as PropType <Array<IProduct>>,
           default: () => ([])
       },
       
    },
    methods: {
        search() {
           return this.productStore.getProductBySearchName() 
        }  
    }, 
    // computed: {
        
    // }
   
})
</script>