<template>
  <div class="container">
    <h2 v-if="carts.length === 0" align="center">Sepetinizde ürün bulunmamaktadır.</h2>
    <table v-else class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Ürün Resmi</th>
          <th scope="col">Ürün Adı</th>
          <th scope="col">Adet</th>
          <th scope="col">Fiyat</th>
          <th scope="col">İşlem</th>
        </tr>
      </thead>
      <tbody>
        <cart-list
          v-for="cart in carts"
          :key="cart.id"
          :cart="cart"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import CartList from "@/components/CartList";
import { mapGetters } from 'vuex';

export default {
  components: {
    cartList: CartList,
  },
  computed: {
    ...mapGetters({
      carts: "getShoppingCart",
    }),
  },
  created() {
    this.$store.dispatch("initShoppingCart");
  },
};
</script>

<style lang="scss" scoped>
</style>