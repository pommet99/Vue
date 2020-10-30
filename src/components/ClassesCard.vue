<template>
   <div class="rounded overflow-hidden shadow-lg" :class="difficultyLevel">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{classe.name}}</div>
            <p class="text-white text-base">{{classe.description}}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">{{classe.difficulty}}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">{{classe.length}}</span>
        </div>

  </div>
</template>

<script>

export default {
    name: "classes-card",
    props: ['classe'],
    computed: {
      difficultyLevel(){
        if(this.classe.difficulty == "Facile"){
            return "bg-green-500"
        }
        else if (this.classe.difficulty == "Moyen"){
            return "bg-yellow-500"
        }
        else if (this.classe.difficulty == "Intermédiaire"){
            return "bg-red-500"
        }
          return "bg-grey-500"
      }
    }
}
</script>

<style>

</style>