<!-- SRP -- This component is almost identical to CardJackets,
  however I felt that this was okay to keep within the lines of SRP
  This component is responsible for the design and display of dresses
If other information was to be displayed on jackets,
then one could edit just this component -->

<template>
  <div v-for="dress in Dresses" :key="dress.id" class="feature-card-container">
    <div>
      <div class="feature-card-img-container">
        <img class="img" :src="dress.imageUrl" />
        <StandardButton
          @click="showDetails(dress)"
          class="std-button-one quick-view"
          :buttonText="text"
          :product="Dresses"
        />
        <CardIcons class="card-icons" />
      </div>
      <div class="feature-card-text-container">
        <p>{{ dress.category }}</p>
        <h2>{{ dress.name }}</h2>
        <div class="display-prices">
          <h3 :class="{ 'strike-through': dress.isOnSale }">
            ${{ dress.price }}.00
          </h3>
          <h3 v-if="dress.isOnSale">${{ dress.salePrice }}.00</h3>
        </div>
      </div>
    </div>
  </div>
  <transition name="fade">
    <CardModal
      v-if="showModal"
      @close="showModal = false"
      :product="modal"
      class="modal"
    />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StandardButton from "@/components/Buttons/StandardButton.vue";
import CardIcons from "@/components/HomeviewComponents/FeaturedProductsSection/CardIcons.vue";
import CardModal from "@/components/HomeviewComponents/FeaturedProductsSection/CardModal.vue";
import DressService from "@/Services/DressService";
import { Dress } from "@/models/interfaces/IDress";
export default defineComponent({
  name: "Card",
  components: {
    StandardButton,
    CardIcons,
    CardModal,
  },
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      text: "QUICK VIEW",
      showModal: false,
      modal: {},
      Dresses: [] as Array<Dress>,
    };
  },
  created() {
    DressService.getProducts("/GetDress")
      .then((response) => {
        this.Dresses = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    showDetails(dress: Object) {
      this.modal = dress;
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

  .display-prices {
    display: flex;
    justify-content: space-between;
    justify-content: center;
    h3 {
      margin-right: 0.5rem;
    }
  }

  .strike-through {
    text-decoration: line-through;
  }
}
</style>
