<template>
  <div>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li
            v-for="category in categories"
            :key="category.id"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              active-class="active"
              :to="`/category/${category.id}`"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      categories: "getCategories",
    }),
  },
  created() {
    this.$store.dispatch("initCategories");
  },
};
</script>

<style scoped>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  width: 100%;
  margin-top: 0px;
  z-index: 100; /* Behind the navbar */
  padding: 20px 30px; /* Height of navbar */
  /* box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1); */
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  /* background-color: rgba(0, 0, 0, .25); */
  /* box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25); */
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  /* background-color: rgba(255, 255, 255, .1); */
  /* border-color: rgba(255, 255, 255, .1); */
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
</style>