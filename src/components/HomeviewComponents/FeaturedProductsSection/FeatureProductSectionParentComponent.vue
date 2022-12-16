<template>
  <div class="featured-product-container">
    <h1>Featured Dresses</h1>
    <div class="feature-product-cards-container">
      <CardDress />
    </div>
    '
    <h1>Featured Jackets</h1>
    <div class="feature-product-cards-container">
      <CardJackets />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardDress from "@/components/HomeviewComponents/FeaturedProductsSection/CardDress.vue";
import CardJackets from "@/components/HomeviewComponents/FeaturedProductsSection/CardJackets.vue";
import { Dress } from "@/models/interfaces/IDress";

export default defineComponent({
  name: "ParentComponent",
  components: {
    CardDress,
    CardJackets,
  },
  data() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
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
