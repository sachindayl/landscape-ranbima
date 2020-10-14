<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn text to="/" nuxt> Home </v-btn>
        <v-btn text to="/about" nuxt> About </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app dark padless>
      <v-card flat tile class="col-12">
        <v-card-text>
          <div>Hot line: 0714275560 / 0778646105 / 0776880916</div>
          <br />
          <div>Marketing Manager: Ajith Nanayakkara 0776877871</div>
          <br />
          <div>
            Email: tilakajee@landscaperanbima.com / ranbimaart@gmail.com /
            thilakajee@sltnet.lk
          </div>
        </v-card-text>
        <v-divider />
        <v-card-text class="text-center">
          <span
            >&copy; {{ new Date().getFullYear() }} Powered by Technomate
            Software</span
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  clipped = false
  fixed = false
  items = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/',
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire',
    },
  ]

  miniVariant = false
  title = 'Landscape Ranbima'
}
</script>
