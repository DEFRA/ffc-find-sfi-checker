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

const getSfiData = () => [
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
    landTypeLabel:
      'arable land including temporary grassland, horticultural and non-horticultural permanent crops, improved and low input permanent grassland',
    amountLabel: '£6 per hectare and an additional payment of £97 per agreement per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-soils#soil-1',
    overview:
      'Understand the condition of your soil and plan how you can increase its long-term health, productivity and resilience.'
  },
  {
    name: 'Multi-species winter cover crop',
    code: 'SAM2',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£129 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-soils#sam2-multi-species-winter-cover',
    overview:
      "Make sure there's a well-established multi-species cover crop over winter. This will protect your soil's surface. It'll also provide root growth that benefits soil structure, supports soil biology and minimises nutrient leaching, soil erosion and runoff."
  },
  {
    name: 'Herbal leys',
    code: 'SAM3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'arable land including temporary grassland, improved permanent grassland',
    amountLabel: '£382 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-soils#sam3-herbal-leys',
    overview:
      "Provide varied root structures to help improve and maintain your soil's structure, carbon, biology and fertility."
  },
  {
    name: 'Assess moorland and produce a written record',
    code: 'MOR1',
    landTypes: [LandType.MOORLAND],
    landTypeLabel: 'moorland, non-agricultural areas such as scrub, scree, bracken and bog',
    amountLabel: '£10.60 per hectare and an additional payment of £272 per agreement per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-moorland#mor1-assess-moorland-and-produce-a-written-record',
    overview:
      'Understand how your moorland helps protect the environment and how it can provide more benefits in the future.'
  },
  {
    name: 'Assess and record hedgerow condition',
    code: 'HRW1',
    landTypes: [LandType.HEDGEROWS],
    landTypeLabel: 'one side or both sides of an eligible hedgerow',
    amountLabel: '£5 per 100 metres for one side of an eligible hedgerow per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw1-assess-and-record-hedgerow-condition',
    overview: 'Understand the condition of your hedgerows and plan how you can manage them to improve their condition.'
  },
  {
    name: 'Manage hedgerows',
    code: 'HRW2',
    landTypes: [LandType.HEDGEROWS],
    landTypeLabel: 'one side or both sides of an eligible hedgerow',
    amountLabel: '£13 per 100 metres for one side of an eligible hedgerow per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw2-manage-hedgerows',
    overview:
      "Look after your hedgerows so there's a range of different heights and widths. This helps provide habitats for wildlife and pollen, nectar and berries for mammals, birds and insects."
  },
  {
    name: 'Maintain or establish hedgerow trees',
    code: 'HRW3',
    landTypes: [LandType.HEDGEROWS],
    landTypeLabel: 'both sides of an eligible hedgerow - you cannot enter one side of a hedgerow',
    amountLabel: '£10 per 100 metres for both sides of an eligible hedgerow per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw3-maintain-or-establish-hedgerow-trees',
    overview:
      'Maintain or establish hedgerow trees to help provide habitats for wildlife. Hedgerow trees also store carbon which helps reduce the impact of climate change.'
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
    landTypeLabel: 'all agricultural land located below the moorland line',
    amountLabel: '£1,129 per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm1-assess-integrated-pest-management-and-produce-a-plan',
    overview:
      'Understand the benefits, costs, impacts and risks of your current approach to crop pest, weed and disease management for your land. This action will also help you plan how to adopt a range of integrated pest management methods for your farm.'
  },
  {
    name: 'Flower-rich grass margins, blocks, or in-field strips',
    code: 'IPM2',
    landTypes: [
      LandType.ARABLE,
      LandType.TEMPORARY_GRASSLAND,
      LandType.HORICULTURAL_CROPS,
      LandType.NON_HORICULTURAL_CROPS
    ],
    landTypeLabel: 'arable land including temporary grassland, horticultural and non-horticultural permanent crops',
    amountLabel: '£798 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm2-flower-rich-grass-margins-blocks-or-in-field-strips',
    overview:
      'Make sure grass margins, blocks or in-field strips contain flowering plants during summer and early autumn. This will help encourage natural crop pest predators if located close to cropped areas. It can also provide habitats and foraging sites for invertebrates, bees, butterflies, hoverflies and farmland birds.'
  },
  {
    name: 'Companion crop on arable and horticultural land',
    code: 'IPM3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£55 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm3-companion-crop-on-arable-and-horticultural-land',
    overview:
      'Establish a companion crop to do one or more of the following: help manage pests by acting as a trap crop or by suppressing weeds, provide habitats for birds and invertebrates, manage nutrient efficiency or protect soil and improve its condition.'
  },
  {
    name: 'No use of insecticide on arable crops and permanent crops',
    code: 'IPM4',
    landTypes: [LandType.ARABLE, LandType.HORICULTURAL_CROPS, LandType.NON_HORICULTURAL_CROPS],
    landTypeLabel:
      'arable land excluding temporary grassland and fallow land, horticultural and non-horticultural permanent crops',
    amountLabel: '£45 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm4-no-use-of-insecticide-on-arable-crops-and-permanent-crops',
    overview:
      'Do not use plant protection products containing insecticide. This will help you manage crop pests in a more sustainable way, improve water and air quality, and increase biodiversity.'
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
    landTypeLabel: 'all agricultural land located below the moorland line',
    amountLabel: '£652 per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-nutrient-management#num1-assess-nutrient-management-and-produce-a-review-report',
    overview:
      'Review how you currently use nutrients on your land and plan how you can do this more efficiently and effectively. This action will also help you optimise your use of organic sources of crop nutrition.'
  },
  {
    name: 'Legumes on improved grassland',
    code: 'NUM2',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'temporary grassland, improved permanent grassland',
    amountLabel: '£102 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-nutrient-management#num2-legumes-on-improved-grassland',
    overview:
      "Grow legumes from spring until early autumn to manage nutrient efficiency and protect your soil's surface. This action will also help provide root growth that maintains soil structure, support soil biology, minimise nutrient leaching, soil erosion and runoff. It can also help you with pest management if located close to cropped areas."
  },
  {
    name: 'Legume fallow',
    code: 'NUM3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£593 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-nutrient-management#num3-legume-fallow',
    overview:
      "Make sure there's a legume fallow producing areas of flowering plants during late spring and summer. This will help you manage nutrient efficiency, improve soil health and provide food for farmland wildlife. It can also help reduce grass weeds and encourage natural crop pest predators if located close to cropped areas."
  },
  {
    name: 'Pollen and nectar flower mix',
    code: 'AHL1',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£764 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-arable-and-horticultural-land#ahl1-pollen-and-nectar-flower-mix',
    overview:
      "Make sure there's a pollen and nectar flower mix that produces areas of flowering plants during late spring and summer. This will provide food for bees, butterflies and hoverflies. It can also help encourage natural crop pest predators if located close to cropped areas."
  },
  {
    name: 'Winter bird food on arable and horticultural land',
    code: 'AHL2',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£853 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-arable-and-horticultural-land#ahl2-winter-bird-food-on-arable-and-horticultural-land',
    overview:
      "Make sure there's food available for farmland birds especially from late autumn to late winter. This action will encourage flowering plants in the summer which will benefit bees, butterflies and hoverflies. It can also help you with pest management if located close to cropped areas."
  },
  {
    name: 'Grassy field corners or blocks',
    code: 'AHL3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£590 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-arable-and-horticultural-land#ahl3-grassy-field-corners-or-blocks',
    overview:
      'Make sure your land has an intact grass sward without tracks, compacted areas or poaching all year round, so tussocky grass can develop. This action helps provide habitats to different animals throughout the year. It can also help you with pest management if located close to cropped areas.'
  },
  {
    name: '4m to 12m grass buffer strip on arable and horticultural land',
    code: 'AHL4',
    landTypes: [LandType.ARABLE, LandType.HORICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£515 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-buffer-strips#ahl4-4m-to-12m-grass-buffer-strip-on-arable-and-horticultural-land',
    overview:
      'Make sure your land has a grass buffer strip with an intact grass sward without tracks, compacted areas or poaching all year round. This action helps protect existing landscape and heritage features, provide habitats and prevent pollutants such as sediment and nutrients getting into surface water runoff. It can also help you with pest management if located close to cropped areas, helping reduce costs and improve farm resilience.'
  },
  {
    name: 'Take grassland field corners or blocks out of management',
    code: 'IGL1',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'temporary grassland, improved permanent grassland',
    amountLabel: '£333 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-improved-grassland#igl1-take-grassland-field-corners-or-blocks-out-of-management',
    overview:
      'Take grassland field corners or blocks out of management so tussocky grass can develop. This will help provide habitats to different animals all year round. This action can also help you with pest management if located close to cropped areas.'
  },
  {
    name: 'Winter bird food on improved grassland',
    code: 'IGL2',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'temporary grassland, improved permanent grassland',
    amountLabel: '£515 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-improved-grassland#igl2-winter-bird-food-on-improved-grassland',
    overview:
      'Allow improved grassland to go to seed during autumn and winter. This will help provide food for farmland birds during the winter.'
  },
  {
    name: '4m to 12m grass buffer strip on improved grassland',
    code: 'IGL3',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'temporary grassland, improved permanent grassland',
    amountLabel: '£235 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-buffer-strips#igl3-4m-to-12m-grass-buffer-strip-on-improved-grassland',
    overview:
      'Make sure your land has a grass buffer strip with an intact grass sward without tracks, compacted areas or poaching all year round. This helps protect existing landscape and heritage features, provide habitats and prevent pollutants such as sediment and nutrients getting into surface water runoff.'
  },
  {
    name: 'Manage grassland with very low nutrient inputs (outside SDAs)',
    code: 'LIG1',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND, LandType.LOW_INPUT_GRASSLAND],
    landTypeLabel:
      'temporary grassland, improved and low input permanent grassland - land must be outside Severely Disadvantaged Areas (SDAs)',
    amountLabel: '£151 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-low-input-grassland#lig1-manage-grassland-with-very-low-nutrient-inputs-outside-sdas-and-lig2-manage-grassland-with-very-low-nutrient-inputs-sdas',
    overview:
      'Manage your grassland so it has an intact grass sward with flowering grasses and wildflowers during late spring and summer, as well as different plant heights by autumn. This will help provide shelter and food for wildlife and prevent nutrients getting into surface water runoff. It can also help you with pest management if located close to cropped areas.'
  },
  {
    name: 'Manage grassland with very low nutrient inputs (SDAs)',
    code: 'LIG2',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND, LandType.LOW_INPUT_GRASSLAND],
    landTypeLabel:
      'temporary grassland, improved and low input permanent grassland - land must be inside Severely Disadvantaged Areas (SDAs) below the moorland line ',
    amountLabel: '£151 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-low-input-grassland#lig1-manage-grassland-with-very-low-nutrient-inputs-outside-sdas-and-lig2-manage-grassland-with-very-low-nutrient-inputs-sdas',
    overview:
      'Manage your grassland so it has an intact grass sward with flowering grasses and wildflowers during late spring and summer, as well as different plant heights by autumn. This will help provide shelter and food for wildlife and prevent nutrients getting into surface water runoff. It can also help you with pest management if located close to cropped areas.'
  }
]

module.exports = getSfiData
