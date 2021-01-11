<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Products</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                active-class="active"
                style="cursor: pointer"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/add-product"
                class="nav-link"
                active-class="active"
                style="cursor: pointer"
                >Add Product</router-link
              >
            </li>
          </ul>
          <div class="d-flex scart" :data-count="length">
            <router-link to="/shopping-cart">
              <i
                class="fa fa-shopping-cart"
                style="font-size: 3em; cursor: pointer; color: black"
              ></i>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      carts: "getShoppingCart",
    }),
    length() {
      return this.carts.length;
    }
  },
};
</script>

<style scoped>
.scart {
  position: absolute;
  right: 10rem;
  top: 0.3rem;
  cursor: pointer;
}
.scart:after {
  content: attr(data-count);
  position: absolute;
  background: #ff6600;
  height: 1.7rem;
  top: 0.8rem;
  right: 1.5rem;
  width: 1.7rem;
  text-align: center;
  line-height: 1.7rem;
  font-size: 0.8rem;
  border-radius: 50%;
  color: white;
  border: 1px solid #ff6600;
  font-family: sans-serif;
  font-weight: bold;
}
</style>