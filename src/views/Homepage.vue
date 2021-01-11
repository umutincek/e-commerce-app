<template>
  <div class="container">
    <div class="row">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <pagination :length="length" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";

export default {
  components: {
    productCard: ProductCard,
    pagination: Pagination,
  },
  data() {
    return {
      length: null,
    };
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    }),
  },
  created() {
    axios
      .get(`http://localhost:4000/products`)
      .then((response) => {
        this.length = response.data.length;
      })
      .catch((err) => console.log(err));
    this.$store.dispatch("initProducts");
  },
  watch: {
    products() {
      this.$store.commit("setActivePage", 1);
    },
  },
};
</script>

<style scoped>
</style>