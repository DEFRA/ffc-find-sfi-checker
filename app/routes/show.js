const { getPath } = require('../domain/url')

module.exports = [
  {
    method: 'POST',
    path: '/show/{action}',
    handler: (request, h) => {
      if (request.headers['content-length'] <= 0) {
        throw new Error('Content length cannot be empty')
      }

      const action = request.params.action

      const landTypes = [].concat(request.payload.landTypes || [])
      const hiddenSfis = [].concat(request.payload.hiddenSfis || [])
      const modifedHiddenSfis = hiddenSfis
        .map((hiddenSfi) => {
          if (hiddenSfi !== action) {
            return hiddenSfi
          }

          return undefined
        })
        .filter((hiddenSfis) => hiddenSfis !== undefined)

      const path = getPath(landTypes, modifedHiddenSfis)

      return h.redirect(`/${path}#${action}`)
    }
  },
  {
    method: 'POST',
    path: '/show/all',
    handler: (request, h) => {
      if (request.headers['content-length'] <= 0) {
        throw new Error('Content length cannot be empty')
      }

      const landTypes = [].concat(request.payload.landTypes || [])

      const path = getPath(landTypes, [])

      return h.redirect(`/${path}#list`)
    }
  }
]
