const retrieveSfiActions = require('../repositories/sfi-repository')
const { getLandTypeOptions } = require('../domain/filter-options')

const generatePrintLink = (hiddenSfis) => {
  let url = '/print?'

  for (const [index, hiddenSfi] of hiddenSfis.entries()) {
    url += `hiddenSfis=${hiddenSfi}`

    if (index < hiddenSfis.length - 1) {
      url += '&'
    }
  }

  return url
}

module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
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
      printLink: generatePrintLink(hiddenSfis)
    })
  }
}
