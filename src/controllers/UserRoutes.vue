<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/categories">Categories</router-link>
    <router-link to="/products"> Products </router-link>
    <router-link to="/contacts"> Contracts </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navbar",
  components: {},
});
</script>

<style lang="scss" scoped></style>
