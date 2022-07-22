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