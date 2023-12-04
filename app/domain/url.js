const { getLandTypeFromStrings } = require('./filter-options')

const getSelectedLandTypesFromUrl = (url) => {
  const parsedUrl = new URL(url)
  const params = parsedUrl.searchParams.getAll('landTypes')

  const landTypes = getLandTypeFromStrings(params)

  return landTypes
}

const getHiddenSfisFromUrl = (url) => {
  const parsedUrl = new URL(url)
  const params = parsedUrl.searchParams.getAll('hiddenSfis')

  return params
}

const constructUrl = (url, landTypes, hiddenSfis) => {
  const parsedUrl = new URL(url)
  const baseUrl = parsedUrl.origin

  const constructedUrl = new URL(baseUrl)

  for (const landType of landTypes) {
    constructedUrl.searchParams.append('landTypes', landType)
  }

  for (const hiddenSfi of hiddenSfis) {
    constructedUrl.searchParams.append('hiddenSfis', hiddenSfi)
  }

  return constructedUrl.href
}

module.exports = {
  getSelectedLandTypesFromUrl,
  getHiddenSfisFromUrl,
  constructUrl
}
