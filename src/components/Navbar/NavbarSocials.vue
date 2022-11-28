<template>
  <div class="social-icons-container">
    <NavbarSocialIcon icon="teenyicons:search-outline" />
    <NavbarSocialIcon icon="teenyicons:git-compare-outline" />
    <NavbarSocialIcon icon="bi:suit-heart" />
    <NavbarSocialIcon icon="clarity:shopping-bag-line" />
  </div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import NavbarSocialIcon from "@/components/Navbar/NavbarSocialIcon.vue";
export default {
  name: "NavbarSocials",
  components: {
    Icon,
    NavbarSocialIcon,
  },
};
</script>

<style lang="scss" scoped>
.social-icons-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 15%;
}
.navbar-icons {
  color: #222529;
  font-size: 1rem;
}
</style>
