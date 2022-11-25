<template>
  <div class="circle">
    <Icon class="navbar-icons" :icon="icon" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { Icon } from "@iconify/vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    icon: String,
  },
});
</script>

<style lang="scss" scoped>
.circle {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 50%;
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.7rem;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    .navbar-icons {
      color: #ff7373;
    }
  }
}
</style>
