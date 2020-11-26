<template>
  <v-app dark>
    <v-app-bar absolute app>
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <div v-if="!isMobile">
        <v-btn text tile @click="logEvent('homepage')" to="/" nuxt>Home</v-btn>
        <v-btn text tile @click="logEvent('about')" to="/about" nuxt>About</v-btn>
        <v-btn text tile @click="logEvent('gallery')" to="/gallery" nuxt>Gallery</v-btn>
        <v-btn text tile @click="logEvent('products')" to="/products" nuxt>Products</v-btn>
        <v-btn text tile @click="logEvent('landscaping')" to="/landscaping" nuxt>Landscaping</v-btn>
      </div>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="() => {}">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => {}">
            <v-list-item-title>සිංහල</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed app temporary>
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <v-list-item tile @click="logEvent('mobile_homepage')" to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logEvent('mobile_about')" to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logEvent('mobile_gallery')" to="/gallery">
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logEvent('mobile_products')" to="/products">
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logEvent('mobile_landscaping')" to="/landscaping">
            <v-list-item-title>Landscaping</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app dark padless>
      <v-card flat tile class="col-12">
        <v-card-text>
          <div>Hot line: 0714275560 / 0778646105 / 0776880916</div>
          <br/>
          <div>Marketing Manager: Ajith Nanayakkara 0776877871</div>
          <br/>
          <div>
            Email: tilakajee@landscaperanbima.com / ranbimaart@gmail.com /
            thilakajee@sltnet.lk
          </div>
        </v-card-text>
        <v-divider/>
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
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  clipped = false
  fixed = false
  drawer = false
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

  get isMobile() {
    return this.$vuetify.breakpoint.mdAndDown;
  }

  mounted() {
    this.$fire.analytics;
  }

  logEvent(pageName: string) {
    if(process.env.NODE_ENV === 'production') {
      this.$fire.analytics.logEvent('page_visit', {name: pageName})
    }
  }
}
</script>
