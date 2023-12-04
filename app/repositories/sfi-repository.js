const getSfiData = require('./data')

const containsLandTypes = (selectedLandTypes, sfiLandTypes) => {
  for (const selectedLandType of selectedLandTypes) {
    if (sfiLandTypes.includes(selectedLandType)) {
      return true
    }
  }

  return false
}

const retrieveSfiActions = (landTypes) => {
  let sfiActions = getSfiData()

  if (landTypes.length > 0) {
    sfiActions = sfiActions.filter((sfiAction) => containsLandTypes(landTypes, sfiAction.landTypes))
  }

  return sfiActions
}

module.exports = retrieveSfiActions
