import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',

  head: {
    titleTemplate: '%s - Landscape Ranbima',
    title: 'Landscape Ranbima',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyD2J6I4m1Xmnfb9QktflIsOlInqokdWXis',
      authDomain: 'landscape-ranbima.firebaseapp.com',
      databaseURL: 'https://landscape-ranbima.firebaseio.com',
      projectId: 'landscape-ranbima',
      storageBucket: 'landscape-ranbima.appspot.com',
      messagingSenderId: '693317607795',
      appId: '1:693317607795:web:166186a24bcc67b6ede506',
      measurementId: 'G-N50R1CMWPF'
    },
    services: {
      analytics: true,
      onFirebaseHosting: true,
      storage: true,
      firestore: true
    }
  },

  firestore: {
    memoryOnly: true, // default
    chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
    enablePersistence: true,
    emulatorPort: 5600,
    emulatorHost: 'localhost',
    settings: {
      // Firestore Settings - currently only works in SPA mode
    }
  },

  axios: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
}
