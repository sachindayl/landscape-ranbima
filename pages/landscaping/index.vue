<template>
  <div>
    <v-progress-linear
      v-if="loading"
      rounded
      indeterminate
      color="secondary darken-2"
    ></v-progress-linear>
    <v-row>
      <v-col class="col-12 col-sm-8 ">
        <v-card class="pa-4" tile>
          <v-card-title>
            Observe these picture sets carefully
          </v-card-title>
          <v-card-text>
            The initial pictures of the garden are how it was before. The second picture are how it was when our company
            edited and created the design.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(land, index) in landscapeList" :key="land + index" class="col-12 col-sm-6">
        <v-card class="pa-4" :to="{path: '/landscaping/browse', query: {album:land.keyword}}" tile>
          <v-row>
            <v-col class="col-6">
              <v-img
                :src="land.before"
                max-height="175px"
                max-width="250px"
                aspect-ratio="1"
                contain
              ></v-img>
            </v-col>
            <v-col class="col-6">
              <v-img
                :src="land.after"
                max-height="175px"
                max-width="250px"
                aspect-ratio="1"
                contain
              ></v-img>
            </v-col>
          </v-row>
          <v-card-title>{{ land.title }}</v-card-title>
        </v-card>

      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import ImageGrid from "~/components/ImageGrid.vue";
import {FirebaseService} from "~/services/FirebaseService";
import {LandscapeInterface} from "~/models/LandscapeInterface";

@Component({
  components: {ImageGrid}
})
export default class Landscaping extends Vue {
  loading = false;
  landscapeList: LandscapeInterface[] = []

  head() {
    return {
      title: "Landscaping"
    }
  }

  async mounted() {
    await this.retrieveLandscapeData();
  }

  async retrieveLandscapeData() {
    this.loading = true;
    const firebaseService = new FirebaseService(this.$fire);
    this.landscapeList = await firebaseService.retrieveLandscapeData()
    this.loading = false;
  }
}
</script>

<style scoped lang="scss">
</style>
