const { googleTagManagerKey } = require('../config')

module.exports = {
  plugin: {
    name: 'analytics',
    register: (server, _) => {
      server.ext('onPreResponse', (request, h) => {
        const statusCode = request.response.statusCode
        if (
          request.response.variety === 'view' &&
          statusCode !== 404 &&
          statusCode !== 500 &&
          request.response.source.manager._context
        ) {
          request.response.source.manager._context.googleTagManagerKey = googleTagManagerKey
        }

        return h.continue
      })
    }
  }
}
