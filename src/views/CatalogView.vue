 <template>
    <CategoriesList :categories="category"/>
    <ProductList :products="products" />
 </template>

 <script lang="ts">
 import { ICategory } from 'src/interfaces';
 import { IProduct } from 'src/interfaces/product';
 import { defineComponent, PropType } from 'vue';

 export default defineComponent({
    props: {
        products: {
            type: Array as PropType <Array<IProduct>>,
            default: () => ([])
        },
        category: {
            type: Array as PropType<Array<ICategory>>,
            default: () => ([])
        }
    },
})
</script>
