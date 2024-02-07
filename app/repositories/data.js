const { LandType } = require('../domain/sfi')

const getSfiData = () => [
  {
    name: 'Assess soil, produce a soil management plan and test soil organic matter',
    code: 'SAM1',
    landTypes: [
      LandType.ARABLE,
      LandType.TEMPORARY_GRASSLAND,
      LandType.HORTICULTURAL_CROPS,
      LandType.NON_HORTICULTURAL_CROPS,
      LandType.IMPROVED_GRASSLAND,
      LandType.LOW_INPUT_GRASSLAND
    ],
    landTypeLabel:
      'arable land including temporary grassland, horticultural and non-horticultural permanent crops, improved and low input permanent grassland',
    amountLabel: '£6 per hectare and an additional payment of £97 per agreement per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-soils#soil-1',
    overview:
      'Understand your soil\'s condition and plan how you can increase its long-term health.'
  },
  {
    name: 'Multi-species winter cover',
    code: 'SAM2',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORTICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£129 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-soils#sam2-multi-species-winter-cover',
    overview:
      "Establish and maintain a multi-species cover crop over winter. This will help protect and improve the health of your soil."
  },
  {
    name: 'Herbal leys',
    code: 'SAM3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'arable land including temporary grassland, improved permanent grassland',
    amountLabel: '£382 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-soils#sam3-herbal-leys',
    overview:
      "Establish and maintain herbal leys with a mixture of grasses, legumes and herbs. This will help improve and maintain the health of your soil."
  },
  {
    name: 'Assess moorland and produce a written record',
    code: 'MOR1',
    landTypes: [LandType.MOORLAND],
    landTypeLabel: 'moorland, non-agricultural areas such as scrub, scree, bracken and bog',
    amountLabel: '£10.60 per hectare and an additional payment of £272 per agreement per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-moorland#mor1-assess-moorland-and-produce-a-written-record',
    overview:
      'Produce a written document that shows how your moorland helps protect the environment and how it can provide more benefits in the future.'
  },
  {
    name: 'Assess and record hedgerow condition',
    code: 'HRW1',
    landTypes: [LandType.HEDGEROWS],
    landTypeLabel: 'one side or both sides of an eligible hedgerow',
    amountLabel: '£5 per 100 metres for one side of an eligible hedgerow per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw1-assess-and-record-hedgerow-condition',
    overview: 'Understand the condition of your hedgerows. Complete a written hedgerow condition assessment document that shows how you\'ll manage your hedgerows in the future.'
  },
  {
    name: 'Manage hedgerows',
    code: 'HRW2',
    landTypes: [LandType.HEDGEROWS],
    landTypeLabel: 'one side or both sides of an eligible hedgerow',
    amountLabel: '£13 per 100 metres for one side of an eligible hedgerow per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw2-manage-hedgerows',
    overview:
      "Manage your hedgerows by cutting, coppicing or laying them, so there's a range of different heights and widths. This will help provide habitats and food for wildlife."
  },
  {
    name: 'Maintain or establish hedgerow trees',
    code: 'HRW3',
    landTypes: [LandType.HEDGEROWS],
    landTypeLabel: 'both sides of an eligible hedgerow - you cannot enter one side of a hedgerow',
    amountLabel: '£10 per 100 metres for both sides of an eligible hedgerow per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw3-maintain-or-establish-hedgerow-trees',
    overview:
      'Maintain existing trees or establish new trees within your hedgerows. This will help provide habitats for wildlife and store carbon.'
  },
  {
    name: 'Assess integrated pest management and produce a plan',
    code: 'IPM1',
    landTypes: [
      LandType.ARABLE,
      LandType.TEMPORARY_GRASSLAND,
      LandType.HORTICULTURAL_CROPS,
      LandType.NON_HORTICULTURAL_CROPS,
      LandType.IMPROVED_GRASSLAND,
      LandType.LOW_INPUT_GRASSLAND
    ],
    landTypeLabel: 'all agricultural land located below the moorland line',
    amountLabel: '£1,129 per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm1-assess-integrated-pest-management-and-produce-a-plan',
    overview:
      'Arrange for a BASIS qualified adviser to visit your farm and assess your current approach to crop pest, weed and disease management. They\'ll complete an integrated pest management (IPM) assessment and will help you produce a written IPM plan.'
  },
  {
    name: 'Flower-rich grass margins, blocks, or in-field strips',
    code: 'IPM2',
    landTypes: [
      LandType.ARABLE,
      LandType.TEMPORARY_GRASSLAND,
      LandType.HORTICULTURAL_CROPS,
      LandType.NON_HORTICULTURAL_CROPS
    ],
    landTypeLabel: 'arable land including temporary grassland, horticultural and non-horticultural permanent crops',
    amountLabel: '£798 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm2-flower-rich-grass-margins-blocks-or-in-field-strips',
    overview:
      'Establish and maintain flower-rich grass margins, blocks or in-field strips. This will encourage natural crop pest predators, and provide habitats and foraging sites for wildlife.'
  },
  {
    name: 'Companion crop on arable and horticultural land',
    code: 'IPM3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORTICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£55 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm3-companion-crop-on-arable-and-horticultural-land',
    overview:
      'Establish a companion crop, so it\'s growing with the main arable or horticultural crop. This will help you manage pests and provide habitats for wildlife. It\'ll also help you use nutrients efficiently, protect and improve your soil\'s health.'
  },
  {
    name: 'No use of insecticide on arable crops and permanent crops',
    code: 'IPM4',
    landTypes: [LandType.ARABLE, LandType.HORTICULTURAL_CROPS, LandType.NON_HORTICULTURAL_CROPS],
    landTypeLabel:
      'arable land excluding temporary grassland and fallow land, horticultural and non-horticultural permanent crops',
    amountLabel: '£45 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-integrated-pest-management#ipm4-no-use-of-insecticide-on-arable-crops-and-permanent-crops',
    overview:
      'Do not use any plant protection products containing insecticide on arable crops and permanent crops. This will help you manage crop pests in a more sustainable way, improve water and air quality, and increase biodiversity.'
  },
  {
    name: 'Assess nutrient management and produce a review report',
    code: 'NUM1',
    landTypes: [
      LandType.ARABLE,
      LandType.TEMPORARY_GRASSLAND,
      LandType.HORTICULTURAL_CROPS,
      LandType.NON_HORTICULTURAL_CROPS,
      LandType.IMPROVED_GRASSLAND,
      LandType.LOW_INPUT_GRASSLAND
    ],
    landTypeLabel: 'all agricultural land located below the moorland line',
    amountLabel: '£652 per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-nutrient-management#num1-assess-nutrient-management-and-produce-a-review-report',
    overview:
      'Arrange for a Fertiliser Advisers Certification and Training Scheme (FACTS) qualified adviser to visit your farm. They\'ll complete a nutrient management (NM) assessment and will help you produce a written NM review report. This will help you manage your nutrient usage more efficiently and increase your use of organic crop nutrients.'
  },
  {
    name: 'Legumes on improved grassland',
    code: 'NUM2',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'temporary grassland, improved permanent grassland',
    amountLabel: '£102 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-nutrient-management#num2-legumes-on-improved-grassland',
    overview:
      "Establish and maintain legumes on improved grassland, so they're growing from spring until early autumn. This will help you protect and improve the health of your soil, as well as manage pests."
  },
  {
    name: 'Legume fallow',
    code: 'NUM3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORTICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£593 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-nutrient-management#num3-legume-fallow',
    overview:
      "Establish and maintain a legume fallow, so it produces areas of flowering plants from late spring and during the summer. This will help you improve your soil's health, provide food for wildlife and manage pests."
  },
  {
    name: 'Pollen and nectar flower mix',
    code: 'AHL1',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORTICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£764 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-arable-and-horticultural-land#ahl1-pollen-and-nectar-flower-mix',
    overview:
      "Establish and maintain blocks or strips of pollen and nectar flower mix that produce areas of flowering plants from late spring and during the summer. This will help you provide food for wildlife and manage pests."
  },
  {
    name: 'Winter bird food on arable and horticultural land',
    code: 'AHL2',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORTICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£853 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-arable-and-horticultural-land#ahl2-winter-bird-food-on-arable-and-horticultural-land',
    overview:
      "Establish and maintain blocks or strips of winter bird food. This will produce small seeds for smaller farmland birds from late autumn until late winter."
  },
  {
    name: 'Grassy field corners or blocks',
    code: 'AHL3',
    landTypes: [LandType.ARABLE, LandType.TEMPORARY_GRASSLAND, LandType.HORTICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£590 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-arable-and-horticultural-land#ahl3-grassy-field-corners-or-blocks',
    overview:
      'Establish and maintain grassy field corners or blocks on arable and horticultural land. This will help provide habitats to wildlife throughout the year and manage pests.'
  },
  {
    name: '4m to 12m grass buffer strip on arable and horticultural land',
    code: 'AHL4',
    landTypes: [LandType.ARABLE, LandType.HORTICULTURAL_CROPS],
    landTypeLabel: 'arable land including temporary grassland, horticultural permanent crops',
    amountLabel: '£515 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-buffer-strips#ahl4-4m-to-12m-grass-buffer-strip-on-arable-and-horticultural-land',
    overview:
      'Establish and maintain a grass strip on the edge of arable and horticultural land, so it buffers an existing landscape feature or certain heritage features. This will help you provide habitats for wildlife and manage pests. It\'ll also help prevent sediment and nutrients getting into water.'
  },
  {
    name: 'Take grassland field corners or blocks out of management',
    code: 'IGL1',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'temporary grassland, improved permanent grassland',
    amountLabel: '£333 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-improved-grassland#igl1-take-grassland-field-corners-or-blocks-out-of-management',
    overview:
      'Leave grassland field corners or blocks unmanaged, so they\'re uncut and ungrazed. This will help you provide habitats to wildlife all year round and manage pests.'
  },
  {
    name: 'Winter bird food on improved grassland',
    code: 'IGL2',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'temporary grassland, improved permanent grassland',
    amountLabel: '£515 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-farmland-wildlife-on-improved-grassland#igl2-winter-bird-food-on-improved-grassland',
    overview:
      'Maintain improved grassland, so it goes to seed during autumn and winter. This will help provide food for farmland birds during the winter.'
  },
  {
    name: '4m to 12m grass buffer strip on improved grassland',
    code: 'IGL3',
    landTypes: [LandType.TEMPORARY_GRASSLAND, LandType.IMPROVED_GRASSLAND],
    landTypeLabel: 'temporary grassland, improved permanent grassland',
    amountLabel: '£235 per hectare per year',
    url: 'https://www.gov.uk/guidance/sfi-actions-for-buffer-strips#igl3-4m-to-12m-grass-buffer-strip-on-improved-grassland',
    overview:
      'Establish and maintain a grass strip on the edge of improved grassland, so it buffers an existing landscape feature or certain heritage features. This will help you provide habitats for wildlife. It\'ll also help prevent sediment and nutrients getting into water.'
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
      'Minimise your use of nutrients on your grassland. Cut or graze your grassland so there are flowering grasses and wildflowers from late spring and during the summer. Make sure there are different plant heights by autumn. Let some covering of flowering grasses and wildflowers go to seed and tussocky grass develop. This will help you provide habitats and food for wildlife, minimise the number of nutrients getting into water and manage pests.'
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
      'Minimise your use of nutrients on your grassland. Cut or graze your grassland so there are flowering grasses and wildflowers from late spring and during the summer. Make sure there are different plant heights by autumn. Let some covering of flowering grasses and wildflowers go to seed and tussocky grass develop. This will help you provide habitats and food for wildlife, minimise the number of nutrients getting into water and manage pests.'
  }
]

module.exports = getSfiData
