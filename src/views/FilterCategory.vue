<template>
  <div class="container">
    <div class="row">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <pagination :length="length" :categoryId="categoryId" />
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
  created() {
    this.productLength();
    this.$store.dispatch("initFilterProducts", this.categoryId);
  },
  methods: {
    productLength() {
      axios
        .get(`http://localhost:4000/products?categoryId=${this.categoryId}`)
        .then((response) => {
          this.length = response.data.length;
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryId;
    },
    ...mapGetters({
      products: "getProducts",
    }),
  },
  watch: {
    categoryId() {
      this.$store.commit("setActivePage", 1);
      this.productLength();
      this.$store.dispatch("initFilterProducts", this.categoryId);     
    },
  },
};
</script>

<style lang="scss" scoped>
</style>