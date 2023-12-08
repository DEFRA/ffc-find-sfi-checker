const { retrieveSfiActions } = require('../repositories/sfi-repository')

module.exports = {
  method: ['GET', 'POST'],
  path: '/print',
  handler: async (request, h) => {
    const selectedLandTypes = [].concat(request.query.landTypes || [])
    const sfiActions = retrieveSfiActions(selectedLandTypes)

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

    return h.view('print-page', {
      sfiActions: filteredSfiActions
    })
  }
}
