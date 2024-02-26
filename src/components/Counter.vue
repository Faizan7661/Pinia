<template>
    <div>
        <div>counter : {{ count }}</div>
        <div>Double Count : {{ doubleCount }}</div>
        <div>Double Count plus one : {{ doubleCountPlusOne }}</div>

        <div>Name : {{ name }}</div>
        <br>
      <div>
        <button @click="add()">Increment</button><br>
        <button @click="counter.$reset">Reset</button>
      </div>
        
    </div>

  </template>
  
  <script setup>
 import {useCounterStore} from '../stores/counter'
 import {storeToRefs} from 'pinia'

 const counter = useCounterStore()
 const {count,doubleCount,name, doubleCountPlusOne}  = storeToRefs(counter)

 function add() {
//   counter.count++;
//   counter.name = Math.random() * 100 + 'uhduh';
counter.$patch({
    count : counter.count+1,
    name : Math.random() *1000 + 'huhudhuhweouihd'
})
}

  </script>
  