<template>
  <v-row>
    <v-col class="col-6 col-sm-3">
        <v-img
          :src="require('@/assets/gallery-2.jpg')"
          max-height="300px"
          max-width="300px"
          aspect-ratio="1"
          contain
        ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/8.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/gallery-2.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/8.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/gallery-2.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/8.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/gallery-2.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/8.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/gallery-2.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/8.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/gallery-2.jpg')"
        max-height="300px"
        max-width="300px"
        aspect-ratio="1"
        contain
      ></v-img>
    </v-col>
    <v-col class="col-6 col-sm-3">
      <v-img
        :src="require('@/assets/8.jpg')"
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

@Component
export default class Gallery extends Vue {
  head() {
    return {
      title: "Products"
    }
  }
}
</script>

<style scoped lang="scss">
</style>
