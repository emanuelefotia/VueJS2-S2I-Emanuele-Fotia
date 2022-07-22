<template>
  <div>
    <nav id="store" class="navbar navbar-expand-lg navbar-dark fixed-top">
      <!-- Home -->
      <router-link :to="{ name: 'Home' }" class="navbar-brand" style="padding-left: 1rem;">
        Store
      </router-link>

      <div class="ml-auto">
        <!-- Cart -->
        <router-link :to="{ name: 'Cart' }" class="btn btn-primary my-2 my-sm-0">
          <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" width="50" alt />
          <span class="badge badge-danger badge-pill">{{ cartItemCount }}</span>
        </router-link>
      </div>
    </nav>
  </div>

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const cartItemCount = computed(() => store.getters["cart/cartItemCount"]);
const isLoggedIn = computed(() => store.getters["auth/isLoggedIn"]);
</script>