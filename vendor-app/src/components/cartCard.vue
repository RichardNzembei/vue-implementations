<script setup>
import {ref, defineEmits,defineProps,computed} from 'vue'
const props=defineProps({
    cartItems:Array
})
const emit=defineEmits(['toogle'])
const toogleSidebar=()=>{
    emit('toogle')
}

</script>
<template>
     <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button @click="toogleSidebar" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table" >
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead> <br>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td><i class="cartItems"></i></td>
              
              <td :class="item.icon" class="icon"></td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td class="center">{{ item.quantity }}</td>
              <td>{{ item.price * item.quantity }}</td>
              <td class="center">
                <button class="cartRemove" @click="removeItem">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center" v-if="cartItems.length===0"><em>No items in cart</em></p><br><br>
        <div class="spread">
          <span><strong>Total:</strong>total</span><br>
          <button class="checkout"><b>Checkout</b></button>
        </div>
      </div>
    </div>
  </aside>
</template>
<style scoped>
.cart-container {
    position: fixed;
    overflow: hidden;
    border-radius: 10px;
    margin: 60px 10px ;
    max-height: max-content;
    
}

.cart-container,
.cart {
    top: 0px;
    right: 0px;
    width: 350px; /* Example value, replace with your desired width */
    border-radius: 10px;
  
}

.cart {
    position: relative;
    background: #0f0d0d; /* Example background color */
    color:white; /* Example text color */
    transition: right 1s ease;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-style: bold;
    
}

.cart.hide {
    right: -300px; /* Example value, replace with your cart width */
}

.cart-title {
    align-items: center;
    min-height: 40px; /* Example height */
    max-height: 40px; /* Example height */
    background: #5b87c2; /* Example background color */
    border-bottom: 1px solid #333; /* Example border color */
    padding: 0px 15px;
    font-size: 26px;
    color: white;
}

.cart-close {
    background: transparent;
    background-color: #4c91df;
    border: 0px;
    border-radius: 5px; /* Example border radius */
    padding: 0px 13px;
    color:white; /* Example text color */
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 0 210px;
   
}

.cart-close:hover {
    background: #130f0f; /* Example hover background color */
}

.cart-table {
    width: 270px; /* Example value, adjust based on your cart width */
    border-collapse: collapse;
    margin: 0 0 5px 5px;
    font-size: 16px; /* Example font size */
    padding: 10px;
    justify-content: space-between;
    
}

.cart-image {
    max-width: 45px;
    max-height: 45px;
}

.cart-body {
    max-height: calc(100% - 60px); /* Example value, adjust based on your cart title height */
    padding: 10px; /* Example padding */
    overflow: auto;
}

.cartRemove {
    padding: 0px 7px;
    font-size: 18px; /* Example font size */

}
.checkout{
background-color: white;
display: flex;
margin: 20px;
padding: 4px;
color: rgb(33, 145, 33);
font-size: 20px;
border-radius: 5px;
}
</style>