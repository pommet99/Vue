<template>

  <nav-bar @nav="updateSelectedComponent"></nav-bar>
  <keep-alive>
    <component :is="selectedComponent"  v-bind="currentProps" @update-done="updateDone" @delete-classe ="deleteClasses"></component>
  </keep-alive>
</template>

<script>

import ClassesList from './components/ClassesList'
import NavBar from './components/navigation/NavBar'
import ClassesDone from './components/ClassesDone'

export default {
  name: 'App',
  components: {
    ClassesList,
    ClassesDone, 
    NavBar
  },
  data(){
    return{
      selectedComponent: 'classes-list', 
      doneArray : []
    }
  },
  computed:{
    currentProps() {
      if(this.selectedComponent == "classes-done"){
        return {
          classesDoneArray: this.doneArray
        }
      } 
        return false
    }
  },
  methods: {
    updateSelectedComponent(comp){
      this.selectedComponent = comp
      console.log (comp)
    },
    updateDone(classes){
      this.doneArray.push(classes)
    },
    deleteClasses(classe){
      console.log("delete")
      this.doneArray.splice(classe.index, 1)
  }
  }

}
</script>

<style>

</style>
