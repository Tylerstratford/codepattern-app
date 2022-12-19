<!-- Displaying the landing or home page of the website. 
    In a sense this follows SRP - as it is responsible for displaying the home page and it utilizes components so that the code is clean -->

<template>
<HomeviewSectionOneParentComponent />
<HomeviewSectionTwoParentComponent />
<FeatureProductSectionParentComponent />
</template>

<script lang="ts">
import HomeviewSectionOneParentComponent from "@/components/HomeviewComponents/HomeviewSectionOneParentComponent.vue";
import HomeviewSectionTwoParentComponent from "@/components/HomeviewComponents/HomeviewSectionTwoParentComponent.vue";
import FeatureProductSectionParentComponent from "@/components/HomeviewComponents/FeaturedProductsSection/FeatureProductSectionParentComponent.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    HomeviewSectionOneParentComponent,
    HomeviewSectionTwoParentComponent,
    FeatureProductSectionParentComponent,
  },

});
</script>

<style lang="scss" scoped>

</style>
