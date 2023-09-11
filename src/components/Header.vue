<template>
    <div class="header  flex-wrap align-content-between">
        <div class="header-logo">
            <i class="pi pi-bolt" style="font-size: 2.0rem; color: white;"></i>
            <h3 class="header-logo__text">Optica</h3>
        </div>
        <div class="header-search">
            <input type="text" placeholder="Поиск" class="header-search__input">
        </div>
        <div class="header-block">
            <div class="header-block-element">
                <i class="pi pi-user" style="font-size: 1rem; color: white" ></i>
                <a class="header__href" href="">Вход</a>
            </div>
            <div class="header-block-element">
                <i class="pi pi-user-plus" style="font-size: 1rem; color: white"></i>
                <a class="header__href" href="">Регистрация</a>
            </div>
        </div>

        <ButtonPrime type="button" icon="pi  pi-shopping-cart" style="color: #ffffff;" label="Корзина" @click="toggle" />

        <OverlayPanelPrime ref="op" class="basket">
            <DataTablePrime :value="getBasketProducts"
                tableStyle="min-width: 50rem">
                <ColumnPrime>
                    <template #body="slotProps">
                        <img :src="slotProps.data.img" class="border-round" style="width: 60px;" />
                    </template>
                </ColumnPrime>
                <ColumnPrime field="name" header="Название">
                    <template #body="slotProps">
                        {{ slotProps.data.name }}
                    </template>
                </ColumnPrime>
                <ColumnPrime field="category" header="Категория">
                    <template #body="slotProps">
                        {{ slotProps.data.category }}
                    </template>
                </ColumnPrime>
                <ColumnPrime field="price" header="Цена">
                    <template #body="slotProps">
                        {{ slotProps.data.priceNew }}
                    </template>
                </ColumnPrime>
                <ColumnPrime field="count" header="Количиство">
                    <template #body="slotProps">
                        <Count v-model="slotProps.data.count"/>
                    </template>
                </ColumnPrime>
                <ColumnPrime>
                    <template #body="slotProps">
                        <div @click="removeBasketItem(slotProps.data.id)" class="clear-basket">
                            <i class="pi pi-trash" style="font-size: 1.2rem; color: #3697e2;"></i>
                        </div>
                    </template>
                </ColumnPrime>
            </DataTablePrime>
        </OverlayPanelPrime>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { ref, onMounted } from 'vue';
import { useBasketListStore } from '@/stores/basketList';
export default defineComponent({
    setup() {
        const basketListStore = useBasketListStore()

        return { basketListStore }
    },
    methods: {
        toggle(event: any) {
            this.$refs.op.toggle(event);
        },
        removeBasketItem(productId: number) {
            this.basketListStore.removeProduct(productId)
            this.$toast.add({ severity: 'info', summary: 'Удалено', detail: 'Товар удален из корзины', life: 1000 });
        }

    },
    computed: {
        getBasketProducts() {
            return this.basketListStore.$state.basketList
        },
    }
})
</script>

<style lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    @extend %flex-al-cent;
    justify-content: space-evenly;
    width: $max-percent;
    padding: 14px;

    background: #747883;

    .product-img {
        img {
            width: 60px !important;
            height: 60px !important;
        }
    }

    .header-logo {
        @extend  %flex-cent-cent;
        padding: 10px;

        .header-logo__text {
            color: white;
        }
    }

    .header-search {
        .header-search__input {
            padding: 10px 44px 10px 22px;
            border-radius: 20px;

            font-size: 13px;
            border: none;
        }

    }

    .header-block {
        @extend %flex-cent-between;
        // width: 200px;
        padding: 15px;

        .header-block-element {
            .header__href {
                margin-left: 10px;
                font-weight: $weight-600;
                color: $color-white;

                text-decoration: none;
            }
        }

        .header-block-element:first-child {
            margin-right: 20px;
        }
    }

    .header-elements {
        @extend %flex-cent-around;

        .element-icon {
            width: 35px;
            height: 35px;

            background: $color-white;
        }
    }

    .p-button {
        padding: 0.5rem 3rem;
        border-radius: 20px;
    }
}
@media (max-width: 559px) {
    .header {
        justify-content: center;
    }
}
@media (max-width: 559px) {
    .basket {
        left: 0;
    }
}
</style>