<template>
    <div class="wrapper">
        <Header />
        <Main :product-full="productFull" />
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IProductFull } from './interfaces/product';

export default defineComponent({
    data() {
        return {
            productFull: {} as IProductFull,
        }
    },
    mounted() {
        this.productFull = this.getProductFull()

    },
    methods: {
        getProductFull(): IProductFull {
            return {
                id: 33,
                name: 'one',
                priceNew: 2300,
                priceOld: 2100,
                inStock: 10
            }
        },
    }
})
</script>

<style lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>
