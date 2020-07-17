<template>
  <div>
   <appheader></appheader>
   <appfoooter></appfoooter>
   <nin></nin>
  </div>
</template>

<script>
import head from './components/header.vue'
import foot from './components/footer.vue'
import ninj from './components/ninjas.vue'
export default {
  components: { 
    'appheader':head ,
    'appfoooter':foot,
    'nin':ninj},
  data()
  {
    return {
    
    }
  },
}
</script>

<style>

</style>
