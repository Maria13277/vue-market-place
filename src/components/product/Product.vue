<template>
    <div class="product">
        <div class="product-category">
            <i class="pi pi-tag" style="font-size: 1.0rem"></i>
            <div class="product-category-title"> {{ product.category }} </div>
        </div>
        <div class="produc-img">
            <div class="img-wrapper">
                <img class="img-wrapper__img" :src='product.img' alt="">
            </div>
        </div>
        <div class="product-element">
            <h4 class="product-title"> {{ product.name }} </h4>
            <div class="product-bottom">
                <!-- Переименовать bottom-prise и т.д -->
                <div class="product-bottom-price">
                    <div class="price-block">
                        <h2 class="new-price">
                            {{ product.priceNew }}
                            <span>₽</span>
                        </h2>
                    </div>
                    <div>/</div>
                    <div class="price-block">
                        <h4 class="old-price">
                            {{ product.priceOld }}
                            <span>₽</span>
                        </h4>
                    </div>
                </div>
                <ToastPrime />
                <div @click="addProductToBasket" class="product-icon">
                    <i label="Show" class="pi pi-shopping-cart" style="color: #2196f3; font-size: 1.5rem"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IProduct } from 'src/interfaces/product';
import { useBasketListStore } from '@/stores/basketList';
import ProductFull from './ProductFull.vue';
import { count } from 'console';

export default defineComponent({
    setup() {
        const basketListStore = useBasketListStore()
        return { basketListStore }
    },
    props: {
        product: {
            type: Object as PropType<IProduct>,
            default: () => ({})
        }
    },
    methods: {
        addProductToBasket() {
            this.basketListStore.addProduct({
                ...this.product,
                count: 1
            })

            this.$toast.add({ severity: 'success', summary: 'Добавлено', detail: 'Товар добавлен в корзину', life: 1000 })
        }
    }
})
</script>

<style scoped lang="scss">
.product {
    @extend %flex-cent-cent;
    flex-direction: column;
    z-index: 300;

    width: 278px;
    // height: 392px;
    border-radius: $radius;
    margin: 20px;

    background: $color-white;
    border: $border-grey;
    box-shadow: 0px 5px 20px rgba(63, 66, 69, 0.05);

    .product-category {
        @extend %flex-al-cent;
        padding: 14px 20px;

        width: 100%;
        color: #bebebe;

        .product-category-title {
            margin-left: 5px;
        }
    }

    .product-title {
        font-size: 18px;
    }

    .produc-img {
        .img-wrapper {
            .img-wrapper__img {
                width: 200px;
                height: 200px;
            }
        }
    }

    .product-element {
        padding: 14px;
        box-sizing: border-box;
        text-align: center;

        .product-bottom {
            @extend %flex-cent-around;
            margin-top: 15px;

            .product-bottom-price {
                @extend %flex-cent-between;
                width: 60%;

                .price-block {
                    .old-price {
                        font-weight: $weight-400;
                        font-size: 16px;
                        line-height: 22px;

                        color: $color-grey-dark;
                    }
                }
            }

            .product-icon {
                @extend %flex-cent-cent;
                width: 30px;
                height: 30px;
            }
        }
    }
}
</style>
