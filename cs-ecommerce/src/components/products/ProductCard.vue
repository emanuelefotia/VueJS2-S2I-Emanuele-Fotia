<template>
  <div class="card">
    <img :src="product.image" class="card-img-top" />
    <div class="card-body">
      <router-link :to="'/details/' + product.name">
        <h5 class="card-title text-left">{{ product.name }}</h5>
      </router-link>
      <p class="card-text text-left"><strong>{{ product.price }}€ </strong></p>

    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["product"]
};
</script>
<style>
a{
  color: black;
}
</style>