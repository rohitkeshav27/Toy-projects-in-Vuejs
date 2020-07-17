/* var one = new Vue({
    el:"#one",
    data: {
        title:"SSup from One"
    },
    methods:{
        call1:function () {
            return "Hello guy 1"
            }
    }
})
var two = new Vue({
    el:"#two",
    data: {
        title:"SSup from Two"
    },
    methods:{
        call1:function () {
            return "Hello guy 2"
            }
    }
}) */

/* Vue.component('greeting', {
    template: '<p> Hello SSup guys {{ Age }} {{name}}!! <button @click="clicked">Change Name</button></p>',
    data:function () {
       return {
        name:'Rohit',
        Age:21
    }
    },
    methods:
    {
      clicked: function (){
          this.name = 'Keshav'
    }
}
}) */
new Vue({
    el:'#hell',
    data: { 
        title:'',
        now:false
     },
     methods:{
         getin:function () {
             this.title=this.$refs.inp.value;
             this.now=true;
            }
     }
})