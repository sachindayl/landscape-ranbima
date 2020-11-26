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
            class="slogan text-h3 text-sm-h2 pa-4 col-12 col-sm-8 text-center text-sm-left font-weight-bold"
          >
            {{ homepageData.slogan }}
          </div>
        </v-container>
      </v-col>
    </v-row>

    <v-row class="my-15">
      <v-col class="col-12 col-sm-8">
        <div class="text-h4 text-sm-h3 pa-4">
          {{ homepageData.projectsMessage }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(card, index) in homepageData.cardData"
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
            <v-card-title>{{ homepageData.differCardText.title }}</v-card-title>
            <v-card-text>
              <p>{{ homepageData.differCardText.text }}</p>
              <div>
                <ul v-for="item in homepageData.differCardText.itemList" :key="item">
                  <li>{{ item }}</li>
                </ul>
              </div>
              <div class="pt-4">
                <p>{{ homepageData.differCardText.text2 }}</p>
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
  languageConfig = "english"

  head() {
    return {
      title: "Home"
    }
  }

  async mounted() {
    this.languageConfig = await localStorage.getItem("language") ?? "english"
    await this.retrieveHomepageImages();
  }

  absolute = true

  get homepageData() {

    return (this.languageConfig === "english") ? {
      slogan: "Reinvent your garden space.",
      projectsMessage: "We've managed over 2000 projects. We're ready to take care of yours.",
      cardData: [
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
      ],
      differCardText: {
        title: "Why do we differ from others?",
        text: "When Ranbima Art Gallery does gardening decor we follow a very special process that you can not see \n" +
          "from other companies.",
        itemList: [
          'First, we take photographs of your garden',
          'Secondly, we design your garden in the most natural way through digital software',
          'Through these photographs, you can imagine what Ranbima Art Gallery plans to set for you',
          'Then you can see how we design and plan garden pots, various kinds of natural and beautiful plants,\n' +
          'flower plants, grass, etc. and arrange them in proper places'
        ],
        text2: "We will create a design for your garden well in advance, according to your wishes and dreams."
      }
    } : {
      slogan: "ඔබේ උද්‍යානය නැවත ප්‍රතිනිර්මාණය කරන්න.",
      projectsMessage: "අපි ව්‍යාපෘති 2000 කට වඩා කළමනාකරණය කර ඇත්තෙමු. අපි ඔබේ වත්ත බලාගන්න සූදානම්.",
      cardData: [
        {
          title: '100% ශක්තිමත් කළ ගුණාත්මකභාවය',
          text:
            'අපගේ නිෂ්පාදන සාමාන්‍ය කොන්ක්‍රීට් මිශ්‍රණයට වඩා දෙගුණයක් ශක්තිමත් වන 100% ශක්තිමත් කරන ලද කොන්ක්‍රීට් වලින් සාදා ඇත.',
        },
        {
          title: 'සහතික කළ ප්රතිරෝධය',
          text:
            'ඕනෑම ලුණු හෝ රසායනික ද්‍රව්‍යයකට ප්‍රතිරෝධය සහ ආරක්ෂිත බාහිර ආලේපනය.',
        },
        {
          title: 'ලස්සන වර්ණ',
          text:
            'ඔබ වර්ණයක් සඳහා කැමතිද? අප ගාව එය ඇත! අපගේ සේවාදායකයින්ට පුළුල් පරාසයක සිට ඔවුන්ගේ කැමැත්ත පරිදි වර්ණ තෝරා ගත හැකිය.',
        }
      ],
      differCardText: {
        title: "අප වෙනස් වන්නේ ඇයි?",
        text: "උද්‍යාන අලංකරණය කිරීමේදී ලංකාවේ කුමන ආයතනයකින්වත් ලබාගත නොහැකි අන්දමේ ක්‍රියාවලියක් රන්බිම ආයතනය විසින් අනුගමන කරනු ලබයි.",
        itemList: [
          "පළමුව, අපි ඔබේ වත්තෙහි ඡායාරූප ගන්නෙමු",
          "දෙවනුව, අපි ඔබේ උද්‍යානය වඩාත් ස්වාභාවික ආකාරයකින් ඩිජිටල් මෘදුකාංග හරහා නිර්මාණය කරමු",
          "මෙම ඡායාරූප හරහා, රන්බිම ආයතනය ඔබ වෙනුවෙන් සැකසීමට අදහස් කරන්නේ කුමක්දැයි ඔබට සිතාගත හැකිය",
          "එවිට අපි උද්‍යාන භාජන, විවිධ වර්ගයේ ස්වාභාවික හා සුන්දර ශාක, මල් පැල, තණකොළ ආදිය සැලසුම් කරන ආකාරය ඔබට දැක ගත හැකිය."
        ],
        text2: "ඔබගේ අභිමතයන් හා සිහින වලට අනුව අපි ඔබේ උද්‍යානය සඳහා කල්තියාම සැලසුමක් සාදන්නෙමු."
      }
    }
  }

  colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]

  get cardRows(): number {
    return Math.ceil(this.homepageData.cardData.length / 3)
  }

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
