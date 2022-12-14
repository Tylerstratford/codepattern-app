<template>
  <div class="container">
    <h1>Add Product</h1>
    <p>(Admin only)</p>
  </div>

  <div class="form-container">
    <form @submit.prevent>
      <div class="column">
        <label for="name">Name</label>
        <input
          name="name"
          class="input-medium"
          type="text"
          placeholder="Enter product name"
        />
      </div>
      <div class="column select">
        <label>Category</label>
        <select v-model="Category">
          <option
            class="select-options"
            v-for="category in Categories"
            :key="category.id"
            :value="category.category"
          >
            {{ category.category }}
          </option>
        </select>
      </div>
      <div v-if="Category === 'Dress'" class="column select">
        <label>Occasion</label>
        <select v-model="Occasion">
          <option
            class="select-options"
            v-for="occasion in Occasions"
            :key="occasion.id"
            :value="occasion.occasion"
          >
            {{ occasion.occasion }}
          </option>
        </select>
      </div>
      <div v-if="Category === 'Jacket'" class="column select">
        <label>Season</label>
        <select v-model="Season">
          <option
            class="select-options"
            v-for="season in Seasons"
            :key="season.Id"
            :value="season.Season"
          >
            {{ season.Season }}
          </option>
        </select>
      </div>
      <div class="column">
        <label>Description</label>
        <textarea
          placeholder="Enter a description"
          class="text-area"
          name=""
          id=""
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="column">
        <label>Image Url</label>
        <input class="input-medium" placeholder="Enter Url" />
      </div>

      <div class="flex price-container">
        <div class="column">
          <label>Price</label>
          <input placeholder="Enter price" />
        </div>
        <div class="column">
          <label>On sale?</label>
          <div class="sale-container">
            <label>Yes</label>
            <input type="checkbox" class="checkbox" />
            <label>No</label>
            <input type="checkbox" class="checkbox" />
          </div>
          <div></div>
        </div>
        <div class="column">
          <label class="column">Sale Procent</label>
          <input placeholder="Enter procent" />
        </div>
      </div>
      <div class="flex">
        <div class="column short-inputs">
          <label>Size</label>
          <input placeholder="Enter size" />
        </div>
        <div class="column short-inputs">
          <label>Color</label>
          <input placeholder="Enter color" />
        </div>
      </div>
      <StandardButton class="std-button-two" :button-text="btnText" />
    </form>
    <div class="image-container">
      <h1>Image</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import StandardButton from "@/components/Buttons/StandardButton.vue";
import { Seasons } from "@/models/Seasons";
import { Categories } from "@/models/CategoriesModel";
import { Occasions } from "@/models/Occasions";
export default defineComponent({
  name: "ProductsView",
  components: {
    StandardButton,
  },
  data() {
    return {
      btnText: "Submit",
      Seasons: Seasons,
      Season: null,
      Categories: Categories,
      Category: null,
      Occasions: Occasions,
      Occasion: null,
      newProduct: Object,
      newDress: {},
      newJacket: {},
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
  margin: 0 auto;
  margin-top: 1rem;
}

.form-container {
  width: 95%;
  margin: 0 auto;
  margin-top: 1rem;
  height: auto;
  display: flex;
  justify-content: space-between;

  form {
    width: 50%;
  }

  .image-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex {
    display: flex;
  }

  .column {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
  }

  label {
    margin-bottom: 0.2rem;
  }
  input {
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }

  .input-medium {
    width: 40%;
  }
}
.text-area {
  width: 40%;
  margin-bottom: 1rem;
  resize: none;
  padding-left: 0.5rem;
  font-size: 16px;
  font-family: "Poppins", sans-seri;
}
.checkbox {
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.select {
  width: 20%;
  margin-bottom: 1rem;
}

.short-inputs {
  margin-right: 1rem;
  width: 25%;
}

.sale-container {
  display: flex;
  align-items: center;
  input {
    margin-right: 1rem;
  }
  label {
    margin-right: 1rem;
  }
}

.category-checkbox {
  width: 15%;
  display: flex;
  justify-content: space-between;
}

.price-container {
  display: flex;
  width: 75%;
}

li {
  list-style-type: none;
}
</style>
