const routes = [
  '/',
  '/2017-year-in-review',
  '/2018-my-goals',
]

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kenzo Takahashi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    routes: routes
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/bootstrap-vue',
    '@nuxtjs/font-awesome',
    '@nuxtjs/sitemap',
     ['@nuxtjs/google-analytics', { id: 'UA-62716182-5' }], 
    ['@nuxtjs/markdownit', { html: true, linkify: true, breaks: true }]
  ],
  sitemap: {
    path: '/sitemap.xml',
    generate: true,
    routes: routes
  }
}
