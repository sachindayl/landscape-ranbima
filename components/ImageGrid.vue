<template>
  <div>
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
        >
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

@Component
export default class ImageGrid extends Vue {
  @Prop({default: ''}) readonly imageFolder!: string
  images: any = []
  loading = false;

  async mounted() {
    await this.retrieveImageUrls();
  }

  async retrieveImageUrls() {
    this.loading = true;
    const firebaseService = new FirebaseService(this.$fire);
    if (process.env.NODE_ENV !== 'production') {
      this.images = await firebaseService.retrieveImageData(this.imageFolder);
    } else {
      this.images = ["@/assets/8.jpg"]
    }
    this.loading = false;
  }
}
</script>

<style scoped>

</style>
