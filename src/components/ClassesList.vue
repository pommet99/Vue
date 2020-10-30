<template>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Cours de Dev</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Forum
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Exercices
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
  </div>
</nav>
<br><br>

<div class="flex flex-wrap justify-center">
    <classes-card v-for="(classe, index) in classesData.classes" :key="index" :classe="classe" class="w-1/4 m-5"></classes-card>
</div>
</template>

<script>

import classesData from '../assets/data/classes.json'
import ClassesCard from './ClassesCard'

export default {
    name:"classes-list",
    components: {
        ClassesCard
    },
    data() {
        return {
           classesData : classesData, 
        }
    },
}
</script>

<style>

</style>