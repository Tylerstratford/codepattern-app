<template>
  <div class="navbar-container">
    <NavbarCompanyLogo />
    <UserRoutes />
    <NavbarSocials />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import UserRoutes from "@/controllers/UserRoutes.vue";
import NavbarCompanyLogo from "./NavbarCompanyLogo.vue";
import NavbarSocials from "@/components/Navbar/NavbarSocials.vue";
export default defineComponent({
  name: "NavbarParent",
  components: {
    UserRoutes,
    NavbarCompanyLogo,
    NavbarSocials,
  },
});
</script>

<style lang="scss" scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 95%;
  border: 1px solid black;
  height: 45px;
}
</style>
