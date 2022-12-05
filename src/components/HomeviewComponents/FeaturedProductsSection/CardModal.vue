<template>
  <div class="modal-container">
    <Icon @click="closeModal" class="close-icon" icon="carbon:close" />
    <div class="details-container">
      <div class="details-img-container">
        <img class="img" :src="product?.imageUrl" />
      </div>
      <div class="details-information-container">
        <h1 class="margin-bottom">{{ product?.ProductTitle }}</h1>
        <h3 class="margin-bottom">SKU Brand</h3>
        <p class="margin-bottom">STARS</p>
        <p class="margin-bottom">${{ product?.ProductPrice }}.00</p>
        <p class="product-information">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
          aperiam hic. Quis earum error quidem possimus ipsa doloremque repellat
          amet. Voluptates, veritatis hic. Atque eveniet ipsam, ipsa quos
        </p>
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
  margin-bottom: 0.5rem;
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
  /* border: 1px solid purple; */
  width: 50%;

  .product-information {
    max-height: 100px;
    overflow: hidden;
    margin-bottom: 2rem;
  }
}

.modal-container {
  width: 75%;
  /* height: 150%; */
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
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
</style>
