<template>
    <div class="category-wrapper" @click="updateCurrentCategory()">
        <div class="category">
            <div class="category-img"><img :src="category.img" alt=""></div>
            <h4  class="category__title">{{ category.name }}</h4>
            <div :class="`category-element ${getActiveCategory  ? 'active-category' : ''}`">
                <p class="category-element__text">{{ category.count }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCategoriesStore} from '@/stores/categories';
export default defineComponent({
    setup() {
        const categoriesStore = useCategoriesStore()
        return { categoriesStore }

    },
    props: {
        category: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        getActiveCategory() {
            return this.categoriesStore.$state.currentCategory == this.category.name
        }
    },
    methods: {
        updateCurrentCategory(): void {
            this.categoriesStore.updateCurrentCategory(this.category.name)
            // this.isActive = !this.isActive
        },
    }
})
</script>

<style scoped lang="scss">

.active-category {
    background: #2196f3;
}
.category-wrapper {
    @extend %flex-al-cent;
    height: 63px;


    .category {
        @extend %flex-cent-between;

        width: 230px;
        height: 40px;

        .category-img {
            width: 40px;
            height: $max-percent;

            background: $color-grey-average;

            img {
                height: $max-percent;
                width: $max-percent;
            }
        }

        .category-element {
            @extend %flex-cent-cent;

            width: 35px;
            height: 35px;
            border-radius: $max-percent;
            
            // background: $color-grey-light;
        }
    }

}
</style>