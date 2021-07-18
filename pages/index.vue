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
            <v-card elevation="0" class="pa-4" tile min-height="350px">
              <v-row>
                <v-col>
                  <v-img
                    class="mx-auto"
                    :src="card.image"
                    :aspect-ratio="1"
                    max-height="100px"
                    max-width="100px"
                  ></v-img>
                </v-col>
              </v-row>
              <v-card-title class="align-center justify-center text-center">
                {{ card.title }}
              </v-card-title>
              <v-card-text class="align-center justify-center text-center"
                >{{ card.text }}
              </v-card-text>
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
import { Component, Vue } from 'nuxt-property-decorator'
import { FirebaseService } from '~/services/FirebaseService'

@Component
export default class Index extends Vue {
  durable = require('@/assets/durable.png')
  medal = require('@/assets/medal.png')
  palette = require('@/assets/palette.png')
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
              image: this.medal,
              title: '100% Reinforced Quality',
              text: 'Our products are made from 100% reinforced concrete which is as twice as strong than ordinary concrete mixture.',
            },
            {
              image: this.durable,
              title: 'Guaranteed Resistance',
              text: 'Resistance against any salty or chemical substance and fail-safe external coating.',
            },
            {
              image: this.palette,
              title: 'Beautiful Colors',
              text: 'You like a colour? We got it! Our clients can pick colours of their choice from wide ranging palette.',
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
        }
      : {
          slogan: 'ඔබේ ගෙ උයන නැවත ප්‍රතිනිර්මාණය කරන්න.',
          projectsMessage:
            'භූමි අලංකරණ විශිෂ්ටත්වය, නිර්මාණාත්මක විසඳුම්, ගුණාත්මක ශිල්පය.',
          cardData: [
            {
              image: this.medal,
              title: '100% ශක්තිමත් කළ ගුණාත්මකභාවය',
              text: 'අපගේ නිෂ්පාදන සාමාන්‍ය කොන්ක්‍රීට් මිශ්‍රණයට වඩා දෙගුණයක් ශක්තිමත් වන 100% ශක්තිමත් කරන ලද කොන්ක්‍රීට් වලින් සාදා ඇත.',
            },
            {
              image: this.durable,
              title: 'සහතික කළ ඔරොත්තුව',
              text: 'ඕනෑම ලවණ හා රසායනික ද්‍රව්‍ය වලට 100% ක්ම ඔරොත්තු දෙන ආරක්ෂිත බාහිර ආලේපනය.',
            },
            {
              image: this.palette,
              title: 'ලස්සන වර්ණ',
              text: 'ඔබ වර්ණයක් සඳහා කැමතිද? අප ගාව එය ඇත! අපගේ සේවාදායකයින්ට මතුපිට ආලේපිත වර්ණ අසීමිත ප්‍රමාණයකින් ලබා ගත හැක.',
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
