<template>
    <div class="button">
        <!-- <div class="button-icon">
            <img src="" alt="" class="icon">
        </div> -->
        <!-- Сделать элементом -->
        <p class="button-title">{{ title }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        title: {
            type: String
        },
    },
    data() {
        return {

        }
    }
})
</script>

<style scoped lang="scss">
.button {
    @extend %flex-cent-cent;
    padding: 10px 50px;
    border-radius: 5px;
    
    font-weight: 500;
}
</style>