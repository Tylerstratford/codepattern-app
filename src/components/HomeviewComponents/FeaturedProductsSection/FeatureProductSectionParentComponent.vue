<template>
  <div class="featured-product-container">
    <h1>Featured Products</h1>
    <div class="feature-product-cards-container">
      <FeatureProductCard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FeatureProductCard from "@/components/HomeviewComponents/FeaturedProductsSection/FeatureProductCard.vue";
export default defineComponent({
  name: "FeatureProductSectionParentComponent",
  components: {
    FeatureProductCard,
  },
});
</script>

<style lang="scss" scoped>
/* Define style in scss here */
.featured-product-container {
  height: 750px;
  width: 1110px;
  margin: 0 auto;
  margin-top: 3%;


  h1 {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 1%;
  }

  .feature-product-cards-container {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 20px;
  }
}
</style>
