<template>
  <div class="navbar-background">
    <div class="navbar-container">
      <NavbarCompanyLogo />
      <UserRoutes />
      <NavbarSocials />
    </div>
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
.navbar-background {
  width: 100%;
  background-color: #e6e6e6;
  height: 5%;
  display: flex;
  align-items: center;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  height: 5%;
}
</style>
