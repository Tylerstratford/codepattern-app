<!-- SRP -  Responsbile for displaying an image
    OCP - Open to extension when imported as the component carries a "prop" where a new image can be replaced/used  -->

<template>
  <img class="image" :src="image" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeviewImageComponent",
  props: {
    image: String,
  },
});
</script>

<style lang="scss" scoped>
.image {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
