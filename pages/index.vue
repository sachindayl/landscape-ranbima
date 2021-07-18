<template>
  <div>
    <hero></hero>
    <v-container>
      <v-row class="my-15">
        <v-col class="col-12">
          <div class="text-h4 text-sm-h2 text-center text pa-4">
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

          <v-sheet color="accent" elevation="2" class="ma-2 ma-sm-0 pb-2" tile>
            <v-card elevation="0" class="pa-4 d-flex flex-column" tile height="425px">
              <v-row>
                <v-col>
                  <v-img
                      class="mx-auto rounded"
                      :src="card.image"
                      :aspect-ratio="1"
                      max-height="200"
                      max-width="200"
                  ></v-img>
                </v-col>
              </v-row>
              <v-card-title class="align-center justify-center text-center">
                {{ card.title }}
              </v-card-title>
              <v-card-text class="align-center justify-center text-center"
              >{{ card.text }}
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions class=" justify-center">
                <v-btn :to="card.link" color="primary">{{homepageData.viewMoreButton.text}}</v-btn>
              </v-card-actions>
            </v-card>
          </v-sheet>


        </v-col>
      </v-row>
      <v-row class="align-center justify-center">
        <v-col class="col-12 col-sm-4">
          <v-img
              :src="hundredPercentConcreteImage"
              :height="this.$vuetify.breakpoint.smAndUp ? 700 : 500"
              contain
          ></v-img>
        </v-col>
        <v-col class="col-12 col-sm-8">
          <v-sheet color="accent" elevation="2" class="ma-2 ma-sm-0 pb-2" tile>
            <v-card elevation="0" class="pa-4" tile>
              <v-card-title
              >{{ homepageData.differCardText.title }}
              </v-card-title>
              <v-card-text>
                <p>{{ homepageData.differCardText.text }}</p>
                <div>
                  <ul
                      v-for="item in homepageData.differCardText.itemList"
                      :key="item"
                  >
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
      <v-row class="align-center justify-center">
        <v-col class="col-12 col-sm-4 hidden-sm-and-up">
          <v-img :src="tilakPortrait" height="300" contain></v-img>
        </v-col>
        <v-col class="col-12 col-sm-8">
          <v-sheet color="accent" elevation="2" class="ma-2 ma-sm-0 pb-2" tile>
            <v-card elevation="0" class="pa-4" tile>
              <v-card-title
              >{{ homepageData.thirdCardText.title }}
              </v-card-title>
              <v-card-text>
                <p>{{ homepageData.thirdCardText.text }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" to="/about">{{homepageData.viewMoreButton.text}}</v-btn>
              </v-card-actions>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col class="col-12 col-sm-4 hidden-xs-only">
          <v-img :src="tilakPortrait" height="300" contain></v-img>
        </v-col>
      </v-row>
      <div class="text-h3 font-weight-bold text-center pa-4 mt-8">
        {{ homepageData.sponsors.title }}
      </div>
      <div class="text-h6 text-center pb-16">
        {{ homepageData.sponsors.text }}
      </div>
      <v-row class="justify-center align-center pa-4">
        <v-col class="col-6 col-sm-4">
          <v-img :src="kapugePortrait" height="200" contain></v-img>
        </v-col>
        <v-col class="col-6 col-sm-4">
          <v-img :src="premaPortrait" height="200" contain></v-img>
        </v-col>
      </v-row>
      <v-row class="justify-center align-center pa-4">
        <v-col
            class="col-4 col-sm-3"
            v-for="(institute, index) in instituteImages"
            :key="index + institute.alt"
        >
          <v-img
              :src="institute.image"
              :alt="institute.alt"
              height="100"
              contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {FirebaseService} from '~/services/FirebaseService'

@Component
export default class Index extends Vue {
  fertilizer = require('@/assets/fertilizer.png')
  pots = require('@/assets/pots.png')
  landscape = require('@/assets/landscape.png')
  hundredPercentConcreteImage = require('@/assets/11.png')
  tilakPortrait = require('@/assets/tilak-red-02.png')
  kapugePortrait = require('@/assets/kapuge.png')
  premaPortrait = require('@/assets/premawardena-kapuge.png')
  absolute = true
  instituteImages = [
    {
      image: require('@/assets/boc.png'),
      alt: 'boc',
    },
    {
      image: require('@/assets/itn.png'),
      alt: 'itn',
    },
    {
      image: require('@/assets/rupavahini.png'),
      alt: 'rupavahini',
    },
    {
      image: require('@/assets/lakehouse.png'),
      alt: 'lakehouse',
    },
    {
      image: require('@/assets/hdfc.png'),
      alt: 'hdfc',
    },
    {
      image: require('@/assets/hnb.png'),
      alt: 'hnb',
    },
    {
      image: require('@/assets/tnl.png'),
      alt: 'tnl',
    },
    {
      image: require('@/assets/ceylinco.png'),
      alt: 'ceylinco',
    },
  ]
  images: string[] = []
  languageConfig = 'english'

  head() {
    return {
      title: 'Home',
    }
  }

  async mounted() {
    this.languageConfig = (await localStorage.getItem('language')) ?? 'sinhala'
    await this.retrieveHomepageImages()
  }

  get isMobileDevice() {
    if (process.client) {
      let width = window.innerWidth
      return width < 640
    }
  }

  get homepageData() {
    return this.languageConfig === 'english'
        ? {
          slogan: 'Reinvent your garden space.',
          projectsMessage:
              "Landscaping excellence, creative solutions, quality craftsmanship.",
          cardData: [
            {
              image: this.pots,
              title: 'View our concrete products',
              text: 'Our products are made from 100% reinforced concrete which is as twice as strong than ordinary concrete mixture.',
              link: '/gallery'
            },
            {
              image: this.fertilizer,
              title: 'Saru Fertilizer',
              text: 'Introducing our latest fertilizer product',
              link: '/products'
            },
            {
              image: this.landscape,
              title: 'Landscaping service',
              text: 'View some of our landscaping projects',
              link: '/landscaping'
            },
          ],
          differCardText: {
            title: 'Why do we differ from others?',
            text:
                'When Ranbima Art Gallery does gardening decor we follow a very special process that you can not see \n' +
                'from other companies.',
            itemList: [
              'First, we take photographs of your garden',
              'Secondly, we design your garden in the most natural way through digital software',
              'Through these photographs, you can imagine what Ranbima Art Gallery plans to set for you',
              'Then you can see how we design and plan garden pots, various kinds of natural and beautiful plants,\n' +
              'flower plants, grass, etc. and arrange them in proper places',
            ],
            text2:
                'We will create a design for your garden well in advance, according to your wishes and dreams.',
          },
          thirdCardText: {
            title: 'Creations for your home garden',
            text:
                'Every person hopes to build his own house. After making a house, the next step is to decorate it in ' +
                'their way. Most people think that it is a custom to give priority to gardening. We can use natural and ' +
                'artificial things for gardening. Through these things, we can make it a marvelous, attractive, and ' +
                'pleasing place.',
          },
          sponsors: {
            title: 'Our sponsors',
            text:
                'The people and institutions that helped and encouraged us to come to the\n' +
                '      present position',
          },
          viewMoreButton: {
            text: 'View more'
          }
        }
        : {
          slogan: 'ඔබේ ගෙ උයන නැවත ප්‍රතිනිර්මාණය කරන්න.',
          projectsMessage:
              'භූමි අලංකරණ විශිෂ්ටත්වය, නිර්මාණාත්මක විසඳුම්, ගුණාත්මක ශිල්පය.',
          cardData: [
            {
              image: this.pots,
              title: 'අපගේ කොන්ක්‍රීට් නිෂ්පාදන බලන්න',
              text: 'අපගේ නිෂ්පාදන සාමාන්‍ය කොන්ක්‍රීට් මිශ්‍රණයට වඩා දෙගුණයක් ශක්තිමත් වන 100% ශක්තිමත් කරන ලද කොන්ක්‍රීට් වලින් සාදා ඇත.',
              link: '/gallery'
            },
            {
              image: this.fertilizer,
              title: 'සරු පොහොර',
              text: 'අපගේ නවතම පොහොර නිෂ්පාදනය හඳුන්වා දීම',
              link: '/products'
            },
            {
              image: this.landscape,
              title: 'භූමි අලංකරණ සේවාව',
              text: 'අපගේ භූමි අලංකරණ ව්‍යාපෘති කිහිපයක් බලන්න',
              link: '/landscaping'
            },
          ],
          differCardText: {
            title: 'අප වෙනස් වන්නේ ඇයි?',
            text: 'උද්‍යාන අලංකරණය කිරීමේදී ලංකාවේ කුමන ආයතනයකින්වත් ලබාගත නොහැකි අන්දමේ ක්‍රියාවලියක් රන්බිම ආයතනය විසින් අනුගමන කරනු ලබයි.',
            itemList: [
              'පළමුව, අපි ඔබේ වත්තෙහි ඡායාරූප ගන්නෙමු',
              'දෙවනුව, අපි ඔබේ උද්‍යානය වඩාත් ස්වාභාවික ආකාරයකින් ඩිජිටල් මෘදුකාංග හරහා නිර්මාණය කරමු',
              'මෙම ඡායාරූප හරහා, රන්බිම ආයතනය ඔබ වෙනුවෙන් සැකසීමට අදහස් කරන්නේ කුමක්දැයි ඔබට සිතාගත හැකිය',
              'එවිට අපි උද්‍යාන භාජන, විවිධ වර්ගයේ ස්වාභාවික හා සුන්දර ශාක, මල් පැල, තණකොළ ආදිය සැලසුම් කරන ආකාරය ඔබට දැක ගත හැකිය.',
            ],
            text2:
                'ඔබගේ අභිමතයන් හා සිහින වලට අනුව අපි ඔබේ උද්‍යානය සඳහා කල්තියාම සැලසුමක් සාදන්නෙමු.',
          },
          thirdCardText: {
            title: 'ගෙදර උයන හැඩ කරන උද්‍යාන නිර්මාණ',
            text:
                'ඕනෑම පුද්ගලයකුගේ බලාපොරොත්තුව තමගේම නිවසක් ගොඩනගා ගැනීමයි. නිවසක් ඉදිකරගත් ඔබ ඊළඟ පියවර ලෙස මුලුපුරන්නේ ' +
                'නිවස හැඩ වැඩ කරගැනීමටයි. මෙහිදී විශේෂ අවධානයක් ගෙඋයනට යොමු කිරීම බොහෝ දෙනෙකුගේ සිරිතකි. උද්‍යානය හැඩකර ගැනීමේදී ' +
                'ස්වාභාවික ද්‍රව්‍ය මෙන්ම කෘතිම දේ ද යොදා ගැනීමට පුළුවන. මෙමගින් නිවෙස තුළ මෙන්ම උද්‍යානය තුළ ද අපූර්ව සුන්දරත්වයක් ඇති කල හැකිය.',
          },
          sponsors: {
            title: 'අනුග්‍රාහකයින්',
            text: 'වර්තමාන තත්වයට පැමිණීමට අපට උදව් කළ සහ දිරිමත් කළ පුද්ගලයින් සහ ආයතන',
          },
          viewMoreButton: {
            text: 'තවත් බලන්න'
          }
        }
  }

  get hundredPercentImageStyle() {
    return this.$vuetify.breakpoint.sm
        ? {
          height: '700px',
        }
        : {
          height: '500px',
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
    this.images = await firebaseService.retrieveImageData('homepage')
  }
}
</script>

<style lang="scss">
.my-span {
  position: absolute;
  color: white;
  font-weight: bold;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

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
