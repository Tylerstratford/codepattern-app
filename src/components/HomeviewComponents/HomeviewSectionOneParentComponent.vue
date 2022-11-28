<template>
    <div class="homeView-background">
      <div class="homeView-container">
        <HomeviewImageComponent
        src="https://img.freepik.com/free-photo/urban-mysterious-lights-film-aesthetic_23-2149098591.jpg?w=740&t=st=1669629718~exp=1669630318~hmac=b7551a237e8dd938970f1875188eb934d858e7d7275a1704fc4f5bfd68fd15f3"  
        />
        <div class="homeview-text-container">
          <div>
            <h1>
              SALE UP <br />
              To 50% Off
            </h1>
            <h4>Online shopping free home delivery over $100</h4>
            <StandardButton class="std-button-one" :buttonText="title"/>
          </div>
        </div>
        <HomeviewImageComponent
          src="https://img.freepik.com/premium-photo/elegant-empty-perfume-bottle-still-life_23-2149234369.jpg?w=740"
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
    data() {
      return {
        title : "SHOP NOW"
      }
    }
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
      font-weight: 400;
      margin-bottom: 45px;
    }
  }
  
  img {
    width: auto;
    object-fit:contain;
  }
  
  
  </style>
  