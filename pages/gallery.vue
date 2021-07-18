<template>
  <v-container>
    <ImageGrid :image-folder="'gallery'"></ImageGrid>
  </v-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import ImageGrid from "~/components/ImageGrid.vue";

@Component({
  components: {ImageGrid}
})
export default class Gallery extends Vue {
  @Prop({default: ''}) readonly folderKeyword!: string
  @Prop({default: ''}) readonly pageTitle!: string

  head() {
    return {
      title: "Gallery"
    }
  }
}
</script>

<style scoped lang="scss">
</style>
