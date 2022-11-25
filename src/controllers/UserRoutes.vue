<template>
  <div class="links-contianer">
    <nav v-for="route in routes" :key="route.routeId">
      <router-link class="nav-links" :to="route.route">{{
        route.title
      }}</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserRoute } from "@/models/RoutesModel";
export default defineComponent({
  name: "Navbar",
  components: {},
  data() {
    return {
      routes: UserRoute,
    };
  },
});
</script>

<style lang="scss" scoped>
.links-contianer {
  display: flex;
  justify-content: space-between;
}
.nav-links {
  text-decoration: none;
  color: #222529;
  font-weight: 600;
  padding-left: 2rem;

  &:hover,
  &:focus {
    color: #ff7373;
  }
}
</style>
