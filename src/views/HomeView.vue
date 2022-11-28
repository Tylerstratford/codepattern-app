<template>
<HomeviewSectionOneParentComponent />
<HomeviewSectionTwoParentComponent />
</template>

<script lang="ts">
import HomeviewSectionOneParentComponent from "@/components/HomeviewComponents/HomeviewSectionOneParentComponent.vue";
import HomeviewSectionTwoParentComponent from "@/components/HomeviewComponents/HomeviewSectionTwoParentComponent.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    HomeviewSectionOneParentComponent,
    HomeviewSectionTwoParentComponent
  },

});
</script>

<style lang="scss" scoped>

</style>
