<template>
  <ImageGrid :image-folder="'product'"></ImageGrid>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import ImageGrid from "~/components/ImageGrid.vue";

@Component({
  components: {ImageGrid}
})
export default class Products extends Vue {
  head() {
    return {
      title: "Products"
    }
  }
}
</script>

<style scoped lang="scss">
</style>
