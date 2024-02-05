const { serviceName, serviceTitle, serviceUri } = require('../config')

const localVars = [
  {
    key: 'serviceName',
    value: serviceName
  },
  {
    key: 'serviceTitle',
    value: serviceTitle
  },
  {
    key: 'serviceUri',
    value: serviceUri
  }
]

module.exports = {
  plugin: {
    name: 'locals',
    register: (server, _) => {
      server.ext('onPreResponse', (request, h) => {
        const statusCode = request.response.statusCode
        if (
          request.response.variety === 'view' &&
          statusCode !== 404 &&
          statusCode !== 500 &&
          request.response.source.manager._context
        ) {
          for (const localVar of localVars) {
            request.response.source.manager._context[localVar.key] = localVar.value
          }
        }

        return h.continue
      })
    }
  }
}
