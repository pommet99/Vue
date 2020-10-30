<template>
  <div class="bg-blue-400 p-6 flex justify-around">  
    
    <a v-for="(link, index) in navigation" :key="index" @click="selectComponent(link.component)" href="#" class="text-xl">
        {{link.name}}
    </a>

  </div>
</template>

<script>
export default {
    name: 'nav-bar',
    data(){
        return {
            navigation: [
                {name: "Tous nos Cours", component: "classes-list"},
                {name: "Cours Sélectionnés", component: "classes-done"}
            ]
        }
    },
    methods: {
        selectComponent(comp){
            this.$emit('nav', comp)
        }
    }
}
</script>

<style>

</style>