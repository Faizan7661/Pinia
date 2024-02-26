import {defineStore} from 'pinia';
import { ref } from 'vue';
import {computed} from 'vue'

export const useTaskStore = defineStore('taskStore',()=>{

    const tasks = ref([
        {id:1, title: "Buy Some Milk", isFav:false},
        {id:2, title: "Learn StateManagement using pinia", isFav:true}

    ])


    const favTasks = computed(() => tasks.value.filter(task => task.isFav));
    const favCount = computed(() => tasks.value.reduce((acc, task) => task.isFav ? acc +  1 : acc,  0));



    const totalCount = computed(()=>{
        return tasks.value.length
    })
    
   function addTask(task) {
        tasks.value.push(task);
      }

      function deleteTask(id) {
        tasks.value = tasks.value.filter(t => t.id !== id);
    }
    
    function toggleFav(id) {
        const taskIndex = tasks.value.findIndex(t => t.id === id);
        if (taskIndex !== -1) {
            tasks.value[taskIndex].isFav = !tasks.value[taskIndex].isFav;
        }
    }
    
    return{
        tasks,
        favTasks,
        favCount,
        totalCount,
        addTask,
        deleteTask,
        toggleFav
    }
})