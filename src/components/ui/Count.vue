<template>
    <InputNumberPrime min="1" :value="productCount" showButtons buttonLayout="horizontal"
    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
</template>

<script lang="ts">
import InputNumber from 'primevue/inputnumber';
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        productCount: {
           type: Number
        } 
    },
})
</script>

<style lang="scss">
.p-inputtext {
    width: 33px;
    padding: 10px;
}
</style>