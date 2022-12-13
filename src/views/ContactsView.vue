<template>
  <div class="contacts-container">
    <h1>Contacts</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "ContactsView",
});
</script>

<style lang="scss" scoped>
.contacts-container {
  width: 95%;
  height: 90vh;
  background-color: black;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h1 {
    color: white;
    font-size: 2rem;
    transition: all 0.2s ease;
  }
}

.contacts-container:hover h1 {
  font-size: 5rem;
  padding: 1rem;
  border: 1px solid white;
}
</style>
