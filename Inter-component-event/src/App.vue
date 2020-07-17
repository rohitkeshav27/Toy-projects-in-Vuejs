<template>
  <div>
   <appheader @hell="calling"></appheader>
   <appfoooter></appfoooter>
   <nin :ninjas="ninjas"></nin>
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
       ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ]
    }
  },
  methods:{
    calling(name){
      console.log(name)
    }
  }
}
</script>

<style>

</style>
