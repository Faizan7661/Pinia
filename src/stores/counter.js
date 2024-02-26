import {defineStore} from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counterStore', ()=>{

    const count = ref(0);
    const name = ref('Mohammed Faizan')
    const doubleCount = computed(()=>count.value *2)
    const doubleCountPlusOne = computed(()=>{
        return doubleCount.value + 1;
    })

    const increment =()=>{
        count.value++
    }

    const $reset =()=>{
        count.value =0,
        name.value ='Mohammed Faizan'
    }

    return {
        count,
        doubleCount,
        doubleCountPlusOne,
        name,
        increment,
        $reset
    }
})