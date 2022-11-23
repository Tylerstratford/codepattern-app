<template>
  <div class="navbar-container">
    <NavbarLogo />
    <UserRoutes />
    <NavbarSocials />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import UserRoutes from "@/controllers/UserRoutes.vue";
import NavbarLogo from "@/components/Navbar/NavbarLogo.vue";
import NavbarSocials from "@/components/Navbar/NavbarSocials.vue";
export default defineComponent({
  name: "NavbarContainer",
  components: {
    UserRoutes,
    NavbarLogo,
    NavbarSocials,
  },
});
</script>

<style lang="scss" scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border: 1px solid black;
  height: 45px;
}
</style>
