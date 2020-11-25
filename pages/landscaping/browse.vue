<template>
  <ImageGrid :image-folder="$route.query.album"></ImageGrid>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import ImageGrid from "~/components/ImageGrid.vue";

@Component({
  components: {ImageGrid}
})
export default class Browse extends Vue {
  head() {
    return {
      title: "Landscaping"
    }
  }
}
</script>

<style scoped lang="scss">
</style>
