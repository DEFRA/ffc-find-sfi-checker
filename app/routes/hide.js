const { getSelectedLandTypesFromUrl, getHiddenSfisFromUrl, constructUrl } = require('../domain/url')

module.exports = {
  method: 'POST',
  path: '/hide/{action}',
  handler: (request, h) => {
    const lastUrl = request.info.referrer
    const action = request.params.action

    const landTypes = getSelectedLandTypesFromUrl(lastUrl)
    const hiddenSfis = getHiddenSfisFromUrl(lastUrl)
    hiddenSfis.push(action)

    const url = constructUrl(lastUrl, landTypes, hiddenSfis)

    return h.redirect(url)
  }
}
