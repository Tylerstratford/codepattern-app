<template>
  <NavbarContainer />
  <router-view />
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from "@/controllers/UserRoutes.vue";
import NavbarContainer from "@/components/Navbar/NavbarContainer.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    NavbarContainer
  },
  setup() {
    
  },
})
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Poppins", sans-seri;
  text-decoration: none;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
