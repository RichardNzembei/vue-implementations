<script setup>

</script>
<template>
      <div class="search">
            <input type="text" v-model="searchTerm" placeholder="Search by category">
            <button @click="searchProducts"><i class="fa fa-search"></i></button>
        </div>

        <div class="card-container">
            <div class="card" v-for="product in filteredProducts" :key="product.id">
                <span :class="product.icon" class="icon"></span>
                <h3>{{ product.name }}</h3>
                <h4>Price: Ksh {{ product.price }}</h4>
                <div class="row">
                    <div class="cell">
                      <label><b>Quantity:</b></label>
                    </div>
                    <div class="cell">
                      <input type="number" v-model.number="product.quantity">
                    </div>
                </div>
                <button @click="addToCart(product)" class="addToCart">Add to Cart</button>
            </div>
        </div>
        
</template>
<style scoped>

</style>