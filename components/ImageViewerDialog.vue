<template>
  <v-dialog v-model="dialog" max-height="600px" max-width="800px">
    <v-card class="pa-8" tile>
      <v-carousel
        v-model="imageIndex"
        :hide-delimiters="true"
      >
        <v-carousel-item
          v-for="(item,i) in images"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-img
              :src="item"
              max-height="90%"
              max-width="700px"
              aspect-ratio="1"
              contain>
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="accent lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-row>

        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {Component, PropSync, Prop, Vue} from "nuxt-property-decorator";

@Component
export default class ImageViewerDialog extends Vue {
  get imageIndex(): number {
    return this._imageIndex;
  }

  set imageIndex(value: number) {
    this._imageIndex = value;
  }
  @PropSync("imageDialog", {type: Boolean}) dialog!: boolean;
  @PropSync("imagesList", {
    type: Array as () => string[]
  })
  images!: string[];
  @PropSync("imagesIndex", {type: Number}) private _imageIndex!: number;

}
</script>

<style scoped lang="scss">

</style>
