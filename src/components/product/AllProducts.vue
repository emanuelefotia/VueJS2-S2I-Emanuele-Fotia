<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
      <div class="col-md-4" v-for="(product, index) in products" :key="index">
        <div>
          <img @click="handleImageClick(product)" class="card-img-top product-image" :src="product.image">
          <div class="card-body">
            <p class="card-title h1">{{ product.name }}</p>
          </div>
          <p class="h8"><strong> €{{ product.price }}</strong></p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
const store = useStore();
const products = computed(() => store.state.products.all);
store.dispatch("products/getAllProducts");

const handleImageClick = (product) => {
  store.dispatch("products/setShowProduct", {
    product: product,
    value: true
  });
}
</script> 

<style>
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: teal;
  border: teal;
}

.btn:hover {
  background: #00b4b4;
}

input {
  border-radius: 0%;
}

.btn:focus {
  background: teal;
}
</style>