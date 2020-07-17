
new Vue({
    el:'#app'
})

Vue.component('product',{
    props:{
        premium:{
            type:Boolean,
            required:true,
            default: false
        }
    },
    template:`
    <div class="product">
         <div class="product-image">
             <img :src='image' alt="Not Available">
         </div>
         <div class="product-info">
             <h1>{{ add2 }}</h1>
             <p :show='instock'> In Stock</p>
             <p>{{ premium }}</p>
             <ul>
                 <li v-for='d in details'>{{ d }}</li>
             </ul>
             <div v-for='v in variants'
             class="color-box"
             :style="{backgroundColor:v.varcol}"
             @mouseover='change(v.varimg)'>
             </div>

             <button @click='add1' :disabled='!instock' :class="{disabledButton:!instock}">Add to Cart</button>

             <div class="cart">
                 <p>Cart({{ cart }})</p>
             </div>
         </div>
     </div> `,
     data:function(){
        return{ 
        brand:"Vue Mastery ",
        product:'Socks',
        image:'vmSocks-green-onWhite.jpg',
        instock:true,
        details:["80% Cotton","20% Polyester","Gender-Neutral"],
        variants:[
            {
                var1d:1,
                varcol:'blue',
                varimg:'vmSocks-blue-onWhite.jpg'
            },
            {
                var1d:2,
                varcol:'green',
                varimg:'vmSocks-green-onWhite.jpg'
            }
        ],
        cart:0,
        premium:true,
      }
    },
    methods:{
        add1:function () {
            this.cart++;
            },
        change(hel){
            this.image = hel;
        }
    },
    computed:{
      add2()
      {
          return this.brand + this.product;
      }
    }
})
