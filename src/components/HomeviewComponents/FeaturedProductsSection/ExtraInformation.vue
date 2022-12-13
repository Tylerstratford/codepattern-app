<template>
  <div class="details">
    <h1
      @click="showDetails(descriptionText)"
      :class="Description ? 'selected' : ''"
    >
      Description
    </h1>
    <h1
      @click="showDetails(additionalText)"
      :class="Additional ? 'selected' : ''"
    >
      Additional
    </h1>
    <h1 @click="showDetails(shoppingText)" :class="Shopping ? 'selected' : ''">
      Shopping & Returns
    </h1>
    <h1 @click="showDetails(reviewsText)" :class="Reviews ? 'selected' : ''">
      Shopping & Returns
    </h1>
  </div>
  <div>
    <p v-if="Description">{{ descriptionText }}</p>
    <p v-if="Additional">{{ additionalText }}</p>
    <p v-if="Shopping">{{ shoppingText }}</p>
    <p v-if="Reviews">{{ reviewsText }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ExtraInformation",
  data() {
    return {
      Description: true,
      Additional: false,
      Shopping: false,
      Reviews: false,
      descriptionText: "Description",
      additionalText: "Additional",
      shoppingText: "Shopping",
      reviewsText: "Reviews",
    };
  },

  methods: {
    showDetails(details: string) {
      switch (details) {
        case "Description":
          this.Description = true;
          this.Additional = false;
          this.Shopping = false;
          this.Reviews = false;
          break;

        case "Additional":
          this.Description = false;
          this.Additional = true;
          this.Shopping = false;
          this.Reviews = false;
          break;

        case "Shopping":
          this.Description = false;
          this.Additional = false;
          this.Shopping = true;
          this.Reviews = false;
          break;

        case "Reviews":
          this.Description = false;
          this.Additional = false;
          this.Shopping = false;
          this.Reviews = true;
          break;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
/* Define style in scss here */

.details {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 50%;
  h1 {
    font-size: 1.2rem;
    cursor: pointer;
    color: #616365;
    font-weight: 400;
    border-bottom: 1px solid transparent;
    &:hover {
      color: #ff7373;
      border-bottom: 1px solid #ff7373;
    }
  }

  .selected {
    border-bottom: 1px solid #ff7373;
    color: #ff7373;
  }
}
</style>
