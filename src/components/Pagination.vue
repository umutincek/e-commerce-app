<template>
  <div>
    <ul class="list-group list-group-horizontal">
      <li
        @click="paginateProducts(i)"
        v-for="i in productLength"
        :key="i"
        class="list-group-item"
      >
        {{ i }}
      </li>
    </ul>
    <select v-model="pPage" class="form-select form-select-lg mb-3">
      <option value="6">6</option>
      <option value="9">9</option>
      <option value="12">12</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["length", "categoryId"],
  data() {
    return {
      pPage: this.$store.state.perPage,
    };
  },
  computed: {
    productLength() {
      return Math.ceil(this.length / this.pPage);
    },
  },
  methods: {
    paginateProducts(page) {
      this.$store.commit("setActivePage", page);
      this.request();
    },
    request() {
      if (this.categoryId) {
        this.$store.dispatch("initFilterProducts", this.categoryId);
      } else {
        this.$store.dispatch("initProducts");
      }
    },
  },
  watch: {
    pPage() {
      this.$store.commit("setPerPage", this.pPage);
      this.request();
    },
  },
};
</script>

<style scoped>
div {
  margin: 50px 0px;
  width: 100%;
}
ul {
  width: 90%;
  float: left;
}
ul li {
  cursor: pointer;
}
select {
  width: 10%;
  float: right;
}
</style>