<template>
  <v-container>
    <v-row class="mx-sm-auto mb-4">
      <v-spacer></v-spacer>
      <v-col class="col-12 col-sm-8 col-xl-6">
        <v-container>
          <v-sheet
            color="accent"
            elevation="2"
            class="ma-2 ma-sm-0 pb-2"
            tile
          >
          <v-card elevation="0" class="pa-2" tile>
            <v-carousel cycle height="400px" hide-delimiters show-arrows-on-hover>
              <v-carousel-item v-for="(image, i) in images" :key="image+i">
                <v-row class="fill-height" align="center" justify="center">
                  <v-img
                    :src="image"
                    :aspect-ratio="16/9"
                    max-width="100%">
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
          </v-sheet>
          <div
            class="slogan text-h3 text-sm-h2 pa-4 col-12 text-center text-sm-left font-weight-bold"
          >
            Reinvent your garden space.
          </div>
        </v-container>
      </v-col>
    </v-row>

    <v-row class="my-15">
      <v-col class="col-12 col-sm-8">
        <div class="text-h4 text-sm-h3 pa-4">
          We've managed over 2000 projects. We're ready to take care of yours.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(card, index) in cardData"
        :key="index"
        class="col-12 col-sm-4"
      >
        <v-sheet
          color="accent"
          elevation="2"
          class="ma-2 ma-sm-0 pb-2"
          tile
        >
          <v-card elevation="0" class="pa-4" tile min-height="250">
            <v-card-title> {{ card.title }}</v-card-title>
            <v-card-text>{{ card.text }}</v-card-text>
          </v-card>
        </v-sheet>

      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-12">
        <v-sheet
          color="accent"
          elevation="2"
          class="ma-2 ma-sm-0 pb-2"
          tile
        >
          <v-card elevation="0" class="pa-4" tile>
            <v-card-title>Why do we differ from others?</v-card-title>
            <v-card-text>
              <p>When Ranbima Art Gallery does gardening decor we follow a very special process that you can not see
                from
                other companies.</p>
              <div>
                <ul v-for="item in processList" :key="item">
                  <li>{{ item }}</li>
                </ul>
              </div>
              <div class="pt-4">
                <p>According to your wish and dream, you can see well in advance the garden art before it is
                  finished.</p>
              </div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {FirebaseService} from "~/services/FirebaseService";

@Component
export default class Index extends Vue {
  images: string[] = []

  head() {
    return {
      title: "Home"
    }
  }

  mounted() {
    this.retrieveHomepageImages();
  }

  absolute = true
  colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]

  cardData = [
    {
      title: '100% Reinforced Quality',
      text:
        'Our products are made from 100% reinforced concrete which is as twice as strong than ordinary concrete mixture.',
    },
    {
      title: 'Guaranteed Resistance',
      text:
        'Resistance against any salty or chemical substance and fail-safe external coating.',
    },
    {
      title: 'Beautiful Colors',
      text:
        'You like a colour? We got it! Our clients can pick colours of their choice from wide ranging palette.',
    },
  ]

  get cardRows(): number {
    return Math.ceil(this.cardData.length / 3)
  }

  processList = [
    'First, we take photographs of your garden',
    'Secondly, we design your garden in the most natural way through digital software',
    'Without diluting through photographs, we show our prepared designs',
    'Through these photographs, you can imagine what Ranbima Art Gallery plans to set for you',
    'Then you can see how we design and plan garden pots, various kinds of natural and beautiful plants,\n' +
    'flower plants, grass, etc. and arrange them in proper places'
  ]

  async retrieveHomepageImages() {
    const firebaseService = new FirebaseService(this.$fire)
    this.images = await firebaseService.retrieveImageData('homepage');
  }
}
</script>

<style lang="scss">
.slogan {
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}

@media screen and (min-width: 600px) {
  .slogan {
    position: absolute;
    top: 22%;
    left: 25%;
    transform: translate(-15%, -35%);
  }

  .card-style {
    height: 250px;
    word-wrap: break-word;
  }
}
</style>
