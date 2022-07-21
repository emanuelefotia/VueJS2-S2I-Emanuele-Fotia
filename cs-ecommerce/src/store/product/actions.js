import axios from "axios"

//Action to get products list

export function getProducts({ commit }) {
    let url = "https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json";
    axios.get(url).then((response) => {
        commit("setProducts", response.data);
    }).catch(error => {
        console.log(error);
    });
}

//Product details

export function productDetails({ commit }, name) {
    let url = "https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json";
    axios.get(url, { params: { name: name } }).then((response) => {
        commit("setProduct", response.data[0]);
    }).catch(function (error) {
        console.log(error);
    });
}

//Add to cart

export function addCart({ commit, getters }, payload) {
    let cart = getters.cart
    cart.push(payload)
    commit("setCart", cart)
}

//Remove from cart

export function removeCart({ commit, getters }, name) {
    let cart = []
    if (name) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.name !== name) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}