import { defineStore } from 'pinia'
import { IProduct } from './../interfaces';
import { useCategoriesStore } from './categories'

export const useProductListStore = defineStore({
    id: 'products',

    state: () => {
        return {
            productList: [
                {
                    id: '1',
                    name: 'Бинокль БПЦ2 10х40 (обрезин., рубин)',
                    priceNew: 5990,
                    priceOld: 8000,
                    img: 'https://spinningline.by/images/products_photo_providers/00314000/00314937/00314937_82786_LARGE.jpg',
                    category: 'Бинокли',
                    discount: 40
                },
                {
                    id: '2',
                    name: 'Прицел для винтовки 4-12x50EG с голограф',
                    priceNew: 9970,
                    priceOld: 10550,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5a6W9Z5ZobCqwddgjOPugEXFKw2NGQpuFrA&usqp=CAU',
                    category: 'Прицелы',
                    discount: 18
                },
                {
                    id: '3',
                    name: 'Телескоп Sky-Watcher BK 707AZ2',
                    priceNew: 7090,
                    priceOld: 6000,
                    img: 'https://telescop.by/image/data/Sky-Watcher/707az2/sk707az2z.jpg',
                    category: 'Телескопы',
                    discount: 5
                },
                {
                    id: '4',
                    name: 'Микроскопы Leica BME мод. 10-02079',
                    priceNew: 1790,
                    priceOld: 6000,
                    img: 'https://micromed-spb.ru/upload/iblock/f59/f5902d9fa89d7503ffea7c522cf48868.jpg',
                    category: 'Микроскопы',
                    discount: 10
                },
                {
                    id: '5',
                    name: 'Бинокль БПЦ2 10х40 (обрезин., рубин)',
                    priceNew: 5990,
                    priceOld: 8000,
                    img: 'https://spinningline.by/images/products_photo_providers/00314000/00314937/00314937_82786_LARGE.jpg',
                    category: 'Бинокли',
                    discount: 30
                },
                {
                    id: '6',
                    name: 'Прицел для винтовки 4-12x50EG с голограф ',
                    priceNew: 9970,
                    priceOld: 10550,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWF4bEr6nd5t2si5Ko3cYe3hAAG8iNRTn_Qw&usqp=CAU',
                    category: 'Прицелы',
                    discount: 60
                },
                {
                    id: '7',
                    name: 'Телескоп Sky-Watcher BK 707AZ2',
                    priceNew: 7090,
                    priceOld: 6000,
                    img: 'https://interfoto.by/pics/items/StarBlast6.jpg',
                    category: 'Телескопы',
                    discount: 12
                },
                {
                    id: '8',
                    name: 'Микроскопы Leica BME мод. 10-02079',
                    priceNew: 1790,
                    priceOld: 6000,
                    img: 'https://www.levenhuk.ru/images/products/large/0/74004_levenhuk-med-40b-binocular-microscope_00.jpg',
                    category: 'Микроскопы',
                    discount: 30
                },
                {
                    id: '9',
                    name: 'Бинокль БПЦ2 10х40 (обрезин., рубин)',
                    priceNew: 5990,
                    priceOld: 8000,
                    img: 'https://images.deal.by/261590856_binokl-celestron-nature.jpg',
                    category: 'Бинокли',
                    discount: 18
                },
                {
                    id: '10',
                    name: 'Прицел для винтовки 4-12x50EG с голограф ',
                    priceNew: 9970,
                    priceOld: 10550,
                    img: 'https://pics.pro-shooter.ru/r/QiZ4jMrmV_Q/rs:fit:640:640:1/plain/images/products/1/4158/406130750/IMG_5191.jpg',
                    category: 'Прицелы',
                    discount: 15
                },
                {
                    id: '11',
                    name: 'Телескоп Sky-Watcher BK 707AZ2',
                    priceNew: 7090,
                    priceOld: 6000,
                    img: 'https://st.depositphotos.com/1238677/1570/i/600/depositphotos_15704995-stock-photo-telescope-on-support-over-wite.jpg',
                    category: 'Телескопы',
                    discount: 30
                },
                {
                    id: '12',
                    name: 'Микроскопы Leica BME мод. 10-02079',
                    priceNew: 1790,
                    priceOld: 6000,
                    img: 'https://telescop.by/image/data/Microscope/Levenhuk/2L%20NG/levenhuk-2l-plus-moon.jpg',
                    category: 'Микроскопы',
                    discount: 10
                }
            ] as Array<IProduct>,
            resultSearh: ''
        }
    },
    getters: {
        getProductsByCategory() {
            const currentCategory = useCategoriesStore().$state.currentCategory;
            return currentCategory ? this.productList.filter((item: any) => item.category == currentCategory) : this.productList
        },
        getProductById: (state) => {
            return (productId: any) => state.productList.find(item => item.id === productId)
        },
        getProductBySearchName() {
            return this.productList.filter((item: any) => item.name.includes(this.resultSearh))
        }
    },
    actions: {
        addProduct(product: Object) {
            this.productList.push(product)
        },
        updateProduct(id: string, newPoduct: any) {
            debugger
            let result = this.productList.findIndex((product: any) => product.id == id)
            this.productList[result] = {
                ...this.productList[result],
                ...newPoduct
            }
        }
    }
})