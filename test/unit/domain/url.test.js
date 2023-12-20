const { LandType } = require('../../../app/domain/sfi')
const {
  getSelectedLandTypesFromUrl,
  getHiddenSfisFromUrl,
  getPath,
  generatePrintLink
} = require('../../../app/domain/url')

describe('url', () => {
  describe('getSelectedLandTypesFromUrl', () => {
    test('extracts land types from url address', () => {
      const url = 'https://example.com/?landTypes=Arable&landTypes=Moorland&hiddenSfis=SAM1&hiddenSfis=SAM2'

      const sfis = getSelectedLandTypesFromUrl(url)

      expect(sfis).toStrictEqual(['Arable', 'Moorland'])
    })
  })

  describe('getHiddenSfisFromUrl', () => {
    test('extracts sfis from url address', () => {
      const url = 'https://example.com/?landTypes=Arable&landTypes=Moorland&hiddenSfis=SAM1&hiddenSfis=SAM2'

      const sfis = getHiddenSfisFromUrl(url)

      expect(sfis).toStrictEqual(['SAM1', 'SAM2'])
    })
  })

  describe('getPath', () => {
    test('returns url with landTypes and hiddenSfis', () => {
      const hiddenSfis = ['SAM1', 'SAM2']
      const landTypes = [LandType.ARABLE, LandType.MOORLAND]

      const url = getPath(landTypes, hiddenSfis)

      expect(url).toBe('?landTypes=Arable&landTypes=Moorland&hiddenSfis=SAM1&hiddenSfis=SAM2')
    })
  })

  describe('generatePrintLink', () => {
    test('print link is generated with hiddenSfis and landTypes', () => {
      const hiddenSfis = ['SAM1', 'SAM2']
      const landTypes = [LandType.ARABLE, LandType.MOORLAND]

      const link = generatePrintLink(landTypes, hiddenSfis)

      expect(link).toBe('/print?landTypes=Arable&landTypes=Moorland&hiddenSfis=SAM1&hiddenSfis=SAM2')
    })
  })
})
