<template>
  <v-container>
    <v-row class="mx-auto mb-4">
      <v-overlay :absolute="absolute" :value="overlay" :opacity="opacity">
        <div
          class="text-h2 px-4 col-12 col-sm-10 text-center text-sm-left font-weight-bold"
        >
          Reinvent your garden space.
        </div>
      </v-overlay>
      <v-spacer></v-spacer>
      <v-col class="col-12 col-sm-8">
        <v-carousel cycle height="400" hide-delimiters show-arrows-on-hover>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3"></div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row class="mt-15">
      <v-col class="col-12 col-sm-6">
        <div class="text-h3 pa-4">We've managed over 2000 projects.</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  absolute = true
  overlay = true
  opacity = 0.2
  colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]

  slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
}
</script>
