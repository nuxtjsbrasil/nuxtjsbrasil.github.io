const webpack = require('webpack')

const {
  title,
  homepage,
  description
} = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'
const baseUrl = isProd ? homepage : 'http://localhost:3000'

module.exports = {
  dev: !isProd,
  head: {
    title,
    htmlAttrs: {
      dir: 'ltr'
    },
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:locale', name: 'og:locale', content: 'pt_BR' },
      { hid: 'googlebot', name: 'googlebot', content: 'index,follow' },
      { hid: 'robots', name: 'robots', content: 'index,follow,noodp' },
      { hid: 'country', name: 'country', content: 'Brazil' },
      { hid: 'revisit-after', name: 'revisit-after', content: '7 days' },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' }
    ],
    link: [
      { rel: 'author', href: `${baseUrl}/humans.txt` }
    ]
  },
  loading: { color: '#435466' },
  plugins: [
    { src: '~/plugins/browser.js', ssr: false }
  ],
  modules: [
  ],
  build: {
    vendor: [
      'axios'
    ],
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            use: [ require('rupture')() ],
            preferPathResolver: 'webpack',
            import: [
              '~assets/stylus/config.styl',
              '~assets/stylus/base.styl',
              '~assets/stylus/buttons.styl'
            ]
          },
          context: '/'
        }
      })
    ],
    extend (config, { isDev, isClient }) {
      config.devtool = 'source-map'

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
