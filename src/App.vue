<template>
<div>
  <app-navbar />
  <div class="row">
    <div class="col-md-2">
      <app-sidebar />
    </div>
    <div class="col-md-10">
      <router-view />
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default {
  components: {
    appNavbar : Navbar,
    appSidebar : Sidebar,
  },
  name: 'App',

}
</script>

<style>

</style>
