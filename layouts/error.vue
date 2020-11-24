<template>
  <v-app dark>
    <v-card class="mx-auto pa-4">
      <v-card-title>
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
      </v-card-title>
      <v-row>
        <v-col class="col-12 text-center">
          <v-btn class="secondary" to="/" nuxt>Home</v-btn>
        </v-col>
      </v-row>
    </v-card>

  </v-app>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'

@Component
export default class Error extends Vue {
  @Prop({default: null}) error!: any
  layout = 'empty'
  pageNotFound = '404 Not Found'
  otherError = 'An error occurred'

  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
