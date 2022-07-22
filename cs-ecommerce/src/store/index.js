import Vuex from "vuex";
import products from './modules/products';
import cart from './modules/cart';
import auth from './modules/auth';
import createPersistedState from "vuex-persistedstate";

export default Vuex({
    modules: {
        auth, 
        products, 
        cart
    }, 
    plugins: [createPersistedState()]
})