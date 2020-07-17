<template>
  <div>
  <footer>
      <p>{{copyright}}</p>
  </footer>
  </div>
</template>

<script>
import {bus} from '../main'
export default {
  data()
  {
    return {
     
     copyright:'Copyright 2017 Vue Ninjas'
    
    }
  },
    created()
    {
      bus.$on('hell',(data) => {console.log(data)})
    } 
}
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
    color: lightgreen;
    text-align: center;
}
</style>
