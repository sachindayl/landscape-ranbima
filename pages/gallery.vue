<template>
  <v-row>
    <v-col v-for="(image,index) in imageUrlList" :key="index + image" class="col-6 col-sm-3">
      <v-img
        :src="image"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {FirebaseService} from "~/services/FirebaseService";

@Component
export default class Gallery extends Vue {
  firebaseStorage = this.$fire.storage
  firebaseFireStore = this.$fire.firestore
  imageUrlList: any = []

  head() {
    return {
      title: "Gallery"
    }
  }

  async mounted() {
    // this.imageVal = await this.firebaseStorage.ref('gallery').child("2.jpg").getDownloadURL()
    await this.retrieveImageUrls();
  }

  async retrieveImageUrls() {
    // const querySnapshot = await this.firebaseFireStore.collection('gallery').get();
    // querySnapshot.forEach((doc) =>
    //   console.log(doc.get('image'))
    // )
    const firebaseService = new FirebaseService(this.$fire);
    this.imageUrlList = await firebaseService.retrieveImageData("gallery")

  }
}
</script>

<style scoped lang="scss">
</style>
