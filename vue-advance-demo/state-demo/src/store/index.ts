import {defineStore} from 'pinia'

// 第一种 选项式 api
export const useCounterStore = defineStore("counter", {
    //state
    state: ()=>({count: 0}),

    //getters 计算属性
    getters: {
        double(state) {
            return state.count * 2
        }
    },

    //actions
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
})


import {ref, computed} from 'vue'
// 第二种 compositon api (推荐)
export const useCounterStore2 = defineStore('counter', ()=> {
    const count = ref(0)
    
    const double = computed(()=>count.value * 2)

    const increment = ()=> {
        count.value++
    }
    const decrement = () => {
        count.value--
    }

    return {
        count,
        double,
        increment,
        decrement
    }

})