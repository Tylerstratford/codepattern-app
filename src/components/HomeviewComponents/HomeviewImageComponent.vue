<template>
    <img class="image" :src="image"/>
</template>
<script lang="ts">
 
import { defineComponent } from 'vue'
export default defineComponent({
 
    name: 'HomeviewImageComponent',
    props: {
        image: String
}
});
</script>
 
 
<style lang="scss" scoped>
.image {
    height: 100%;
    padding: 0;
    margin: 0;
}

</style>