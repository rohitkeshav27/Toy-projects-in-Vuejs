new Vue ({
 el:"#appjs",
 data:{
     /* error:false,
     success: false, 
     characters:['Tom',"Jerry","Ninja"],
     /* keys:[
     {name:'Rohit',age:21},
     {name:'Keshav',age:35}
     ] */
    health:100,
    ended:false
 },
 methods:{
  punch:function () {
      if(this.health > 0)
       this.health-= 10;
      else
       this.ended = true; 
   },
   restart:function(){
       this.health=100;
       this.ended = false;
   }
 }
})