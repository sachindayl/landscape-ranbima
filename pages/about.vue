<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-sm-6">
        <v-card class="mx-auto pa-4">
          <v-card-title>
            <span>Creations for your home garden</span>
          </v-card-title>
          <v-card-text>
            <p>
              Every person hopes to build his own house.After making a house,
              the next step is to decorate it in their way. Most of the people
              think that it is a custom to give priority to gardening. We can
              use natural and artificial things for gardening. Through these
              things we can make it a marvelous and attractive pleas and place.
              We can see a lot of garden decoration in the market. But our
              creations are unique and different from those. There is a special
              ability when you buy our products which can be changed equal
              products after five years. For the first time our Ranbima Art
              Gallery has introduced Sri Lankan concrete home gardening decor.
              We acquired local and foreign technology. We have a wide range of
              local and foreign traditional products. We have been producing
              home garden decors to suit garden, veranda, sitting room or
              whatever places they are required. Among them local and foreign
              ancient, traditional cultural, big and small statues pots and
              sprinklers are available. Our products are made from 100%
              reinforced concrete which is twice as strong as ordinary concrete
              mixture. These advanced concrete items are invented by Sri Lankan
              experts after many years of research.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-spacer></v-spacer>
      <v-col class="col-12 col-sm-6">
        <v-slide-y-transition :hide-on-leave="true">
          <v-card class="mx-auto pa-4">
            <v-card-title>
              <span>Uniqueness of our products</span>
            </v-card-title>
            <v-card-text>
              <div>
                Using latest local and foreign technology by Ranbima Ciminco
                will turn your garden to a royal park.
              </div>
              <br />
              <div>
                <ul v-for="item in uniquenessList" :key="item">
                  <li>{{ item }}</li>
                </ul>
              </div>
              <br />
              <div>
                If we undertake your landscapes, Special discounts for concrete
                products. No other concrete item maker will provide you with
                these unique products from Ranbima.
              </div>
            </v-card-text>
          </v-card>
        </v-slide-y-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class About extends Vue {
  head() {
    return {
      title: "About"
    }
  }
  uniquenessList = [
    'Our products are made from 100% reinforced concrete which is as twice as strong as ordinary concrete mixture.',
    'Made from an advanced concrete mixture invented by Sri Lanka Experts after years of research.',
    '100% guarantee against any salty or chemical substance.',
    'Total solidity ensures minimum adsorption of water.',
    'Mixed using Air Entraining technology devoid of are bubbles.',
    'Fail-safe sturdy external coat.',
    'Scratch and crack proof.',
    'Sturdy internal strong iron structure.',
    'Unlimited number of colours for external coat.',
  ]
}
</script>

<style scoped></style>
