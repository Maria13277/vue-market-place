import { defineStore } from 'pinia'
import { ICategory } from './../interfaces';

export const useCategoriesStore = defineStore({
    id: 'categories',

    state: () => {
        return {
            categories: [
                {
                    id: 1,
                    name: 'Бинокли',
                    // count: 0,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT66iKCJBa-0_y_XZrtenLuB4NriBOiXwGYg-dvN8sPeewmLEe0N5clK5f-X2yJs21eyc&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Телескопы',
                    // count: 0,
                    img: 'https://rakurs.by/image/cache/data/i/il/af/14d280614e801f70d9f97f20271291a0-810x607.jpg',
                },
                {
                    id: 3,
                    name: 'Дальномеры',
                    // count: 0,
                    img: 'https://www.4glaza.ru/images/products/large/0/81414_ermenrich-lr900-laser-rangefinder_00.jpg',
                },
                {
                    id: 4,
                    name: 'Микроскопы',
                    // count: 0,
                    img: 'https://levenhukshop.ru/image/cache/catalog/Produkts/Microscopes/mikroskop-levenhuk-870t-trinokulyarnyy-24613-345x345.jpg',
                },
                {
                    id: 5,
                    name: 'Прицелы',
                    // count: 0,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORVhqZrFabAG6vc60Wos-P7gq-l3F9Yjxug&usqp=CAU',
                }
            ] as Array<ICategory>,
            currentCategory: ''
        }
    },
    actions: {
        addCategory(category: Object) {
            this.categories.push(category)
        },
        
        updateCurrentCategory(categoryName: string) {
            if (this.currentCategory == categoryName) {
                this.currentCategory = ''
            } else {
                this.currentCategory = categoryName
            } 
        }
    }
})