<template>
    <div class="card  flex-wrap">
        <div class="card-left ">
            <div class="status">
                <div class="status-item green">
                    <p class="status-item__text">ХИТ</p>
                </div>
                <div class="status-item red">
                    <p class="status-item__text">{{ productFull.discount }}%</p>
                </div>
            </div>
            <div class="card-img">
                <img class="img" :src='productFull.img' alt="">
            </div>
        </div>
        <div class="card-right">
            <h1 class="card-right__title">{{ productFull.name }}</h1>
            <p class="card-right__subtitle">В наличии 34 шт.</p>
            <div class="card-data flex-wrap">
                <div class="data-characteristic">
                    <h4 class="data-characteristic__title">Характеристики</h4>
                    <div class="characteristic-list">
                        <div class="item">
                            <div class="item-name">
                                <p class="item-name__text">Производитель</p>
                            </div>
                            <div class="item-value">
                                <p class="item-value__text">Россия</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-name">
                                <p class="item-name__text">Диаметр объектива, мм</p>
                            </div>
                            <div class="item-value">
                                <p class="item-value__text">42</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-name">
                                <p class="item-name__text">Назначение</p>
                            </div>
                            <div class="item-value">
                                <p class="item-value__text">охота и рыбалка</p>
                            </div>
                        </div>
                    </div>
                    <div class="characteristic-all">
                        <a href="" class="characteristic-all__show">Все характеристики</a>
                    </div>
                </div>
                <div class="delivery">
                    <div class="delivery-item">
                        <div class="delivery-icon">
                            <i class="pi pi-truck" style="font-size: 1.3rem; color: white;"></i>
                        </div>
                        <p class="delivery__title">Условия доставки</p>
                    </div>
                    <div class="delivery-item">
                        <div class="delivery-icon">
                            <i class="pi pi-money-bill" style="font-size: 1.3rem; color: white;"></i>
                        </div>
                        <p class="delivery__title">Способы оплаты</p>
                    </div>
                </div>
            </div>
            <div class="card-additional">
                <div class="info-left">
                    <div class="info-top">
                        <div class="price">
                            <!-- Сделать блоком -->
                            <h2 class="price-new">{{ productFull.priceNew }} <span>₽</span></h2>
                            <!-- Сделать блоком -->
                            <p class="price-old">{{ productFull.priceOld }} <span>₽</span></p>
                        </div>
                        <!-- Сделать элементом -->
                        <a href="" class="info-top__discount">Получить скидку</a>
                    </div>
                    <div class="info-bottom flex-wrap">
                        <div class="count">
                            <Count v-model="productCount" />
                        </div>
                        <ToastPrime />
                        <MyButton @click="addProductToBasket" class="btn-basket" :title="'В корзину'" />
                        <MyButton @click="updateProduct" class="btn-buy" :title="'Купить'" />
                    </div>
                </div>
                <div class="info-right">
                    <div class="right-item">
                        <div class="item-icon">
                            <i class="pi pi-chart-bar" style="font-size: 1.3rem; color: #3697E2;"></i>
                        </div>
                        <p class="right-item__title">Сравнить</p>
                    </div>
                    <div class="right-item">
                        <div class="item-icon">
                            <i class="pi pi-star" style="font-size: 1.3rem; color: #3697E2;"></i>
                        </div>
                        <p class="right-item__title">В избранное</p>
                    </div>
                </div>
            </div>
            <div class="button-list flex-wrap">
                <div class="button-item button-item__active">
                    <p class="button-item__text">Заказать быстру доставку</p>
                </div>
                <div class="button-item">
                    <p class="button-item__text">Задать вопрос</p>
                </div>
                <div class="button-item">
                    <p class="button-item__text">Оставить отзыв</p>
                </div>
                <div class="button-item">
                    <p class="button-item__text">Новинки</p>
                </div>
            </div>
        </div>
    </div>
    <div class="tech-characteristic">
        <div class="tab-list">
            <h3 class="tab-list__title">Технические характеристики</h3>
            <div class="tab-item">
                <div class="tab-name">
                    <p class="tab-name__text">Диаметр объектива, мм</p>
                </div>
                <div class="tab-value">
                    <p class="tab-value__text">50</p>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-name">
                    <p class="tab-name__text">Тип призмы</p>
                </div>
                <div class="tab-value">
                    <p class="tab-value__text">porro</p>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-name">
                    <p class="tab-name__text">Просветляющее покрытие линз</p>
                </div>
                <div class="tab-value">
                    <p class="tab-value__text">Многослойное</p>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-name">
                    <p class="tab-name__text">Увеличение, крат</p>
                </div>
                <div class="tab-value">
                    <p class="tab-value__text">3 года</p>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-name">
                    <p class="tab-name__text">Диаметр объектива, мм</p>
                </div>
                <div class="tab-value">
                    <p class="tab-value__text">50</p>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-name">
                    <p class="tab-name__text">Минимальная дистанция фокусировки, м</p>
                </div>
                <div class="tab-value">
                    <p class="tab-value__text">9</p>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-name">
                    <p class="tab-name__text">Диаметр выходного зрачка, мм</p>
                </div>
                <div class="tab-value">
                    <p class="tab-value__text">3</p>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-name">
                    <p class="tab-name__text">Поле зрения, м/1000 м</p>
                </div>
                <div class="tab-value">
                    <p class="tab-value__text">3.2</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useBasketListStore } from '@/stores/basketList';
export default defineComponent({
    setup() {
        const basketListStore = useBasketListStore()
        return { basketListStore }
    },
    props: {
        productFull: {
            type: Object,
            default: {}
        }

    },
    data() {
        return {
            productCount: 1,
        }
    },
    methods: {
        addProductToBasket() {
            let resultAdding = this.basketListStore.addProduct({
                ...this.productFull,
                count: this.productCount
            })

            this.$toast.add({ severity: 'success', summary: 'Добавлено', detail: 'Товар добавлен в корзину', life: 1000 })
        },

        updateProduct() {
            this.basketListStore.updateProduct({
                id: '2',
                name: 'dddddddf'
            })
        }

    },
})
</script>

<style scoped lang="scss">
.card {
    display: flex;
    justify-content: center;

    .card-left {
        position: relative;
        @extend %flex-cent-cent;

        height: 500px;
        width: 476px;
        margin-right: 50px;
        border-radius: $radius;

        background: $color-white;
        border: $border-grey-light;

        .status {
            position: absolute;
            top: 22px;
            right: 15px;
            display: flex;

            .status-item {
                @extend %flex-cent-cent;

                width: 56px;
                height: 36px;

                &:first-child {
                    margin-right: 10px;
                }

                .status-item__text {
                    color: $color-white;
                }
            }

            .green {
                background: $color-green;
            }

            .red {
                background: $color-red;
            }
        }

        .card-img {

            .img {
                width: 350px;
                height: 350px;
            }
        }
    }

    .card-right {

        .card-right__subtitle {
            margin-top: 20px;

            color: $color-green;
        }

        .right-item:first-child {
            margin-bottom: 15px;
        }

        .card-data {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 20px;

            .data-characteristic {
                width: 69%;

                .data-characteristic__title {
                    font-size: 18px;
                }

                .characteristic-list {
                    .item {
                        @extend %flex-al-cent;
                        margin-bottom: 5px;

                        .item-name {
                            width: 60%;

                            .item-name__text {
                                color: $color-grey-dark;
                            }
                        }

                        .item-value {
                            .item-value__text {
                                font-weight: $weight-600;
                            }
                        }

                    }
                }
            }

            .delivery {
                @extend %flex-colum;
                padding: 21px 20px;
                border-radius: $radius;

                background: $color-white;
                border: $border-grey;

                .delivery-item {
                    @extend %flex-al-cent;

                    &:first-child {
                        margin-bottom: 10px;
                    }

                    .delivery-item:first-child {
                        margin-bottom: 17px;
                    }

                    .delivery-icon {
                        @extend %flex-cent-cent;
                        width: 48px;
                        height: 48px;
                        margin-right: 13px;

                        border-radius: $radius;
                        background-color: $color-blue;
                    }

                    .delivery__title {
                        color: $color-blue;
                        font-weight: $weight-500;
                    }
                }

            }
        }

        .card-additional {
            @extend %flex-cent-between;
            width: $max-percent;
            margin-top: 24px;
            padding: 25px;
            border-radius: $radius;

            background: $color-white;
            border: $border-grey-light;

            .info-left {
                width: 100%;

                .info-top {
                    @extend %flex-cent-between;

                    .price {
                        @extend %flex-al-cent;

                        .price-old {
                            font-size: 18px;
                            color: $color-grey-dark;
                        }

                        .price-new {
                            font-size: 32px;
                            margin-right: 10px;
                        }
                    }

                    .info-top__discount {
                        color: $color-red;
                        font-weight: $weight-500;
                    }
                }

                .info-bottom {
                    @extend %flex-cent-between;
                    margin-top: 20px;

                    .btn-basket {

                        background: linear-gradient(0deg, #208EE2, #208EE2), linear-gradient(0deg, #0696E7, #0696E7), #0867D6;
                        color: $color-white;
                    }

                    .btn-buy {
                        background: $color-white;
                        border: $border-grey;
                        color: $color-blue;
                    }

                }
            }

            .info-right {
                @extend %flex-colum;
                justify-content: center;

                border-left: 1px solid $color-grey-light;
                margin-left: 13px;
                width: 40%;

                .right-item {
                    @extend %flex-al-cent;
                    margin-left: 20px;

                    .item-icon {
                        @extend %flex-cent-cent;
                        width: 48px;
                        height: 48px;
                        margin-right: 15px;
                        border-radius: $radius;

                        background: $color-grey-light;
                    }

                    .right-item__title {
                        color: $color-grey-dark;
                    }
                }
            }
        }

        .button-list {
            @extend %flex-al-cent;
            justify-content: center;
            width: $max-percent;
            margin-top: 30px;

            .button-item {
                padding: 14px 30px;
                border-radius: $radius;
                margin-left: 10px;

                background: $color-white;
                border: $border-grey;

                &:first-child {
                    margin-left: 0px;
                }

                .button-item__active {
                    border: $border-blue;
                }

                .button-item__text {
                    color: $color-blue;
                    font-weight: $weight-500;
                }
            }
        }
    }
}

.tech-characteristic {
    .tab-list {
        margin-top: 40px;

        .tab-list__title {
            margin-bottom: 35px;
        }

        .tab-item {
            display: flex;
            padding: 9px 20px;
            margin-bottom: 10px;
            border-radius: $radius;
            width: 70%;

            .tab-name {
                width: 70%;
            }

            .tab-value {
                .tab-value__text {
                    font-weight: 700;
                }

            }
        }

    }
}

@media (max-width: 500px) {

    .card-right__title,

    .card-right__subtitle,
    .characteristic-all,
    .data-characteristic__title {
        text-align: center;
    }

    .item {
        flex-wrap: wrap;
    }

    .card-data {
        justify-content: center !important
    }

    .card-additional {
        flex-wrap: wrap;
    }

    .button-list {
        justify-content: center !important
    }

    .button-item {
        margin-bottom: 15px;
    }

    .info-bottom {
        justify-content: center;
        flex-direction: column;
    }

    .delivery {
        margin-top: 20px;
    }

    .card-left {
        margin-top: 90px;
    }

    .card .card-right .card-additional .info-left  .info-top {
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 25px;
        flex-direction: column;
    }

    .button {
        margin-top: 15px;
    }
    .card .card-right .card-additional .info-left .info-bottom .btn-basket {
        margin-left: 0px;
    }

    .characteristic-list {
        display: none;
    }

    .card .card-right .card-additional .info-right {
        width: 100%;
        margin-left: 0px;
        margin-top: 30px;

        border: none;

        & .right-item {
            margin-left: 0px;
            justify-content: center;
        }

    }

    .tech-characteristic .tab-list .tab-item {
        width: 100%;
        justify-content: space-between;
    }
}

@media (max-width: 544px) {
    .btn-basket{
        margin-top: 10px;
        margin-left: 0px;
    }
    .tech-characteristic .tab-list .tab-item {
        width: 100%;
    }
     
}

@media (max-width: 731px) {
    .button:last-child {
        margin-top: 10px;
        margin-left: 0;
    }
    .info-top {
        flex-wrap: wrap;
        justify-content: center !important;
        flex-direction: column;
    }

    .tech-characteristic .tab-list .tab-item {
        width: 100%;
    }
}

@media (max-width: 796px) {
    .button-item {
        margin-bottom: 15px;
    }

    .card .card-right .card-data {
        justify-content: center;
    }

    .data-characteristic {
        margin-bottom: 25px;
    }

    .card-right__title,
    .card-right__subtitle {
        text-align: center;
    }

    .button {
        margin-left: 15px;
    }

    .card .card-right .card-additional .info-left .info-bottom {
        justify-content: center;
    }
}




</style>