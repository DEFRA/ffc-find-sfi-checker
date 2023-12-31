const LandType = {
  ARABLE: 'Arable',
  TEMPORARY_GRASSLAND: 'TemporaryGrassland',
  HORTICULTURAL_CROPS: 'HorticulturalCrops',
  NON_HORTICULTURAL_CROPS: 'NonHorticulturalCrops',
  IMPROVED_GRASSLAND: 'ImprovedGrassland',
  LOW_INPUT_GRASSLAND: 'LowInputGrassland',
  MOORLAND: 'Moorland',
  HEDGEROWS: 'Hedgerows'
}

const LandTypeMap = new Map([
  [LandType.ARABLE, 'Arable crops'],
  [LandType.TEMPORARY_GRASSLAND, 'Temporary grassland (arable land)'],
  [LandType.HORTICULTURAL_CROPS, 'Horticultural permanent crops'],
  [LandType.NON_HORTICULTURAL_CROPS, 'Non-horticultural permanent crops'],
  [LandType.IMPROVED_GRASSLAND, 'Improved permanent grassland'],
  [LandType.LOW_INPUT_GRASSLAND, 'Low input permanent grassland'],
  [LandType.MOORLAND, 'Moorland'],
  [LandType.HEDGEROWS, 'Hedgerows']
])

module.exports = {
  LandType,
  LandTypeMap
}
