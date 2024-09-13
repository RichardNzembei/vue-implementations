<script setup>
</script>
<template>
  <div class="card-container">
    <div class="card">
      <span class="icon icon-fruits"></span>
      <h3>fruits</h3>
      <p>we have variety of fruits</p>
      <button type="button" value="variety" class="button">variety</button>
    </div>
    <div class="card">
      <span class="icon icon-veges"></span>
      <h3>vegetables</h3>
      <p>we have variety of vegetables</p>
      <button type="button" value="variety" class="button">variety</button>
    </div>
    <div class="card">
      <span class="icon icon-cereals"></span>
      <h3>cereals</h3>
      <p>we have variety of cereals</p>
      <button type="button" value="variety" class="button">variety</button>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgb(red, green, blue);
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  text-align: center;
}
.icon {
  width: 32px;
  height: 32px;

  background-size: cover;
  display: inline-block;
}
.icon-fruits {
  background-image: url("../assets/images/fruit.png");
}
.icon-veges {
  background-image: url("../assets/images/vegetable.png");
}
.icon-cereals {
  background-image: url("../assets/images/barley.png");
}

.card.h3 {
  margin: 16px 0;
  font-size: 1.25em;
}
.card.p {
  font-size: 1em;
  color: #555;
}
</style>