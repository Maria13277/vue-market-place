<template>
    <div class="footer">
        <div class="footer-top flex-wrap align-content-center">
            <div class="top-item">
                <div class="item-icon">
                    <i class="pi pi-eye" style="font-size: 1.2rem; color: white"></i>
                </div>
                <h4 class="item__title">Промотренные</h4>
                <div class="block-count">
                    <i class="pi pi-arrow-right" style="font-size: 1rem; color: rgb(192, 191, 191)"></i>
                </div>
            </div>
            <div class="line-footer"></div>
            <div class="top-item">
                <div class="item-icon">
                    <i class="pi pi-verified" style="font-size: 1.2rem; color: white"></i>
                </div>
                <h4 class="item__title">Сравнение товаров</h4>
                <div class="block-count">
                    <i class="pi pi-arrow-right" style="font-size: 1rem; color:  rgb(192, 191, 191)"></i>
                </div>
            </div>
            <div class="line-footer"></div>
            <div class="top-item">
                <div class="item-icon">
                    <i class="pi pi-star" style="font-size: 1.2rem; color: white"></i>
                </div>
                <h4 class="item__title">Избранное</h4>
                <div class="block-count">
                    <i class="pi pi-arrow-right" style="font-size: 1rem; color:  rgb(192, 191, 191)"></i>
                </div>
            </div>
            <div class="line-footer"></div>
            <div class="top-item">
                <div class="item-icon">
                    <i class="pi pi-shopping-cart" style="font-size: 1.2rem; color: white"></i>
                </div>
                <h4 class="item__title">Корзина</h4>
                <div class="block-count">
                    <i class="pi pi-arrow-right" style="font-size: 1rem; color:  rgb(192, 191, 191)"></i>
                </div>
            </div>
            <div class="line-footer"></div>
            <div class="top-item">
                <div class="item-icon">
                    <i class="pi pi-heart" style="font-size: 1.2rem; color: white"></i>
                </div>
                <h4 class="item__title">Актуальное</h4>
                <div class="block-count">
                    <i class="pi pi-arrow-right" style="font-size: 1rem; color:  rgb(192, 191, 191)"></i>
                </div>
            </div>
        </div>
        <div class="footer-bottom flex-wrap align-content-center">
            <a class="footer-bottom__href">© 2022 Бинокль.Все права защищены.</a>
            <a href="" class="bottom-center__href">Политика конфиденциальности</a>
            <a href="" class="bottom-center__href">Условия соглашения</a>
            <a class="footer-bottom__href" href="">Карта сайта</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {

        }
    }
})
</script>

<style scoped lang="scss">
@media (max-width: 559px) {
    // .footer-top {
    //     height: 100%;
    // }

    .footer-bottom__href {
        text-align: center;
    }
}

.footer {
    z-index: 88;

    .footer-top {
        @extend %flex-al-cent;
        justify-content: space-around;
        margin-top: 30px;
        padding: 20px;

        background: $color-grey-dark;

        .top-item {
            @extend %flex-al-cent;
            padding: 10px;

            .item-icon {
                @extend %flex-al-cent;
                width: 26px;
                height: 26px;
                margin-right: 4px;

                // background: $color-grey-average;
            }

            .item__title {
                font-weight: $weight-400;
                color: $color-white;
            }

            .block-count {
                @extend %flex-al-cent;
                width: 24px;
                height: 24px;
                margin-left: 20px;
                border-radius: $max-percent;


                // border: $border-white;
                background: $color-grey-dark;
                box-shadow: 0px 5px 20px rgba(63, 66, 69, 0.05);
            }
        }

        .line-footer {
            width: 1px;
            height: $max-percent;

            background: $color-grey-dark;
        }
    }

    .footer-bottom {
        @extend %flex-al-cent;
        justify-content: space-around;
        padding: 20px;

        background: $color-white;

        .bottom-center__href {
            padding: 10px;

            //Проверить правильность (было &a)
            & a {
                text-decoration: none;
                color: #3A3F43;
            }
        }
    }
}
</style>