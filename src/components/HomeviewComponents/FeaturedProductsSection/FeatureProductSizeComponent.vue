<template>
  <div class="box-container">
    <h1>Size:</h1>
    <div class="boxes">
      <div class="size-box">S</div>
      <div class="size-box">M</div>
      <div class="size-box">L</div>
      <div class="size-box">X</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FeatureProductSizeComponent",
});
</script>

<style lang="scss" scoped>
.box-container {
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1rem;
    font-weight: 600;
    color: #23262A;
  }
}
.boxes {
  display: flex;
  width: 190px;
  justify-content: space-between;
}
.size-box {
  height: 40px;
  width: 40px;
  border: 1px solid #23262a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
&:hover {
    background-color: #ff7373;
    color: white;

}
}
</style>
