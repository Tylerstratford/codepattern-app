<!-- SRP A standard button that can be imported and reused throughout the App.  -->
<!-- OCP - This component can even be extended and restyled once imported -->

<template>
  <button>{{ buttonText }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "StandardButton",
  props: [
    "color",
    "backgroundColor",
    "width",
    "height",
    "outline",
    "border",
    "size",
    "buttonText",
  ],
});
</script>

<style lang="scss" scoped>
.std-button-open {
  cursor: pointer;
  color: v-bind(color);
  background-color: v-bind(backgroundColor);
  width: v-bind(width);
  height: v-bind(height);
  outline: v-bind(outline);
  border: v-bind(border);
  size: v-bind(size);
  cursor: pointer;
}

.std-button-one {
  background-color: #ff737394;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  outline: none;
  border: none;
  width: 188px;
  height: 60px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    font-size: 1.1rem;
    background-color: #ff7373;
  }
}

.std-button-two {
  background-color: black;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  outline: none;
  border: none;
  width: 188px;
  height: 60px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    font-size: 1.1rem;
    background-color: rgba(0, 0, 0, 0.553);
  }
}
</style>
