<template>
  <div
    v-for="product in products"
    :key="product.ProductId"
    class="feature-card-container"
  >
    <div>
      <div class="feature-card-img-container">
        <img class="img" :src="product.imageUrl" />
        <StandardButton
          @click="showDetails(product)"
          class="std-button-one quick-view"
          :buttonText="text"
        />
        <CardIcons class="card-icons" />
      </div>
      <div class="feature-card-text-container">
        <p>{{ product.ProductCatgory }}</p>
        <h2>{{ product.ProductTitle }}</h2>
        <div>Stars</div>
        <h3>${{ product.ProductPrice }}.00</h3>
      </div>
    </div>
  </div>
  <transition name="fade">
    <CardModal
      v-if="showModal"
      @close="showModal = false"
      :product="newTest"
      class="modal"
    />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productItem } from "@/models/ProductModel";
import StandardButton from "@/components/Buttons/StandardButton.vue";
import CardIcons from "@/components/HomeviewComponents/FeaturedProductsSection/CardIcons.vue";
import CardModal from "@/components/HomeviewComponents/FeaturedProductsSection/CardModal.vue";
export default defineComponent({
  name: "Card",
  components: {
    StandardButton,
    CardIcons,
    CardModal,
  },
  data() {
    return {
      products: productItem,
      text: "QUICK VIEW",
      showModal: false,
      newTest: {},
    };
  },

  methods: {
    showDetails(product: Object) {
      this.newTest = product;
      this.showModal = true;
    },
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  z-index: 999;
  height: 90vh;
}

.feature-card-container {
  height: 320px;
  width: 255px;

  .feature-card-img-container {
    width: 100%;
    height: 210px;
    background: rgb(214, 207, 207);
    position: relative;
    overflow: hidden;

    &:hover {
      .quick-view {
        opacity: 1;
        transition: all 0.5s ease;
        bottom: 0;
        left: 0;
        visibility: visible;
      }
      .card-icons {
        right: 0;
        opacity: 1;
        visibility: visible;
        transition: all 0.5s ease;
      }
    }
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .quick-view {
      width: 100%;
      font-weight: 100;
      font-size: 0.875rem;
      position: absolute;
      bottom: -60px;
      left: 0;
      z-index: 5;
      opacity: 1;
      visibility: visible;
      transition: all 0.5s ease;
    }
    .card-icons {
      position: absolute;
      top: 5%;
      right: -50px;
      z-index: 10;
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s ease;
    }
  }

  .feature-card-text-container {
    text-align: center;
    p {
      font-size: 0.8rem;
      color: #616365;
      font-weight: 500;
      margin-top: 3%;
    }
    h2 {
      color: #23262a;
      font-size: 1rem;
      font-weight: 700;
    }
    h3 {
      color: #23262a;
      font-size: 1.125rem;
      font-weight: 700;
    }
  }
}
</style>
