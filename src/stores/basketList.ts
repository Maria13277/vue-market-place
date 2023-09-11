import { defineStore } from 'pinia'
import { IBasket } from './../interfaces';

export const useBasketListStore = defineStore({
    id: 'basket',

    state: () => {
        return {
            basketList: [
            ] as Array<IBasket>,
        }
    },

    actions: {   
        addProduct(product: any) {
            let result = this.basketList.find((item: any) => item.id == product.id)
            if (!result) {
                this.basketList.push(product) 
                return true
            } else {
                result.count += product.count
            }
            return false
        },
        removeProduct(productId: number) {
            this.basketList = this.basketList.filter((basketItem: any)  => {
                return basketItem.id != productId
            })
        },
        updateProduct(product: any) {
            let result = this.basketList.findIndex((item: any) => item.id == product.id)
            this.basketList[result] = {
                ...this.basketList[result],
                ...product
            }
        }

    }
})