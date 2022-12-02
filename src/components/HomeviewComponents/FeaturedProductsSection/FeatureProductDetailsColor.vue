<template>
  <div class="box-container">
    <h1>Color:</h1>
      <select class="select"  v-model="selected">
        {{selected}}
        <option>Red</option>
        <option>Navy</option>
        <option>Lavender</option>
        <option>...</option>
      </select>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FeatureProductDetailsColor",
  data() {
    return {
      selected: "",
    };
  },
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
    color: #23262a;
  }
}

.select {
    cursor: pointer;
    width: 190px;
    height: 40px;
    font-size: 1rem;
    font-weight: 400;
}
.size-box {
  height: 40px;
  width: 40px;
  border: 2px solid #23262a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}
</style>
