const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/tutorial-web-2021' : '',
  trailingSlash: true,
  future: {
    webpack5: true,
  },
}
