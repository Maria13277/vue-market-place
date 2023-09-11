<template>
    <form @submit.prevent="updateProduct()" class="form">
        <h2 class="form__title">Редактор</h2>
        <div class="form-item">
            <label class="input-text" for="name">Название</label>
            <InputTextPrime v-model="product.name" id="name" class="input-form" type="text" />
        </div>
        <div class="form-item">
            <label class="input-text" for="priceOld">Старая цена</label>
            <InputNumberPrime v-model="product.priceOld" id="priceOld" class="input-form" type="number" />
        </div>
        <div class="form-item">
            <label class="input-text" for="priceNew">Новая цена</label>
            <InputNumberPrime v-model="product.priceNew" id="priceNew" class="input-form" type="number" />
        </div>
        <button type="submit" class="btn">Редактировать</button>

    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IProduct } from 'src/interfaces/product';
import { useProductListStore } from '@/stores/productList';
import MyButton from '@/components/ui/MyButton.vue';
export default defineComponent({
    name: "Update",
    setup() {
        const productStore = useProductListStore();
        return { productStore };
    },
    created() {
        let productId = this.$route.params.id;
        this.product = this.productStore.getProductById(productId as string);
    },
    methods: {
        updateProduct() {
            debugger
            this.productStore.updateProduct(this.product.id, this.product)
        }
    },
    data() {
        return {
            product: {} as IProduct
        };
    },
    components: { MyButton }
})
</script>

<style lang="scss">
.form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 300px;
    margin: auto;

    .form__title {
        text-align: center;
        margin-bottom: 15px;
    }

    .form-item {
        margin-top: 10px;

        .input-text {
            color: rgb(197, 199, 199);
        }

        .input-form {
            width: 100%;
        }
    }

    .p-inputtext {
        border-radius: 50px;
        border: 1px solid #d5c9f7;
    }

    .btn {
        margin-top: 20px;
        background: rgb(33 150 243);
        height: 41px;
        color: white;
        font-size: 16px;
        border-radius: 50px;
        border: none;
    }
}
</style>