<template>
    <div class="product-list">
        <Product :product="product" v-for="product in getProducts" :key="product.id" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IProduct } from 'src/interfaces/product';
import { useProductListStore } from '@/stores/productList';
export default defineComponent({
    setup() {
        const productStore = useProductListStore()

        return { productStore }
    },
    props: {
        productsBy: {
        type: String,
        default: 'byCategory'
       }
    },
    computed: {
        getProducts() {
            debugger
            if (this.productsBy == this.productStore.$state.resultSearh) {
                return this.productStore.getProductBySearchName
                
            }

            if(this.productsBy == 'byCategory') {
                return this.productStore.getProductsByCategory
            }
            
        }
    },
})
</script>

<style>
.product-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

}

@media (max-width: 788px) {
    .product-list {
        padding-top: 80px;
    }
}
@media (max-width: 604px) {
    .product-list {
        padding-top: 100px;
    }
}
@media (max-width: 443px) {
    .product-list {
        padding-top: 130px;
    }
}
</style>
