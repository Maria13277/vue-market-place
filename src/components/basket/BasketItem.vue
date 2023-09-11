<template>
    <div class="basket-item">
        <div class="basket-img">
            <img src="" alt="">
        </div>
        <h3 class="basket-item__title">
            {{ basketItem.name }} <br>

        </h3>
        <Count />
        <h2 class="basket-item-price">{{ basketItem.price }} <span class="basket-item-price__span">₽</span></h2>
        <Clear class="item-clear" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType} from 'vue';
import {IBasket} from './../../interfaces';
export default defineComponent({
    data() {
        return {
        }
    },
    props: {
        basketItem: {
            type: Object as PropType<IBasket>,
            default: () => ({})
        }
    }
})
</script>

<style lang="scss">
.basket-item {
    @extend %flex-cent-between;
    padding: 30px 0px;
    border-top: $border-grey;

    .basket-img {
        width: 70px;
        height: 60px;
        border: $border-grey;
        border-radius: $radius;

        background: $color-white;
    }

    .basket-item__title {
        font-weight: $weight-500;
    }

    .item-clear {
        border: $border-grey;
        border-radius: 50px;

        background: $color-white;
    }
}
</style>