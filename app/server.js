require('./insights').setup()
const hapi = require('@hapi/hapi')

// const getSecurityPolicy = () =>
//   "default-src 'self';" +
//   "object-src 'none';" +
//   "script-src 'self' www.google-analytics.com *.googletagmanager.com ajax.googleapis.com *.googletagmanager.com/gtm.js 'unsafe-inline' 'unsafe-eval' 'unsafe-hashes';" +
//   "form-action 'self';" +
//   "base-uri 'self';" +
//   "connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com" +
//   "style-src 'self' 'unsafe-inline' tagmanager.google.com *.googleapis.com;" +
//   "img-src 'self' *.google-analytics.com *.googletagmanager.com;"
async function createServer () {
  // Create the hapi server
  const server = hapi.server({
    port: process.env.PORT || 3000,
    routes: {
      validate: {
        options: {
          abortEarly: false
        }
      }
    },
    router: {
      stripTrailingSlash: true
    }
  })

  // Register the plugins
  await server.register(require('@hapi/inert'))

  await server.register(require('@hapi/cookie'))
  await server.register(require('./plugins/views'))
  await server.register(require('./plugins/router'))
  await server.register(require('./plugins/cookies'))
  await server.register(require('./plugins/analytics'))
  // await server.register({
  //   plugin: require('./plugins/header'),
  //   options: {
  //     keys: [
  //       { key: 'X-Frame-Options', value: 'deny' },
  //       { key: 'Access-Control-Allow-Origin', value: '*' },
  //       { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  //       { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
  //       { key: 'X-XSS-Protection', value: '1; mode=block' },
  //       { key: 'Strict-Transport-Security', value: 'max-age=31536000;' },
  //       { key: 'Cache-Control', value: 'no-cache' },
  //       { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
  //       { key: 'Permissions-Policy', value: 'Interest-Cohort=()' },
  //       {
  //         key: 'Content-Security-Policy',
  //         value: getSecurityPolicy()
  //       }
  //     ]
  //   }
  // })

  return server
}

module.exports = createServer
