<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-sm-6">
        <v-sheet
          color="accent"
          elevation="2"
          class="ma-2 ma-sm-0 pb-2"
          tile
        >
          <v-card elevation="0" class="mx-auto pa-4" tile>
            <v-card-title>
              <span>{{ dataSet.creations.title }}</span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col class="col-12" style="white-space: pre-line">
                  <div>
                    {{ dataSet.creations.text1 }}
                  </div>
                  <div>
                    {{ dataSet.creations.text2 }}
                  </div>
                  <div>
                    {{ dataSet.creations.text3 }}
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-spacer></v-spacer>
      <v-col class="col-12 col-sm-6">
        <v-sheet
          color="accent"
          elevation="2"
          class="ma-2 ma-sm-0 pb-2"
          tile
        >
          <v-card class="mx-auto pa-4" tile>
            <v-card-title>
              <span>{{ dataSet.uniqueness.title }}</span>
            </v-card-title>
            <v-card-text>
              <div>
                {{ dataSet.uniqueness.text1 }}
              </div>
              <br/>
              <div>
                <ul v-for="item in dataSet.uniqueness.itemList" :key="item">
                  <li>{{ item }}</li>
                </ul>
              </div>
              <br/>
              <div>
                {{ dataSet.uniqueness.text2 }}
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

@Component
export default class About extends Vue {
  languageConfig = "english"

  head() {
    return {
      title: "About"
    }
  }

  async mounted() {
    this.languageConfig = await localStorage.getItem("language") ?? "english"
  }

  get dataSet() {
    return this.languageConfig === "english" ? {
      creations: {
        title: "Creations for your home garden",
        text1: "Every person hopes to build his own house. After making a house, the next step is to decorate it in " +
          "their way. Most people think that it is a custom to give priority to gardening. We can use natural and " +
          "artificial things for gardening. Through these things, we can make it a marvelous, attractive, and " +
          "pleasing place.",
        text2: "We can see a lot of garden decoration in the market. But our creations are unique and different from " +
          "those. There is a special ability when you buy our products which can be changed equal products after five " +
          "years. For the first time our Ranbima Art Gallery has introduced Sri Lankan concrete home gardening decor. " +
          "We acquired local and foreign technology. We have a wide range of local and foreign traditional products. " +
          "We have been producing home garden decors to suit the garden, veranda, sitting room, or whatever places " +
          "they are required. Among the local and foreign ancient, traditional cultural, big and small statues pots " +
          "and sprinklers are available.",
        text3: "Our products are made from 100% reinforced concrete which is twice as strong as an ordinary concrete " +
          "mixture. These advanced concrete items are invented by Sri Lankan experts after many years of research."
      },
      uniqueness: {
        title: "Uniqueness of our products",
        text1: "Using latest local and foreign technology by Ranbima Ciminco will turn your garden to a royal park.",
        text2: "If we undertake your landscapes, Special discounts for concrete products. No other concrete item " +
          "maker will provide you with these unique products from Ranbima.",
        itemList: [
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
    } : {
      creations: {
        title: "ගෙදර උයන හැඩ කරන උද්‍යාන නිර්මාණ",
        text1: "ඕනෑම පුද්ගලයකුගේ බලාපොරොත්තුව තමගේම නිවසක් ගොඩනගා ගැනීමයි. නිවසක් ඉදිකරගත් ඔබ ඊළඟ පියවර ලෙස මුලුපුරන්නේ " +
          "නිවස හැඩ වැඩ කරගැනීමටයි. මෙහිදී විශේෂ අවධානයක් ගෙඋයනට යොමු කිරීම බොහෝ දෙනෙකුගේ සිරිතකි. උද්‍යානය හැඩකර ගැනීමේදී " +
          "ස්වාභාවික ද්‍රව්‍ය මෙන්ම කෘතිම දේ ද යොදා ගැනීමට පුළුවන. මෙමගින් නිවෙස තුළ මෙන්ම උද්‍යානය තුළ ද අපූර්ව සුන්දරත්වයක් ඇති කල හැකිය.",
        text2: "වෙළෙඳපොළ තුළ බොහෝ උද්‍යාන නිර්මාණ දැක ගැනීමට ලැබේ. එහෙත් ඒ සෑම නිර්මාණයකටම වඩා මෙම උද්‍යාන නිර්මාණයන්හි " +
          "යම් විශේෂත්වයක් ඇත. එනම් ඔබ අද මිලදී ගන්නා භාණ්ඩ තවත් වසර 5ක් ගතවූවත් එවැනි ම වෙනත් නිර්මාණයකට මාරු කරගැනීමේ " +
          "හැකියාව පවතින නිසාය.\n\nමෙම උද්‍යාන නිර්මාණ හරහා ශ්‍රී ලාංකීය කොන්ක්‍රීට් නිර්මාණ කරනය පළමු වරට ගෙ උයන් නිර්මාණ කලාව " +
          "හඳුන්වාදීමට රන්බිම සිමින්කෝ ආර්ට් ගැලරි අප ආයතනය පියවර ගෙන තිබේ. දේශීය විදේශීය තාක්‍ෂණය යොදා ගනිමින් සිදු කළ දේශීය \n" +
          "සහ විදේශීය සම්ප්‍රදායේ අනගි නිපැයුම් රාශියක් අප සතුය.\n\nරන්බිම සිමින්කෝ ආර්ට් ගැලරි ආයතනය උද්‍යානයට, ආලින්දයට, විසිත්ත " +
          "කාමරයට යනාදී නිවසේ ඹ්නෑම ස්ථානයකට සරිලන පරිදි උද්‍යාන නිර්මාණ නිමවා තිබීම විශේෂතය. පිළිරූ දේශීය විදේශීය සංස්කෘතියෙන් බිහි වූ " +
          "පෞරාණික විශාල ප්‍රමාණයේ සහ කුඩා ප්‍රමාණයේ බදුන් සහ වතුරමල් යනාදී දේශීයව සහ විදේශීයව දකින බොහෝ නිර්මාණ ඒ අතර තිබේ.",
        text3: "මේ සෑම නිර්මාණයක්ම සාමන්‍ය කොන්ක්‍රීට් මිශ්‍රණයට වඩා දෙගුණයක් ශක්තිමත් 100% කොන්ක්‍රීට් යොදා නිපදවා ඇත. මුර්ති කලවේ " +
          "උපන් හපනුන් වන ශ්‍රී ලාංකිකයන් විසින් දීර්ඝ කාලයක් පුරා පර්‍යේශණ කරමින් සංවර්ධනය කළ කොන්ක්‍රීට් තාක්‍ෂණයෙන් මේවා නිම කර " +
          "තිබේ. මේ නිසා සෑම උද්‍යාන නිර්මාණයක් වෙනුවෙන් ම රන්බිම සිමින්කෝ ආයතනය පූර්ණ වගකීම දරයි.\n\nඕනෑම පාරිභෝගිකයකුගේ " +
          "අවශ්‍යතාවයට සරිලන පරිදි රන්බිම සිමින්කෝ සිය නිශ්පාදන පාරිභෝගිකයා වෙත තිළිණ කරයි. ලංකාවේ ඕනෑම දේශගුණයකට සරිලන ලෙස " +
          "පරිසරයේ ඇති ස්වාභාවික වර්ණයන්ට ගැළපෙන ආකාරයෙන් සිය නිෂ්පාදන වෙළෙඳපොළට ඉදිරිපත් කිරීමටද අපි සැලකිලිමත් වෙති. භූමියේ " +
          "අවශ්‍යතාව මත ඉදිවූ නිර්මාණයන් ද ඒ අතර දැකගත හැකිය. මේවා නිවසට මෙන්ම උද්‍යානයට එක්කරන්නේ පුදුමාකාර සුන්දරත්වයකි.\n\n" +
          "රන්බිම සිමින්කෝ ඔබේ ගෙ උයනට වඩා විචිත්‍රවත් සහ ආකර්‍ෂණීය පෙනුමක් ලබාදෙන්නට ඇප කැපවී කටයුතු කරයි. අප වෙතින් මිලදී ගන්නා " +
          "උද්‍යාන නිර්මාණ තුලින් ඔබේ ගෙ උයනට ලැබෙන්නේ සිතාගත නොහැකි ආලෝකයක් සහ අලංකාරයකි."
      },
      uniqueness: {
        title: "ලංකාවේ අනෙකුත් නිර්මාණයන්ගෙන් අප වෙනස් වන්නේ ඇයි?",
        text1: "ශ්‍රී ලාංකීය කොන්ක්‍රීට් කර්මාන්තයට පළමුව හදුන්වා දෙන නවතම දෙස් විදෙස් තාක්ෂණයෙන් බිහිවන දේශීය හා විදේශීය සම්ප්‍රදායේ අනගි " +
          "නිපැයුම් රැසක් ඔබේ ගෙ උයන ආලකමන්දාවක් කරයි.",
        text2: "අප විසින්ම ගෙවතු අලංකරණය කිරිමේදී කොන්ක්‍රීට් නිශ්පාදන සඳහා විශේෂ වට්ටම් ලංකාවේ වෙන කුමන නිශ්පාදන ආයතනයකින්වත් " +
          "ලබා ගත නොහැකි මේ අසම සම නිශ්පාදන රන්බිම වෙතින්.",
        itemList: ["සාමාන්‍ය කොන්ක්‍රිට් මිශ්‍රණයට වඩා දෙගුණයක් ශක්තිමත් 100% කොන්ක්‍රීට් වලින් නිපදවා ඇත",
          "මූර්ති කලාවේ උපන් හපනුන් වන ශ්‍රී ලාංකිකයන් විසින් දීර්ඝ කාලයක් පුරා පර්යේෂණ කරමින් සංවර්ධනය කළ කොන්ක්‍රීට් තාක්ෂණයෙන් නිපදවා ඇත",
          "ලවණ හා රසායනික ද්‍රව්‍ය වලට 100% ක්ම ඔරොත්තු දෙයි",
          "පූර්ණ සවිබර භාවිතයෙන් යුක්ත වන අතර වතුර උරා ගැනීම අවම කරයි",
          "වායු බුබුළු වලින් තොර එයර් එන්ට්‍රේනින් (Air Entraining) තාක්ෂණයෙන් මිශ්‍ර කර ඇත",
          "වගකීම සහිත මතුපිට ආරක්ෂිත ආලේපය",
          "ඉරිතැලීම් පිපිරීම් වලින් සම්පූර්ණයෙන්ම තොරයි",
          "පූර්ණ ශක්තිමත් අභ්‍යන්තර යකඩ සැකිල්ල",
          "මතුපිට ආලේපිත වර්ණ අසීමිත ප්‍රමාණයකින් ලබා ගත හැක"
        ]
      }
    }
  }
}
</script>

<style scoped></style>
