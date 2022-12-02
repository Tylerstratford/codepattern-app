<template>
  <div class="box-container">
    <h1>Qty:</h1>
    <div class="qnt-button">
      <div @click="DecreaseCount" class="plus-minus">
        <div class="minus">-</div>
      </div>
      <div class="qnt-counter">{{ counter }}</div>
      <div @click="IncreaseCount" class="plus-minus">+</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FeatureProductCardQuantity",

  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    IncreaseCount() {
      this.counter += 1;
    },
    DecreaseCount() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
    },
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

.qnt-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
  .plus-minus {
    font-size: 1.5rem;
    border: 1px solid black;
    cursor: pointer;
    width: 25%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    &:hover {
      font-size: 1.9rem;
    }
  }
  .qnt-counter {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    height: 40px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
