<template>
  <div class="modal-container" @click.stop="">
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
        <p class="margin-bottom">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
          aperiam hic. Quis earum error quidem possimus ipsa doloremque repellat
          amet. Voluptates, veritatis hic. Atque eveniet ipsam, ipsa quos
          voluptas deserunt. Molestias laboriosam iusto officiis odit libero
          error omnis eum veniam magni quis numquam ea adipisci, repellat
          veritatis consectetur temporibus deserunt.
        </p>
        <FeatureProductSizeComponent style="margin-bottom: 2rem" />
        <FeatureProductDetailsColor style="margin-bottom: 2rem" />
        <FeatureProductCardQuantity style="margin-bottom: 2rem" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import FeatureProductSizeComponent from "@/components/HomeviewComponents/FeaturedProductsSection/FeatureProductSizeComponent.vue";
import FeatureProductDetailsColor from "@/components/HomeviewComponents/FeaturedProductsSection/FeatureProductDetailsColor.vue";
import FeatureProductCardQuantity from "@/components/HomeviewComponents/FeaturedProductsSection/FeatureProductCardQuantity.vue";
export default defineComponent({
  name: "FeatureProductCardModal",
  props: {
    product: {
      type: Object,
    },
  },
  components: {
    Icon,
    FeatureProductSizeComponent,
    FeatureProductDetailsColor,
    FeatureProductCardQuantity,
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
});
</script>

<style lang="scss" scoped>
.margin-bottom {
  margin-bottom: 1rem;
}
.details-container {
  display: flex;
  height: 100%;
  justify-content: space-between;

  .details-img-container {
    width: 45%;
    height: 65%;
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
}

.modal-container {
  width: 75%;
  height: 85vh;
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
