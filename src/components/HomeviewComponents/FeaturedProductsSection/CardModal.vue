<!-- SRP - Responsible for the popout modal when clicking on an individual product - display and design of that particular product  -->

<template>
  <div class="modal-container">
    <Icon @click="closeModal" class="close-icon" icon="carbon:close" />
    <div class="details-container">
      <div class="details-img-container">
        <img class="img" :src="product?.imageUrl" />
      </div>
      <div class="details-information-container">
        <h1 class="margin-bottom">{{ product?.name }}</h1>
        <h3
          v-if="product?.category === 'Dress'"
          class="margin-bottom occasion-season"
        >
          {{ product?.occasions }}
        </h3>
        <h3
          v-if="product?.category === 'Jacket'"
          class="margin-bottom occasion-season"
        >
          {{ product?.season }}
        </h3>

        <div class="display-prices">
          <h3 :class="{'strike-through' : product?.isOnSale}">${{ product?.price }}.00</h3>
          <h3 class="margin-bottom on-sale" v-if="product?.isOnSale">
          ${{ product?.salePrice }}.00
          </h3>
        </div>
        <p class="product-information">{{ product?.description }}</p>
        <SizeComponent style="margin-bottom: 1rem" />
        <DetailsColor style="margin-bottom: 1rem" />
        <CardQuantity style="margin-bottom: 1rem" />
        <StandardButton class="std-button-one btn" :buttonText="buttonText" />
      </div>
    </div>
    <ExtraInformation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import SizeComponent from "@/components/HomeviewComponents/FeaturedProductsSection/SizeComponent.vue";
import DetailsColor from "@/components/HomeviewComponents/FeaturedProductsSection/DetailsColor.vue";
import CardQuantity from "@/components/HomeviewComponents/FeaturedProductsSection/CardQuantity.vue";
import StandardButton from "@/components/Buttons/StandardButton.vue";
import ExtraInformation from "@/components/HomeviewComponents/FeaturedProductsSection/ExtraInformation.vue";

export default defineComponent({
  name: "CardModal",
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      buttonText: "Add to cart",
    };
  },
  components: {
    Icon,
    SizeComponent,
    DetailsColor,
    CardQuantity,
    StandardButton,
    ExtraInformation,
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 1rem;
  height: 42px;
  width: 17%;
  transition: all 0.2s ease;
  &:hover {
    font-size: 1.05rem;
    background-color: #ff7373;
  }
}
.margin-bottom {
  margin-bottom: 1.5rem;
}
.details-container {
  display: flex;
  height: 65%;
  justify-content: space-between;

  .details-img-container {
    width: 45%;
    height: 100%;
    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.details-information-container {
  width: 50%;

  .product-information {
    max-height: 100px;
    overflow: hidden;
    margin-bottom: 2rem;
  }
}

.modal-container {
  width: 75%;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border: 1px solid rgb(233, 228, 228);
}

.close-icon {
  font-size: 2rem;
  color: gray;
  float: right;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
    transform: rotate(90deg);
  }
}

.occasion-season {
  border: 2px solid rgb(29, 183, 230);
  width: 25%;
  text-align: center;
  border-radius: 10px;
  color: rgb(21, 125, 156);
}

.on-sale {
  color: #157145;
}

.display-prices {
  display: flex;
  font-size: 1.5rem;
  width: 25%;
  justify-content: space-between;
  h3 {
    margin-right: 0.5rem;
  }
}

.strike-through {
    text-decoration: line-through;
  }
</style>
