<template>
  <div class="categories-container">
    <div class="left">
      <h1>Shoes</h1>
    </div>
    <div class="right">
      <h1>Dresses</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "CategoriesView",
});
</script>

<style lang="scss" scoped>
.categories-container {
  width: 95%;
  height: 90vh;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  transition: all 0.2s ease;

  .left {
    background-color: black;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;


    h1 {
      margin: 0;
      color: white;
      size: 2rem;
      transition: all 0.2s ease;
    }
  }
  .left:hover h1 {
    font-size: 5rem;
    padding: 1rem;
    border: 1px solid white;
  }

  .right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

  }
  h1 {
      margin: 0;
      color: black;
      size: 2rem;
      transition: all 0.2s ease;
    }

    .right:hover h1 {
    font-size: 5rem;
    padding: 1rem;
    border: 1px solid black;
    /* color: white; */
  }
}
</style>
