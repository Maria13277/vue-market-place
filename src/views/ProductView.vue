<template>
    <ProductFull :productFull="product"/>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { IProduct } from 'src/interfaces/product';
import { useProductListStore } from '@/stores/productList';
export default defineComponent({
    name: 'ProductList',
    setup() {
        const productStore = useProductListStore()

        return { productStore }
    },
    created() {
        let productId = this.$route.params.id

        this.product = this.productStore.getProductById(productId as string)
    },
    data() {
        return {
            product: {} as IProduct
        }
    }
})
</script>