<template>
  <div class="container">
    <Nav />
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <ul v-for="item in cart" :key="item.product.name"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <li>
            <div>
              <img :src="item.product.image" class="card-img-top" />
              <p class="h4">{{ item.product.name }}</p>
              <div>

                <ul class="list-group list-group-horizontal list-group-flush">
                  <li class="list-group-item"><img @click="handleDecButton(item.product)"
                      src="https://img.icons8.com/material-rounded/24/000000/filled-minus-2-math.png" /></li>
                  <li class="list-group-item">
                    <p class="">{{ item.quantity }}
                    </p>
                  </li>
                  <li class="list-group-item"> <img @click="handleIncButton(item.product)"
                      src="https://img.icons8.com/material-rounded/24/000000/filled-plus-2-math.png" />
                  </li>
                  <li class="list-group-item">     <img @click="handleRemoveButton(item.product)"
                  src="https://img.icons8.com/material/24/000000/circled-x.png" />

                  </li>
                </ul>
                <!-- Remove from cart -->

            
              </div>
              <div class="mr-2">
                <p>€ {{ item.product.price }} x {{ item.quantity }} = €{{
                    singleItemTotal(item)
                }}</p>
              </div>
            </div>
          </li>

        </ul>
        <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <p class="h4">Total</p>
          <p v-if="!discount()">€{{ total }}</p>
          <div v-if="discount()">
            <p class=""> -10% </p>
            <p>€{{ total }} </p>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block mt-4">Checkout</button>

      </div>
    </div>
  </div>

</template>

<script setup >
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import Nav from "../components/Nav.vue";
const store = useStore();
const cart = computed(() => store.getters["cart/cartProducts"]);
const discount = () => {
  return store.getters["cart/checkDiscount"];
};
const total = computed(() => store.getters["cart/cartTotalPrice"]);
const handleRemoveButton = (product) => {
  store.dispatch("cart/removeProduct", product);
};
const handleIncButton = (product) => {
  store.dispatch("cart/addProductToCart", { product });
};
const handleDecButton = (product) => {
  store.dispatch("cart/decProductQuantity", product);
};
const singleItemTotal = (item) => {
  computed(() => { });
  return parseFloat(item.quantity * item.product.price).toFixed(2);
};
</script>

<style>
ul {
  list-style-type: none;
}

.row{
  padding-top: 5rem;
}
</style>
