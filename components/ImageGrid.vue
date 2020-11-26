<template>
  <div>
    <ImageViewerDialog
      :image-dialog.sync="dialog"
      :images-list.sync="images"
      :images-index.sync="imageIndex"
    ></ImageViewerDialog>
    <v-progress-linear
      v-if="loading"
      rounded
      indeterminate
      color="secondary darken-2"
    ></v-progress-linear>
    <v-row v-else>
      <v-col v-for="(image,index) in images" :key="index + image" class="col-6 col-sm-3">
        <v-img
          :src="image"
          max-height="300px"
          max-width="300px"
          aspect-ratio="1"
          contain
          @click="openDialog(index)">
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
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";
import {FirebaseService} from "~/services/FirebaseService";
import ImageViewerDialog from "~/components/ImageViewerDialog.vue";
const img = require('assets/8.jpg')

@Component({
  components: {ImageViewerDialog}
})
export default class ImageGrid extends Vue {
  @Prop({default: ''}) readonly imageFolder!: string
  images: any = []
  loading = false;
  dialog = false;
  imageIndex = 0;

  async mounted() {
    await this.retrieveImageUrls();
  }

  async retrieveImageUrls() {
    this.loading = true;
    const firebaseService = new FirebaseService(this.$fire);
    if (process.env.NODE_ENV === 'production') {
      this.images = await firebaseService.retrieveImageData(this.imageFolder);
    } else {
      this.images = [img]
    }
    this.loading = false;
  }

  openDialog(index: number) {
    this.imageIndex = index;
    this.dialog = true;
  }
}
</script>

<style scoped>

</style>
