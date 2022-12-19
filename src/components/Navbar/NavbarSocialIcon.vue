<!-- SRP Reusable "icon" that can be use throughout the website
      OCP - Also OCP as one can extend this to other partts of the website and edit what Icon is used -->
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
  background: white;
  border-radius: 50%;
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    .navbar-icons {
      color: #ff7373;
    }
  }
}
</style>
