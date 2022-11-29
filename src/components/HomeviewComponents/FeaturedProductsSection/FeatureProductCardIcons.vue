<template>
  <div class="feature-product-card-icons-container">
    <NavbarSocialIcon class="icons" icon="bi:suit-heart" />
    <NavbarSocialIcon class="icons" icon="teenyicons:git-compare-outline" />
    <NavbarSocialIcon class="icons" icon="clarity:shopping-bag-line" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarSocialIcon from "@/components/Navbar/NavbarSocialIcon.vue";

export default defineComponent({
    name: "FeatureProductCardIcons",
    components: {
    NavbarSocialIcon,
    
  }
});
</script>

<style lang="scss" scoped>
/* Define style in scss here */

.feature-product-card-icons-container {
  width: 45px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


}
</style>
