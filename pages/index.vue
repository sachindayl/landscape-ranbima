<template>
  <v-container>
    <v-row class="mx-auto mb-4">
      <v-spacer></v-spacer>
      <v-col class="col-12 col-sm-8">
        <v-container>
          <v-card rounded>
            <v-carousel cycle height="400" hide-delimiters show-arrows-on-hover>
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%">
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3"></div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-card>
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
        <v-card class="card-style pa-4 ma-2 ma-sm-0">
          <v-card-title> {{ card.title }} </v-card-title>
          <v-card-text>{{ card.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  absolute = true
  colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]

  slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

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
}
</script>

<style lang="scss">
.slogan {
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-style {
  height: 250px;
}

.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}

@media screen and (min-width: 600px) {
  .slogan {
    position: absolute;
    top: 25%;
    left: 25%;
    transform: translate(-15%, -35%);
  }

  .card-style {
    height: 250px;
    word-wrap: break-word;
  }
}
</style>
