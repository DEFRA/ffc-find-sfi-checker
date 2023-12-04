const { getSelectedLandTypesFromUrl, getHiddenSfisFromUrl, constructUrl } = require('../domain/url')

module.exports = {
  method: 'POST',
  path: '/show/{action}',
  handler: (request, h) => {
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
}