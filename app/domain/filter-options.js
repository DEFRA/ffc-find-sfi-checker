const { LandType, LandTypeMap } = require('./sfi')

const getLandTypeOptions = (selectedLandTypes) => {
  const items = []

  for (const landTypeKey of Object.values(LandType)) {
    items.push({
      value: landTypeKey,
      text: LandTypeMap.get(landTypeKey),
      checked: selectedLandTypes.includes(landTypeKey)
    })
  }

  return items
}

const getLandTypeFromStrings = (landTypeStrings) => {
  const items = []

  for (const landTypeString of landTypeStrings) {
    const landType = getLandTypeFromString(landTypeString)

    if (landType) {
      items.push(landType)
    }
  }

  return items
}

const getLandTypeFromString = (landTypeString) => {
  for (const landTypeKey of Object.keys(LandType)) {
    if (LandType[landTypeKey] === landTypeString) {
      return LandType[landTypeKey]
    }
  }
}

module.exports = {
  getLandTypeOptions,
  getLandTypeFromStrings
}
