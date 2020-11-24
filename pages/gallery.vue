<template>
  <ImageGrid :image-folder="'gallery'"></ImageGrid>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import ImageGrid from "~/components/ImageGrid.vue";

@Component({
  components: {ImageGrid}
})
export default class Gallery extends Vue {
  firebaseStorage = this.$fire.storage
  firebaseFireStore = this.$fire.firestore
  images: any = []

  head() {
    return {
      title: "Gallery"
    }
  }
}
</script>

<style scoped lang="scss">
</style>
