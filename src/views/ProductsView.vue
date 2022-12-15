<template>
  <div class="container">
    <h1>Add Product</h1>
    <p>(Admin only)</p>
  </div>

  <div class="form-container">
    <form ref="form" @submit.prevent="onSubmit">
      <div class="column">
        <label for="name">Name</label>
        <input
          v-model="newProduct.productName"
          class="input-medium"
          type="text"
          placeholder="Enter product name"
        />
      </div>
      <div class="column select">
        <label>Category</label>
        <select v-model="newProduct.categoryName">
          <option
            v-for="category in Categories"
            :key="category.id"
            :value="category.category"
            name="category"
          >
            {{ category.category }}
          </option>
        </select>
      </div>
      <div v-if="newProduct.categoryName === 'Dress'" class="column select">
        <label>Occasion</label>
        <select v-model="newProduct.occasionName">
          <option
            v-for="occasion in Occasions"
            :key="occasion.id"
            :value="occasion.occasion"
            name="occasion"
          >
            {{ occasion.occasion }}
          </option>
        </select>
      </div>
      <div v-if="newProduct.categoryName === 'Jacket'" class="column select">
        <label>Season</label>
        <select v-model="newProduct.seasonName">
          <option
            v-for="season in Seasons"
            :key="season.Id"
            :value="season.Season"
            name="season"
          >
            {{ season.Season }}
          </option>
        </select>
      </div>
      <div class="column">
        <label>Description</label>
        <textarea
          v-model="newProduct.descriptionText"
          placeholder="Enter a description"
          class="text-area"
          name="description"
          id=""
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="column">
        <label>Image Url</label>
        <input
          v-model="newProduct.ImgUrlString"
          type="text"
          name="imgUrl"
          class="input-medium"
          placeholder="Enter Url"
        />
      </div>

      <div class="flex price-container">
        <div class="column">
          <label>Price (number)</label>
          <input
            v-model="newProduct.priceAmount"
            name="price"
            placeholder="Enter price"
          />
        </div>
        <div class="column select">
          <label>On sale?</label>
          <select v-model="newProduct.onSale">
            <option
              name="onSale"
              v-for="sale in onSale"
              :key="sale.id"
              :value="sale.isOnSale"
            >
              {{ sale.value }}
            </option>
          </select>
        </div>
        <div v-if="newProduct.onSale" class="column">
          <label class="column">Sale Procent (number)</label>
          <input
            v-model="newProduct.saleProcent"
            name="procent"
            placeholder="Enter procent"
          />
        </div>
      </div>
      <div class="flex">
        <div class="column short-inputs">
          <label>Size</label>
          <input
            v-model="newProduct.size"
            name="size"
            placeholder="Enter any size"
          />
        </div>
        <div class="column short-inputs">
          <label>Color</label>
          <input
            v-model="newProduct.color"
            name="color"
            placeholder="Enter color"
          />
        </div>
      </div>
      <StandardButton
        type="submit"
        class="std-button-two"
        :button-text="btnText"
      />
    </form>
    <div class="image-container">
      <img
        v-if="newProduct.ImgUrlString"
        name="img"
        class="img"
        :src="`${newProduct.ImgUrlString}`"
      />
      <img
        v-if="newProduct.ImgUrlString === ''"
        name="img"
        class="img"
        :src="`${placeHolderImgUrl}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import StandardButton from "@/components/Buttons/StandardButton.vue";
import { Seasons } from "@/models/Seasons";
import { Categories } from "@/models/CategoriesModel";
import { Occasions } from "@/models/Occasions";
import { isOnSale } from "@/models/Selected";
import { reactive, toRaw } from "@vue/reactivity";
import { dressModel } from "@/models/DressModel";
import axios from "axios";
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
      newProduct: {
        productName: "",
        categoryName: "",
        occasionName: "",
        seasonName: "",
        descriptionText: "",
        ImgUrlString: "",
        priceAmount: 0,
        onSale: false,
        saleProcent: 0,
        size: "",
        color: "",
      },
      newJacket: {},
      onSale: isOnSale,
      OnSale: null,
      imgUrl: "",
      placeHolderImgUrl:
        "https://i.pinimg.com/originals/86/c0/8b/86c08b1adc64b6a3b2a0476ffc15ff3b.jpg",
      dressProduct: dressModel,
    };
  },

  methods: {
    onSubmit() {
      if (this.newProduct.categoryName === "Dress") {
        const newDress = {
          name: this.newProduct.productName,
          description: this.newProduct.descriptionText,
          category: this.newProduct.categoryName,
          price: this.newProduct.priceAmount,
          imageUrl: this.newProduct.ImgUrlString,
          isOnSale: this.newProduct.onSale,
          saleProcent: this.newProduct.saleProcent,
          occasions: this.newProduct.occasionName,
          size: this.newProduct.size,
          color: this.newProduct.color,
        };
        axios
          .post(
            "https://localhost:7187/api/CreateDress",
            JSON.stringify(newDress),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (this.newProduct.categoryName === "Jacket") {
        const newJacket = {
          name: this.newProduct.productName,
          description: this.newProduct.descriptionText,
          category: this.newProduct.categoryName,
          price: this.newProduct.priceAmount,
          imageUrl: this.newProduct.ImgUrlString,
          isOnSale: this.newProduct.onSale,
          saleProcent: this.newProduct.saleProcent,
          season: this.newProduct.seasonName,
          size: this.newProduct.size,
          color: this.newProduct.color,
        };

        axios
          .post(
            "https://localhost:7187/api/CreateJacket",
            JSON.stringify(newJacket),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      this.newProduct = {
        productName: "",
        categoryName: "",
        occasionName: "",
        seasonName: "",
        descriptionText: "",
        ImgUrlString: "",
        priceAmount: 0,
        onSale: false,
        saleProcent: 0,
        size: "",
        color: "",
      };
    },
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
  height: 75vh;
  display: flex;
  justify-content: space-between;

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .image-container {
    width: 50%;
    height: 100%;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
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

select {
  cursor: pointer;
}
</style>
