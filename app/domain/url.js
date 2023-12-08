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

const generatePrintLink = (landTypes, hiddenSfis) => {
  let url = '/print?'

  for (const [index, landType] of landTypes.entries()) {
    url += `landTypes=${landType}`

    if (index < landTypes.length) {
      url += '&'
    }
  }

  for (const [index, hiddenSfi] of hiddenSfis.entries()) {
    url += `hiddenSfis=${hiddenSfi}`

    if (index < hiddenSfis.length - 1) {
      url += '&'
    }
  }

  return url
}

module.exports = {
  getSelectedLandTypesFromUrl,
  getHiddenSfisFromUrl,
  constructUrl,
  generatePrintLink
}
