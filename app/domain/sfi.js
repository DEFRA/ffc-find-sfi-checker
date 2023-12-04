const LandType = {
  ARABLE: 'Arable',
  TEMPORARY_GRASSLAND: 'TemporaryGrassland',
  HORICULTURAL_CROPS: 'HoriculturalCrops',
  NON_HORICULTURAL_CROPS: 'NonHoriculturalCrops',
  IMPROVED_GRASSLAND: 'ImprovedGrassland',
  LOW_INPUT_GRASSLAND: 'LowInputGrassland',
  MOORLAND: 'Moorland',
  HEDGEROWS: 'Hedgerows'
}

const LandTypeMap = new Map([
  [LandType.ARABLE, 'Arable crops'],
  [LandType.TEMPORARY_GRASSLAND, 'Temporary grassland (arable land)'],
  [LandType.HORICULTURAL_CROPS, 'Horicultural permanent crops'],
  [LandType.NON_HORICULTURAL_CROPS, 'Non-horticultural permanent crops'],
  [LandType.IMPROVED_GRASSLAND, 'Improved permanent grassland'],
  [LandType.LOW_INPUT_GRASSLAND, 'Low input permanent grassland'],
  [LandType.MOORLAND, 'Moorland'],
  [LandType.HEDGEROWS, 'Hedgerows']
])

module.exports = {
  LandType,
  LandTypeMap
}
