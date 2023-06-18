export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Home',
    titleTemplate: `%s - ` + (process.env.APP_NAME || 'KompleteCare'),
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/scss/main.scss',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/repositories.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    middleware: ['auth'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'https://testdrive.kompletecare.com/api',
    appName: process.env.APP_NAME || 'KompleteCare',
  },

  axios: {
    baseURL: process.env.BASE_URL || 'https://testdrive.kompletecare.com/api',
    headers: {
      common: {
        Accept: 'application/vnd.api+json',
        'content-type': 'application/vnd.api+json',
      },
      post: {
        'content-type': 'application/vnd.api+json',
      },
      patch: {
        'content-type': 'application/vnd.api+json',
      },
      delete: {
        'content-type': 'application/vnd.api+json',
      },
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
    },
  },

  toast: {
    position: 'bottom-center',
    duration: 5000,
    keepOnHover: true,
    fullWidth: false,
    fitToScreen: true,
    // className: 'vue-toast-custom',
    closeOnSwipe: true,
    register: [
      // Register custom toasts
      // @todo add custom messages as they come : login failed, register failed etc
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
    action: {
      text: 'Close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      },
    },
  },

  auth: {
    strategies: {
      local: {
        token: {
          propertyName: 'data.token',
          global: true,
          // required: true,
          // type: 'Bearer',
        },
        user: false,
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '', method: 'post' },
          user: false,
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/',
    },
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  styleResources: {
    scss: '@/assets/scss/_variables.scss',
  },
}
