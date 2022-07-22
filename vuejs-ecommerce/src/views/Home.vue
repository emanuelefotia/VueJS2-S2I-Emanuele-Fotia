<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <Nav class="navbar-brand" />
        </nav>
        <div class="page-container">
            <Products v-if="!showProduct()" />
            <SingleProduct v-if="showProduct()" />
        </div>
    </div>
</template>
<script setup>
import Nav from "../components/Nav.vue";
import Products from "../components/product/ProductsList.vue";
import SingleProduct from "../components/product/SingleProduct.vue";
import { useStore } from "vuex";
const store = useStore();
const showProduct = () => {
    return store.getters["products/getShowProduct"];
};
</script>


<!--<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <router-link class="navbar-brand" to="/">CS-eCommerce</router-link>
        <div class="ml-auto">
          <div v-if="user.photoURL">
            <img
              :src="user.photoURL"
              class="img-thumbnail profile-image"
              alt
            />
            <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
              <img
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="50"
                alt
              />
              <span class="badge badge-danger badge-pill">{{ cart.length }}</span>
            </router-link>
          </div>
          <router-link v-else class="btn btn-primary my-2 my-sm-0" to="/login">Login</router-link>
        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>-->

<style>
nav {
    background-color: teal;
}

.navbar-brand {
    font-weight: bold;
    font-size: 25px;
    /* font-family: Comic; */
    color: #ffffff !important;
}

.page-container {
    padding-top: 81px;
}

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