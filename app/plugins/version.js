const config = require('../config')

module.exports = {
  plugin: {
    name: 'version',
    register: (server, _) => {
      server.ext('onPreResponse', (request, h) => {
        const statusCode = request.response.statusCode
        if (
          request.response.variety === 'view' &&
          statusCode !== 404 &&
          statusCode !== 500 &&
          request.response.source.manager._context
        ) {
          request.response.source.manager._context.version = config.version
          request.response.source.manager._context.currentPage = request.path
        }

        return h.continue
      })
    }
  }
}
