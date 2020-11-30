export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'official.funnest.tw',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'js/jquery.min.js'
      },
      {
        src: 'js/popper.min.js'
      },
      {
        src: 'js/bootstrap.min.js'
      },
      {
        src: 'js/jquery.min.js'
      },
      {
        src: 'js/jquery.easing.min.js'
      },
      {
        src: 'js/swiper.min.js'
      },
      {
        src: 'js/jquery.magnific-popup.js'
      },
      {
        src: 'js/morphext.min.js'
      },
      {
        src: 'js/isotope.pkgd.min.js'
      },
      {
        src: 'js/validator.min.js'
      },
      {
        src: 'js/scripts.js'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
