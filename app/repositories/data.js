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

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat non enim in laoreet. Fusce tempor massa leo, id luctus urna bibendum nec. Quisque sit amet orci leo. In maximus mauris in interdum vestibulum. Ut consequat elit at scelerisque placerat.'

const getSfiData = () => [
  {
    name: 'Pollen and nectar flower mix',
    code: 'AHL1',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    amountLabel: '£614 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-arable-and-horticultural-land#ahl1-pollen-and-nectar-flower-mix',
    overview: lorem
  },
  {
    name: 'Winter bird food on arable and horticultural land',
    code: 'AHL2',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    amountLabel: '£732 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-arable-and-horticultural-land#ahl2-winter-bird-food-on-arable-and-horticultural-land',
    overview: lorem
  },
  {
    name: 'Grassy field corners or blocks',
    code: 'AHL3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    amountLabel: '£590 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-arable-and-horticultural-land#ahl3-grassy-field-corners-or-blocks',
    overview: lorem
  },
  {
    name: '4m to 12m grass buffer strip on arable and horticultural land',
    code: 'AHL4',
    landTypes: [LandType.ARABLE, LandType.HORICULTURAL_CROPS],
    amountLabel: '£451 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-buffer-strips#ahl4-4m-to-12m-grass-buffer-strip-on-arable-and-horticultural-land',
    overview: lorem
  },
  {
    name: 'Assess and record hedgerow condition',
    code: 'HRW1',
    landTypes: [LandType.HEDGEROWS],
    amountLabel: '£3 per 100 metres',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw1-assess-and-record-hedgerow-condition',
    overview: lorem
  },
  {
    name: 'Manage hedgerows',
    code: 'HRW2',
    landTypes: [LandType.HEDGEROWS],
    amountLabel: '£10 per 100 metres for one side of an eligible hedgerow per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw2-manage-hedgerows',
    overview:
      'Manage your hedgerows in a way that creates habitats and helps provide pollen, nectar and berries for wildlife.'
  },
  {
    name: 'Maintain or establish hedgerow trees',
    code: 'HRW3',
    landTypes: [LandType.HEDGEROWS],
    amountLabel: '£10 per 100 metres for both sides of an eligible hedgerow per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw3-maintain-or-establish-hedgerow-trees',
    overview:
      'Plant or maintain hedgerow trees to provide habitats for wildlife. Hedgerow trees also store carbon which helps reduce the impact of climate change.'
  },
  {
    name: 'Take grassland field corners or blocks out of management',
    code: 'IGL1',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    amountLabel: '£333 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-improved-grassland#igl1-take-grassland-field-corners-or-blocks-out-of-management',
    overview: lorem
  },
  {
    name: 'Winter bird food on improved grassland',
    code: 'IGL2',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    amountLabel: '£474 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-improved-grassland#igl2-winter-bird-food-on-improved-grassland',
    overview: lorem
  },
  {
    name: '4m to 12m grass buffer strip on improved grassland',
    code: 'IGL3',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    amountLabel: '£235 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-buffer-strips#igl3-4m-to-12m-grass-buffer-strip-on-improved-grassland',
    overview: lorem
  },
  {
    name: 'Assess integrated pest management and produce a plan',
    code: 'IPM1',
    landTypes: [
      LandType.ARABLE,
      LandType.TEMPORARY_GRASSLAND,
      LandType.HORICULTURAL_CROPS,
      LandType.NON_HORICULTURAL_CROPS,
      LandType.IMPROVED_GRASSLAND,
      LandType.LOW_INPUT_GRASSLAND
    ],
    amountLabel: '£989 for the assessment and plan per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm1-assess-integrated-pest-management-and-produce-a-plan',
    overview: lorem
  },
  {
    name: 'Flower-rich grass margins, blocks, or in-field strips',
    code: 'IPM2',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    amountLabel: '£989 for the assessment and plan per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm2-flower-rich-grass-margins-blocks-or-in-field-strips',
    overview: lorem
  },
  {
    name: 'Companion crop on arable and horticultural land',
    code: 'IPM3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    amountLabel: '£55 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm3-companion-crop-on-arable-and-horticultural-land',
    overview:
      'Use a companion crop to act as a trap crop for pests, help suppress weeds, provide habitats, manage nutrient efficiency or protect and improve soil health.'
  },
  {
    name: 'No use of insecticide on arable crops and permanent crops',
    code: 'IPM4',
    landTypes: [LandType.ARABLE, LandType.HORICULTURAL_CROPS],
    amountLabel: '£45 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm4-no-use-of-insecticide-on-arable-crops-and-permanent-crops',
    overview: lorem
  },
  {
    name: 'Manage grassland with very low nutrient inputs (outside SDAs)',
    code: 'LIG1',
    landTypes: [
      LandType.TEMPORARY_GRASSLAND,
      LandType.NON_HORICULTURAL_CROPS,
      LandType.IMPROVED_GRASSLAND,
      LandType.LOW_INPUT_GRASSLAND
    ],
    amountLabel: '£151 per hectare (ha) per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-low-input-grassland#lig1-manage-grassland-with-very-low-nutrient-inputs-outside-sdas-and-lig2-manage-grassland-with-very-low-nutrient-inputs-sdas',
    overview: lorem
  },
  {
    name: 'Manage grassland with very low nutrient inputs (SDAs)',
    code: 'LIG2',
    landTypes: [
      LandType.TEMPORARY_GRASSLAND,
      LandType.NON_HORICULTURAL_CROPS,
      LandType.IMPROVED_GRASSLAND,
      LandType.LOW_INPUT_GRASSLAND
    ],
    amountLabel: '£151 per hectare (ha) per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-low-input-grassland#lig1-manage-grassland-with-very-low-nutrient-inputs-outside-sdas-and-lig2-manage-grassland-with-very-low-nutrient-inputs-sdas',
    overview: lorem
  },
  {
    name: 'Assess moorland and produce a written record',
    code: 'MOR1',
    landTypes: [LandType.MOORLAND],
    amountLabel: '£10.30 per hectare (ha) and £265 per SFI agreement per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-moorland#mor1-assess-moorland-and-produce-a-written-record',
    overview: lorem
  },
  {
    name: 'Assess nutrient management and produce a review report',
    code: 'NUM1',
    landTypes: [
      LandType.ARABLE,
      LandType.TEMPORARY_GRASSLAND,
      LandType.HORICULTURAL_CROPS,
      LandType.NON_HORICULTURAL_CROPS,
      LandType.IMPROVED_GRASSLAND,
      LandType.LOW_INPUT_GRASSLAND
    ],
    amountLabel: '£589 for the assessment and review report per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-nutrient-management#num1-assess-nutrient-management-and-produce-a-review-report',
    overview: lorem
  },
  {
    name: 'Legumes on improved grassland',
    code: 'NUM2',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    amountLabel: '£102 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-nutrient-management#num2-legumes-on-improved-grassland',
    overview: lorem
  },
  {
    name: 'Legume fallow',
    code: 'NUM3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    amountLabel: '£593 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-nutrient-management#num3-legume-fallow',
    overview:
      "Make sure there's a legume fallow producing areas of flowering plants from late spring and during the summer. This will help manage nutrient efficiency, improve soil health, provide food for wildlife and reduce grass weeds."
  },
  {
    name: 'Assess soil, produce a soil management plan and test soil organic matter',
    code: 'SAM1',
    landTypes: [
      LandType.ARABLE,
      LandType.TEMPORARY_GRASSLAND,
      LandType.HORICULTURAL_CROPS,
      LandType.NON_HORICULTURAL_CROPS,
      LandType.IMPROVED_GRASSLAND,
      LandType.LOW_INPUT_GRASSLAND
    ],
    amountLabel: '£5.80 per hectare and an additional payment of £95 per agreement',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-soils#soil-1',
    overview: lorem
  },
  {
    name: 'Assess soil, produce a soil management plan and test soil organic matter',
    code: 'SAM2',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    amountLabel: '£129 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-soils#sam2-multi-species-winter-cover',
    overview: lorem
  },
  {
    name: 'Herbal leys',
    code: 'SAM3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    amountLabel: '£382 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-soils#sam3-herbal-leys',
    overview:
      'Encourage the growth of different root structures to help improve and maintain your soil’s structure, carbon, biology and fertility.'
  }
]

module.exports = getSfiData
