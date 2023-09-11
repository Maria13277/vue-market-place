<template>
    <div ref="categoryRef"  :class="`categories-wrapper  ${isCategoryVisible ? 'hide' : '' }`">
        <h3 class="categories-wrapper__title">Категории</h3>
        <Clear @click="addClassHide"  class="clear" />
        <CategoryItem :category="category" v-for="category in getCategories" :key="category.id" />
    </div>
    <div @click="toggleCategoriesVisible" class="open"></div>
</template>

<script lang="ts">
import { ICategory } from 'src/interfaces';
import { defineComponent, PropType } from 'vue';
import { useCategoriesStore } from '@/stores/categories';

export default defineComponent({
    setup() {
        const categoriesStore = useCategoriesStore()

        return { categoriesStore }
    },
    data() {
        return {
            isCategoryVisible: true
        }
    },
    computed: {
        getCategories() {
            return this.categoriesStore.$state.categories
        }
    },
    methods: {
        addClassHide() {
            this.isCategoryVisible = true
        },
        toggleCategoriesVisible() {
            this.isCategoryVisible = !this.isCategoryVisible
        }
    },
})

</script>

<style lang="scss">

.categories-wrapper {
    position: absolute;
    z-index: 9900;
    background: $color-white;
    padding: 20px;
    height: 100%;
    left: 0px;
    transition: 2s;



    .categories-wrapper__title {
        text-align: start;
        margin-bottom: 30px;
    }

    .clear:before,
    .clear:after {
        position: absolute;
        top: 36px;
        left: 221px;
    }
}

.hide {
    left: -534px;
}


.open {
    position: fixed;
    top: 50%;
    z-index: 888;
    width: 60px;
    height: 60px;
    border-radius: 100%;

    background: #2196f3;
}

@media (max-width: 787px) {
    .categories-wrapper {
        top: 37px;
    }
}
@media (max-width: 604px) {
    .categories-wrapper {
        top: 52px;
    }
}
@media (max-width: 443px) {
    .categories-wrapper {
        top: 90px;
    }
}
</style>

