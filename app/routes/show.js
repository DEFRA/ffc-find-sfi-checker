const { getSelectedLandTypesFromUrl, getHiddenSfisFromUrl, constructUrl } = require('../domain/url')

module.exports = [
  {
    method: 'POST',
    path: '/show/{action}',
    handler: (request, h) => {
      if (request.headers['content-length'] <= 0) {
        throw new Error('Content length cannot be empty')
      }

      const lastUrl = request.info.referrer
      const action = request.params.action

      const landTypes = getSelectedLandTypesFromUrl(lastUrl)
      const hiddenSfis = getHiddenSfisFromUrl(lastUrl)
      const modifedHiddenSfis = hiddenSfis
        .map((hiddenSfi) => {
          if (hiddenSfi !== action) {
            return hiddenSfi
          }

          return undefined
        })
        .filter((hiddenSfis) => hiddenSfis !== undefined)

      const url = constructUrl(lastUrl, landTypes, modifedHiddenSfis)

      return h.redirect(url)
    }
  },
  {
    method: 'POST',
    path: '/show/all',
    handler: (request, h) => {
      if (request.headers['content-length'] <= 0) {
        throw new Error('Content length cannot be empty')
      }

      const lastUrl = request.info.referrer
      const landTypes = getSelectedLandTypesFromUrl(lastUrl)

      const url = constructUrl(lastUrl, landTypes, [])

      return h.redirect(url)
    }
  }
]
