import {ref} from 'vue'
//状态
//动作
//暴露方法
export const userCounter = (initial?: number) => {
    const count = ref(initial || 0)
    const update = (num: number) => {
        count.value = num
    }
    const add = () => {
        count.value++
    }

    return {
        count,
        update,
        add
    }
}