<template>
    <div class="basket">
        <div class="basket-top">
            <h2 class="basket-top__title">Корзина</h2>
            <Clear />
        </div>
        <div class="basket-list">
            <BasketItem :basketItem="basketItem" v-for="basketItem in basketItems" key="basketItem.id"/>
        </div>
        <div class="basket-center display-flex">
            <div class="basket-clear display-flex">
                <Clear class="clear" />
                <p class="basket-clear__title">Очистить все</p>
            </div>
            <div class="basket-price display-flex">
                <h2 class="basket-price__title">Итого:</h2>
                <h2 class="basket-price__number">25 290 ₽</h2>
            </div>
        </div>
        <div class="basket-bottom">
            <MyButton class="btn-continue" title="Продолжить" />
            <MyButton class="btn-buy" title="Купить" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType} from 'vue';
import {IBasket} from './../../interfaces';
export default defineComponent({
    props: {
        basketItems: {
            type: Array as PropType<Array<IBasket>>,
            default: () => ([])
        }
    },
})
</script>

<style scoped lang="scss">
// Сначала размеры, отступ, бордеры, потом визуал
.basket {
    width: 728px;
    margin: 0 auto;
    padding: 20px 30px;
    border-radius: $radius;

    background: $color-white;
    box-shadow: 0px 5px 20px rgba(63, 66, 69, 0.05);

    .basket-top {
        @extend %flex-cent-between;
        margin-bottom: 25px;
    }


    .basket-center {
        @extend %flex-cent-between;
        height: 92px;
        border-top: $border-grey;

        .basket-clear {
            @extend %flex-al-cent;

            .clear {
                margin-right: 15px;
            }

            .basket-clear__title {
                color: $color-grey-dark;
            }
        }

        .basket-price {
            @extend %flex-al-cent;
            justify-content: flex-end;
            padding-right: 25px;

            .basket-price__title {
                margin-right: 25px;
            }

            .basket-price__number {
                font-size: 30px;
            }
        }

    }

    .basket-bottom {
        @extend %flex-al-cent;
        justify-content: flex-end;
        padding: 20px;

        .btn-continue {
            margin-right: 20px;
            border: $border-blue;

            background: $color-white;
            color: $color-blue;
        }

        .btn-buy {
            background: linear-gradient(0deg, #208EE2, $color-blue);
            color: $color-white;
        }
    }

}
</style>