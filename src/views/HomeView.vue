<template>
  <div class="homeView-background">
    <div class="homeView-container">
      <HomeviewImageComponent
        src="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf79.png"
      />
      <div class="homeview-text-container">
        <div>
          <h1>
            SALE UP <br />
            To 50% Off
          </h1>
          <h4>Online shopping free home delivery over $100</h4>
          <StandardButton />
        </div>
      </div>
      <HomeviewImageComponent
        src="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf7a.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
import HomeviewImageComponent from "@/components/HomeviewComponents/HomeviewImageComponent.vue";
import StandardButton from "@/components/Buttons/StandardButton.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    HomeviewImageComponent,
    StandardButton,
  },
});
</script>

<style lang="scss" scoped>
.homeView-background {
  width: 100%;
  /* height: 95vh; */
  background-color: #e6e6e6;
}

.homeView-container {
  width: 95%;
  display: flex;
  /* grid-template-columns: 1fr 1fr 1fr; */
  justify-content: space-between;
  height: 85vh;
  margin: 0 auto;
  padding-top: 3rem;
  border: 1px solid black;
}

.homeview-text-container {
  /* border: 1px solid black; */
  width: auto;
  text-align: center;
  display: flex;
  align-items: center;
  align-content: center;
  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin: 0;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 300;
  }
}

img {
  width: 30%;
  border: 1px solid black;
  object-fit:contain;
}
</style>
