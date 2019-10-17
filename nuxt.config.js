const APP_ENV = process.env.APP_ENV || 'local';

let modules = [
  '@nuxtjs/dotenv',
  'nuxt-imagemin'
];

if (APP_ENV !== 'production') {
  modules.push(['nuxt-robots-module', {
    /* module options */
    UserAgent: '*',
    Disallow: '/',
  }])
}

import data from './static/routes.json'
let dynamicRoutes = () => {
 return new Promise(resolve => {
   resolve(data.map(el => `lineup/${el.slug}`))
 })
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '9 April – 13 April | Arctic Sounds Festival',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Arctic Sounds Festival' },
      /* App Store Smart Banner */
      { name: 'apple-itunes-app', content: 'app-id=1349445689' },
      /* Google PLAY Smart Banner */
      { name: 'smartbanner:title', content: 'Arctic Sounds' },
      { name: 'smartbanner:author', content: 'Greencopper' },
      { name: 'smartbanner:price', content: 'FREE' },
      { name: 'smartbanner:price-suffix-google', content: ' - In Google Play' },
      { name: 'smartbanner:icon-google', content: '/assets/img/logo-rgb.png' },
      { name: 'smartbanner:button', content: 'VIEW' },
      { name: 'smartbanner:button-url-google', content: 'https://play.google.com/store/apps/details?id=fm.golive.arcticsoundfestival6305557d' },
      { name: 'smartbanner:enabled-platforms', content: 'android' },
      /* SoMe Open Graph */
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Arctic Sounds 2020 | 9 April - 13 April' },
      { property: 'og:description', content: 'Arctic Sounds Music festival in Sisimiut, Greenland. Rough. Real. Remote.' },
      { property: 'og:url', content: 'https://arcticsounds.gl/' },
      { property: 'og:image', content: '/assets/img/logo-rgb.png' },
      { property: 'og:image:alt', content: 'Arctic Sounds Logo' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* Google PLAY Smart Banner */
      { rel: 'stylesheet', href: '/meta/css/smartbanner.min.css' },
    ],
    script: [
      /* Google Play Smart Banner */
      { src: '/meta/js/smartbanner.min.js', defer: true }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2073a5' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/output/frontend.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/directives.js',
    '@/plugins/contentful.js',
    { src: '@/plugins/vueCountdown.js', mode: 'client' },
    { src: '@/plugins/vueInstagram.js', mode: 'client' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules,

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || '',
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || '',
    IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN || '',
    GREENCOPPER_GOEVENT_HASH: process.env.GREENCOPPER_GOEVENT_HASH || ''
  },

  /*
  ** Build configuration
  */
  build: {

  },

  /*
  ** Generate configuration
  */
  generate: {
    routes: dynamicRoutes
  }




  /* 
  generate: {
    routes: function () {
      return axios.get("'https://s3.amazonaws.com/goeventweb-static.greencopper.com/" + process.env.GREENCOPPER_GOEVENT_HASH + "/arcticsoundfestival-2019/data/eng/artists.json'")
      .then((res) => {
        return res.data.map((id) => {
          return {
            route: '/lineup/' + id.slug,
            payload: slug
          }
        })
      })
    }
  }
  */
}
