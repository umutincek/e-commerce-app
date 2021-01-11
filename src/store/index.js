import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    categories: [],
    products: [],
    productDetail: [],
    shopping_cart: [],
    baseUrl: "http://localhost:4000",
    activePage: 1,
    perPage: 6,
  },
  mutations: {
    setActivePage(state, activePage) {
        state.activePage = activePage;
    },
    setPerPage(state, perPage) {
        state.perPage = perPage;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProductDetail(state, productDetail) {
      state.productDetail = productDetail;
    },
    setShoppingCart(state, carts) {
      state.shopping_cart = carts;
    },
    setCount(state, product) {
      let index = state.shopping_cart.findIndex(
        (cart) => cart.id === product.id
      );
      state.shopping_cart[index] = product;
    },
    saveProduct(state, product) {
      state.products.push(product);
    },
    saveToCart(state, product) {
      state.shopping_cart.push(product);
    },
    removeFromCart(state, productId) {
      state.shopping_cart = state.shopping_cart.filter(
        (cart) => cart.id !== productId
      );
    },
  },
  actions: {
    initCategories({ commit, state }) {
      axios
        .get(`${state.baseUrl}/categories`)
        .then((response) => {
          commit("setCategories", response.data);
        })
        .catch((err) => console.log(err));
    },
    initProducts({ commit, state }) {
      axios
        .get(
          `${state.baseUrl}/products?_page=${state.activePage}&_limit=${state.perPage}`
        )
        .then((response) => {
          commit("setProducts", response.data);
        })
        .catch((err) => console.log(err));
    },
    initFilterProducts({ commit, state }, categoryId) {
      axios
        .get(
          `${state.baseUrl}/products?categoryId=${categoryId}&_page=${state.activePage}&_limit=${state.perPage}`
        )
        .then((response) => {
          commit("setProducts", response.data);
        })
        .catch((err) => console.log(err));
    },
    initProductDetail({ commit, state }, productId) {
      axios
        .get(`${state.baseUrl}/products?id=${productId}`)
        .then((response) => {
          commit("setProductDetail", response.data);
        })
        .catch((err) => console.log(err));
    },
    initShoppingCart({ commit, state }) {
      axios
        .get(`${state.baseUrl}/shopping-cart`)
        .then((response) => {
          commit("setShoppingCart", response.data);
        })
        .catch((err) => console.log(err));
    },
    saveProduct({ commit, state }, product) {
      axios
        .post(`${state.baseUrl}/products`, product)
        .then((response) => {
          commit("saveProduct", response.data);
        })
        .catch((err) => console.log(err));
    },
    saveToCart({ commit, state }, product) {
      axios
        .post(`${state.baseUrl}/shopping-cart`, {
          ...product,
          count: 1,
        })
        .then((response) => {
          commit("saveToCart", response.data);
        })
        .catch((err) => console.log(err));
    },
    removeFromCart({ commit, state }, productId) {
      axios
        .delete(`${state.baseUrl}/shopping-cart/${productId}`)
        .then((response) => {
          console.log(response);
          commit("removeFromCart", productId);
        })
        .catch((err) => console.log(err));
    },
    editCount({ commit, state }, product) {
      axios
        .put(`${state.baseUrl}/shopping-cart/${product.id}`, product)
        .then((response) => {
          commit("setCount", response.data);
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    getCategories: (state) => state.categories,
    getProducts: (state) => state.products,
    getProductDetail: (state) => state.productDetail,
    getShoppingCart: (state) => state.shopping_cart,
  },
});
