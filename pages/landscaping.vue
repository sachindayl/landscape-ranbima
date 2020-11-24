<template>
  <ImageGrid :image-folder="'landscape'"></ImageGrid>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import ImageGrid from "~/components/ImageGrid.vue";

@Component({
  components: {ImageGrid}
})
export default class Gallery extends Vue {
  head() {
    return {
      title: "Landscaping"
    }
  }
}
</script>

<style scoped lang="scss">
</style>
