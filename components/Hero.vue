<template>
  <v-row
      class="align-center justify-center"
      style="background-image: linear-gradient(#272727, #35552f)"
  >
    <v-col class="col-12 col-sm-7">
      <div class="text-h4 text-sm-h2 font-weight-bold text-center text-sm-left pa-16">
        <v-img :src="artGallery"></v-img>
        <div class="text-center red--text text-h4">アートギャラ</div>
      </div>
      <div class="text-h6 text-center pa-8">
        <v-row class="align-baseline justify-center">
          <v-col class="col-6 col-sm-3">
            Highest quality products
          </v-col>
          <v-col class="col-6 col-sm-3 red--text">
            100% CONCRETE
          </v-col>
          <v-col class="col-6 col-sm-3">
            Landscaping gardening service
          </v-col>
          <v-col class="col-6 col-sm-3">
            Garden design
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col
        class="col-12 col-sm-5 py-16 pl-16 pr-16 pr-sm-0"
        style="background-image: linear-gradient(#272727, #000000)"
    >
      <v-img :src="heroGarden" class="rounded-l-sm" style="opacity: 0.7" contain></v-img>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {
  artGallery = require('@/assets/r-art-gallery-hero.png')
  heroGarden = require('@/assets/garden.png')

}
</script>

<style lang='scss' scoped>

</style>