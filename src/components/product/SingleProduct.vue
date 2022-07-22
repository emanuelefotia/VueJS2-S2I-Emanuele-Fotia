<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="card" style="width: 50rem;">

        <div @click="handleClose" aria-labelledby="modal-title" role="dialog" aria-modal="true"></div>
        <span aria-hidden="true">&#8203;</span>
        <img class="card-img-top" :src="product.image" alt />

        <div class="card-body">
          <div class="card-title h1">{{ product.name }}</div>
          <p class="card-text">{{ product.description }}</p>
          <div>
            <p class="h8"><strong>€{{ product.price }}</strong></p>
          </div>
          <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <button type="button" v-if="!checkInCart(product)" @click="handleAddToCartButton(product)"
              :disabled="checkInCart(product)" class="btn btn-outline-warning" style="color:black">
              Add To Cart
            </button>
            <button type="button" v-if="checkInCart(product)" @click="handleAddToCartButton(product)"
              :disabled="checkInCart(product)" class="btn btn-outline-warning" style="color:black">
              Already in Cart
            </button>
            <button type="button" @click="handleClose" class="btn btn-outline-warning" style="color:black">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<template>
<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>
</template>-->



<script setup>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
const store = useStore();
const product = computed(() => {
  return store.getters["products/getProduct"];
});
const handleClose = (product) => {
  store.dispatch("products/setShowProduct", {
    product: null,
    value: false,
  });
};
const checkInCart = (product) => {
  return store.getters["cart/checkProductInCart"](product);
};
const handleAddToCartButton = (product) => {
  store.dispatch("cart/addProductToCart", {
    product: product,
    quantity: 1,
  });
};
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
</style>