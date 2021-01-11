<template>
  <div class="container">
    <div class="card mb-3" style="width: 100%">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="detail.imageUrl" :alt="detail.title" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ detail.title }}</h5>
            <p class="card-text">
              {{ detail.description }}
            </p>
            <p class="card-text">
              <b> {{ detail.price }} TL </b>
            </p>
            <button
              @click.stop="addToCart"
              v-if="!isCart"
              class="btn btn-primary"
              style="width: 100%"
            >
              Sepete Ekle
            </button>
            <button
              @click.stop="removeFromCart"
              v-else
              class="btn btn-danger"
              style="width: 100%"
            >
              Sepetten Çıkar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["detail"],
  created() {
    this.$store.dispatch("initShoppingCart");
  },
  computed: {
    isCart() {
      return Boolean(this.carts.find((item) => item.id === this.detail.id));
    },
    ...mapGetters({
      carts: "getShoppingCart",
    }),
  },
  methods: {
    addToCart() {
      this.$store.dispatch("saveToCart", this.detail);
    },
    removeFromCart() {
      this.$store.dispatch("removeFromCart", this.detail.id);
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  margin-top: 50px;
  cursor: pointer;
}
.card-text {
  margin-top: 50px;
}
img {
  width: 350px;
  height: 500px;
}
</style>