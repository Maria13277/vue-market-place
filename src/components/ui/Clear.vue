<template>
    <div class="close"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {

        }
    },
})
</script>

<style lang="scss">
.close:before,
.close:after {
    content: "";
    width: 20px;
    height: 3px;
    background: #b7b7b7;
}

.close:before {
    transform: rotate(45deg);
}

.close:after {
    transform: rotate(-45deg);
}
</style>