<script setup>
import {ref, defineEmits,defineProps} from 'vue'
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
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead> 
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td><i class="icofont-carrot icofont-3x"></i></td>
              <td>{{ item.name }}</td>
              <td>price</td>
              <td class="center">total</td>
              <td>otal</td>
              <td class="center">
                <button class="btn btn-light cart-remove">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center"><em>No items in cart</em></p>
        <div class="spread">
          <span><strong>Total:</strong>total</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>
<style scoped>
.cart-container {
    position: fixed;
    overflow: hidden;
    border-radius: 5px;
    margin: 60px 10px ;
    max-height: max-content;
}

.cart-container,
.cart {
    top: 0px;
    right: 0px;
    width: 300px; /* Example value, replace with your desired width */
  
}

.cart {
    position: relative;
    background: #a19494; /* Example background color */
    color: #131212; /* Example text color */
    transition: right 1s ease;
}

.cart.hide {
    right: -300px; /* Example value, replace with your cart width */
}

.cart-title {
    align-items: center;
    min-height: 60px; /* Example height */
    max-height: 60px; /* Example height */
    background: #ddd; /* Example background color */
    border-bottom: 1px solid #333; /* Example border color */
    padding: 0px 15px;
    font-size: 26px;
    color: blue;
}

.cart-close {
    background: transparent;
    background-color: #8d8484;
    border: 0px;
    border-radius: 5px; /* Example border radius */
    padding: 0px 13px;
    color: #a12929; /* Example text color */
    font-size: 20px;
    font-weight: bold;
   
}

.cart-close:hover {
    background: #999; /* Example hover background color */
}

.cart-table {
    width: 270px; /* Example value, adjust based on your cart width */
    border-collapse: collapse;
    margin: 0px;
    font-size: 14px; /* Example font size */
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

.cart-remove {
    padding: 0px 7px;
    font-size: 18px; /* Example font size */
}

</style>