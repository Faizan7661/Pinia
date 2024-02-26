<template>
<!-- <counter/> -->
<main>
    <!-- Heading -->
    <header>
        <img src="https://raw.githubusercontent.com/iamshaunjp/Pinia-with-Vue-3/14eaeb86985576ca60f7fd53397c45d2834c499e/src/assets/pinia-logo.svg" alt="Logo"/>
        <h1>Pinia Tasks</h1>
    </header>
    <!-- new Task  -->

    <div class="new-task-form">
        <TaskForm/>
    </div>
    <!-- filter NAvbar -->

    <nav class="filter">
        <button @click="filter = 'all'">All Tasks</button>
        <button @click="filter = 'favs'">Fav Tasks</button>

    </nav>
    <!-- Task List -->
    <div class="task-list" v-if="filter === 'all'">
        <p>You Have {{ TaskStore.totalCount }} tasks left to Do</p>
        <div v-for="task in tasks">
        <TaskDetails :task="task"/>
        </div>
    </div>
    <!-- fav Tasks -->
    <!-- Task List -->
    <div class="task-list" v-if="filter === 'favs'"> 
        <p>You Have {{ TaskStore.favCount }} Favourite tasks left to Do</p>
        <div v-for="task in favTasks">
        <TaskDetails :task="task"/>
        </div>
    </div>
</main>
</template>

<script setup>
// import counter from './components/Counter.vue'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue';
import {useTaskStore} from './stores/TaskStore'
import {storeToRefs} from 'pinia'
import { ref } from 'vue';

const TaskStore = useTaskStore()

const filter = ref('all')

const {tasks} = storeToRefs(TaskStore)
const favTasks = TaskStore.favTasks
</script>