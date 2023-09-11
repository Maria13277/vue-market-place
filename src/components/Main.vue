<template>
    <!-- <SignIn /> -->
    <div class="context">
        <RouterView />
    </div>
</template>

<script lang="ts">
import { IProductFull } from 'src/interfaces/product';
import { defineComponent, PropType } from 'vue';
// import Registration from './SignIn.vue';

export default defineComponent({
    props: {
        productFull: {
            type: Object as PropType<IProductFull>,
            default: () => ({})
        }

    },
    // components: { Registration }
})
</script>

<style lang="scss">
.context {
    position: relative;
    margin-top: 120px;
    flex: 1 0 auto;
}
</style>