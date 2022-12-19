<!-- SRP -- This component is responsble for the color logic/display on the product modal.
Further logic should be implemented as of now the colors are hardcoded-->

<template>
  <div class="box-container">
    <h1>Color:</h1>
      <select class="select">
        <option v-for="color in Colors" :key="color.id">{{color.color}}</option>

      </select>
    </div>
</template>

<script lang="ts">
import { Colors } from "@/models/Colors";
import { defineComponent } from "vue";
export default defineComponent({
  name: "DetailsColor",
  data() {
    return {
      Colors: Colors,
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
