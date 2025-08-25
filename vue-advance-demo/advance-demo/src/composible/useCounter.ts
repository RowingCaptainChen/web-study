import { ref } from "vue";
export const useCounter = (initial: number) =>  {
    const count = ref(initial)

    const increment = ()=> {
        count.value++
    }
    const decrement = ()=> {
        count.value--
    }

    return {
        count, 
        increment,
        decrement
    }
}
