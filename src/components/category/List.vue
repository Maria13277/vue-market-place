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
    position: fixed;
    z-index: 9900;
    background: $color-white;
    padding: 20px;
    // height: 100%;
    width: 17%;
    left: 0px;
    transition: 2s;



    .categories-wrapper__title {
        text-align: start;
        margin-bottom: 30px;
        margin-left: 51px;
    }

    .clear:before,
    .clear:after {
        position: absolute;
        top: 36px;
        left: 273px;
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
        top: 121px;
        width: 50%;
    }

    .clear {
        left: 548px;
    }
}
@media (max-width: 604px) {
    .categories-wrapper {
        top: 134px;
        width: 50%;
        height: 100%;
    }

    .category-wrapper {
        justify-content: center !important;
    }

    .categories-wrapper .categories-wrapper__title {
        text-align: center;
        margin-left: 0;
        
    }

    .clear:before,
    .clear:after {
        left: 239px !important
    }
}
@media (max-width: 443px) {
    .categories-wrapper {
        top: 173px;
        width: 100%;
        height: 100%;
    }

    .category-wrapper {
        justify-content: center !important;
    }

    .clear:before,
    .clear:after {
        left: 276px !important
    }
}
</style>

