<template>
  <div>
    <v-progress-linear
      v-if="loading"
      rounded
      indeterminate
      color="accent"
    ></v-progress-linear>
    <v-row>
      <v-col class="col-12">
        <h2>{{ dataSet.projects.title }}</h2>
        <div class="pt-4">
          <p>{{ dataSet.projects.text }}</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(land, index) in landscapeList" :key="land + index" class="col-12 col-sm-6">
        <v-sheet
          color="accent"
          elevation="2"
          class="pb-2"
          tile
        >
          <v-card elevation="0" class="pa-4" :to="{path: '/landscaping/browse', query: {album:land.keyword}}" tile>
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
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-12">
        <h2>{{ dataSet.grass.title }}</h2>
        <div class="pt-4">
          <p>{{ dataSet.grass.text }}</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-6 col-sm-3" v-for="(grass, index) in grassList" :key="grass+index">
        <v-sheet
          color="accent"
          elevation="2"
          class="pb-2"
          tile
        >
          <v-card elevation="0" class="pa-4" min-height="300px" tile>
            <v-img
              :src="grass.image"
              max-height="175px"
              max-width="250px"
              aspect-ratio="1"
              contain
            ></v-img>
            <v-card-title>{{ grass.title }}</v-card-title>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import ImageGrid from "~/components/ImageGrid.vue";
import {FirebaseService} from "~/services/FirebaseService";
import {LandscapeInterface} from "~/models/LandscapeInterface";
import {GrassInterface} from "~/models/GrassInterface";

@Component({
  components: {ImageGrid}
})
export default class Landscaping extends Vue {
  languageConfig = "english"
  firebaseService = new FirebaseService(this.$fire);
  loading = false;
  landscapeList: LandscapeInterface[] = []
  grassList: GrassInterface[] = []

  head() {
    return {
      title: "Landscaping"
    }
  }

  async mounted() {
    this.languageConfig = await localStorage.getItem("language") ?? "english"
    await this.retrieveLandscapeData();
    await this.retrieveGrass();
  }

  get dataSet() {
    return this.languageConfig === "english" ?
      {
        projects: {
          title: "Previous projects",
          text: "The initial pictures of the garden are how it was before. The second picture is how it was when " +
            "our company edited and created the design."
        },
        grass: {
          title: "Grass options",
          text: "We provide a variety of grass products. Contact us for more information."
        }
      } : {
        projects: {
          title: "පෙර ව්‍යාපෘති",
          text: "උද්යානයේ ආරම්භක පින්තූර එය පෙර පැවති ආකාරයයි. දෙවන පින්තූරය අපගේ සමාගම සංස්කරණය කර නිර්මාණය කළ ආකාරයයි."
        },
        grass: {
          title: "තණකොළ වර්ග",
          text: "අපි විවිධ තණකොළ නිෂ්පාදන සපයන්නෙමු. වැඩි විස්තර සඳහා අප අමතන්න."
        }
      }
  }

  async retrieveLandscapeData() {
    this.loading = true;
    this.landscapeList = await this.firebaseService.retrieveLandscapeData()
    this.loading = false;
  }

  async retrieveGrass() {
    this.loading = true;
    this.grassList = await this.firebaseService.retrieveGrass()
    this.loading = false;
  }
}
</script>

<style scoped lang="scss">
</style>
