const { retrieveSfiActions } = require('../repositories/sfi-repository')
const { getLandTypeOptions } = require('../domain/filter-options')
const { generatePrintLink } = require('../domain/url')
const config = require('../config')

module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    const version = config.version

    const selectedLandTypes = [].concat(request.query.landTypes || [])
    const sfiActions = retrieveSfiActions(selectedLandTypes)
    const landTypeItems = getLandTypeOptions(selectedLandTypes)

    const hiddenSfis = [].concat(request.query.hiddenSfis || [])

    const filteredSfiActions = sfiActions.map((sfiAction) => {
      if (hiddenSfis.includes(sfiAction.code)) {
        return {
          ...sfiAction,
          hidden: true
        }
      }

      return sfiAction
    })

    return h.view('list-sfi', {
      sfiActions: filteredSfiActions,
      landTypeItems,
      hiddenSfis,
      selectedLandTypes,
      printLink: generatePrintLink(selectedLandTypes, hiddenSfis),
      version,
      serviceUri: config.serviceUri
    })
  }
}
