<template>
  <div>
      <header>
          <h1 @click='change'>{{title}}</h1>
      </header>

  </div>
</template>

<script>
import {bus} from '../main'
export default {
  data()
  {
    return {
        title: 'Vue Ninjas'
    
    }
  },
  methods: {
    change(){
      bus.$emit('hell','Rohit')
    }
  }
}
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
   color: #222;
   text-align: center; 
}
</style>
