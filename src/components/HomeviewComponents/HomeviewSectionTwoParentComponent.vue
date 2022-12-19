<!-- SRP - This component is responsible for displaying the second showcase displayed on the website. It incorporates several other
      components making the code easier to read -->
<template>
  <div class="homeview-section-two-container">
    <div class="section-two-left">
      <div class="section-two-inner-left">
        <h1>
          Winter Clearance <br />
          Up to 70% Off!
        </h1>
        <h4>
          {{ leftBoxText }}
        </h4>
        <StandardButton class="std-button-two" :buttonText="text" />
      </div>
      <div class="section-two-inner-right">
        <HomeviewImageComponent
          class="image"
          src="https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-red-dress_23-2149553638.jpg?w=740&t=st=1669639716~exp=1669640316~hmac=fc8d43cd11c9d1e50d050edd4ef1395c021a57928169a208baa91f936e244dfc"
        />
      </div>
    </div>
    <div class="section-two-right">
      <div class="section-two-inner-left">
        <h1 style="margin-top: 85px">New Arrivals</h1>
        <StandardButton
          style="margin-top: 45px"
          class="std-button-two"
          :buttonText="text"
        />
      </div>
      <div class="section-two-inner-right">
        <HomeviewImageComponent
          class="image"
          src="https://img.freepik.com/free-photo/gypsum-bust-coral-background-with-geometric-shapes_23-2149588231.jpg?w=1380&t=st=1669641013~exp=1669641613~hmac=621b13b95a5665b2de4006701453a173b6d00eb47ec92b76dedcce0719ffb0fe"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StandardButton from "../Buttons/StandardButton.vue";
import HomeviewImageComponent from "./HomeviewImageComponent.vue";
export default defineComponent({
  components: {
    StandardButton,
    HomeviewImageComponent,
  },
  name: "HomeviewSectionTwoParentComponent",
  data() {
    return {
      text: "SHOP NOW",
      leftBoxText:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae abillo inventore.",
    };
  },
});
</script>

<style lang="scss" scoped>
/* Define style in scss here */
.homeview-section-two-container {
  height: 560px;
  width: 95%;
  margin: 0 auto;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;

  .section-two-left {
    background-color: #cac0be;
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
}

.section-two-right {
  display: flex;
  justify-content: space-between;
}

.section-two-inner-right {
  width: 50%;
  .image {
    width: 100%;
    object-fit: cover;
  }
}
.section-two-inner-left {
  width: 50%;
  padding: 2rem;
  margin-top: auto;
  margin-bottom: auto;

  h1 {
    font-size: 2.8rem;
    font-weight: 800;
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 300;
  }
}

.section-two-right {
  background-color: #e7e7e7;
  height: 100%;
  width: 35%;
}
</style>
