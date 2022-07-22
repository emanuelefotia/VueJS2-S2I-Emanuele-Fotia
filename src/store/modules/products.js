import axios from 'axios'
import shop from '../../axios/axios'

const state = {
    all: [],
    product: null,
    showProduct: false
}


const getters = {
    getShowProduct(state) {
        return state.showProduct;
    },
    getProduct(state) {
        return state.product
    }
}


const actions = {
    getAllProducts({ commit }) {
        shop.getProducts().then(({ data }) => {
            commit('SET_PRODUCTS', data);
        });

    },
    setShowProduct({ commit }, { product, value }) {
        commit('SET_SHOW_PRODUCT', { product, value });
    }
}

const mutations = {
    SET_PRODUCTS(state, products) {
        state.all = products
    },
    SET_SHOW_PRODUCT(state, { product, value }) {
        state.product = product;
        state.showProduct = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}