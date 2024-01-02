const { LandType } = require('../../../app/domain/sfi')
const { retrieveSfiActions } = require('../../../app/repositories/sfi-repository')

describe('sfi-repository', () => {
  describe('retrieveSfiActions', () => {
    test('returns all sfi actions', () => {
      const actions = retrieveSfiActions([])

      expect(actions.length).toBe(23)
      expect(actions).toStrictEqual(
        expect.arrayContaining([
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
              'Review the condition of your soil and plan how you can improve its long-term health, productivity and resilience.'
          }
        ])
      )
    })

    test('returns actions from a single filter', () => {
      const actions = retrieveSfiActions([LandType.MOORLAND])

      expect(actions.length).toBe(1)
      expect(actions).toStrictEqual([
        {
          name: 'Assess moorland and produce a written record',
          code: 'MOR1',
          landTypes: [LandType.MOORLAND],
          landTypeLabel: 'moorland, non-agricultural areas such as scrub, scree, bracken and bog',
          amountLabel: '£10.60 per hectare and an additional payment of £272 per agreement per year',
          url: 'https://www.gov.uk/guidance/sfi-actions-for-moorland#mor1-assess-moorland-and-produce-a-written-record',
          overview:
            'Learn how your moorland helps protect the environment and how it can provide more benefits in the future.'
        }
      ])
    })

    test('returns actions from a multiple filters', () => {
      const actions = retrieveSfiActions([LandType.MOORLAND, LandType.HEDGEROWS])

      expect(actions.length).toBe(4)
      expect(actions).toStrictEqual([
        {
          name: 'Assess moorland and produce a written record',
          code: 'MOR1',
          landTypes: [LandType.MOORLAND],
          landTypeLabel: 'moorland, non-agricultural areas such as scrub, scree, bracken and bog',
          amountLabel: '£10.60 per hectare and an additional payment of £272 per agreement per year',
          url: 'https://www.gov.uk/guidance/sfi-actions-for-moorland#mor1-assess-moorland-and-produce-a-written-record',
          overview:
            'Learn how your moorland helps protect the environment and how it can provide more benefits in the future.'
        },
        {
          name: 'Assess and record hedgerow condition',
          code: 'HRW1',
          landTypes: [LandType.HEDGEROWS],
          landTypeLabel: 'one side or both sides of an eligible hedgerow',
          amountLabel: '£5 per 100 metres for one side of an eligible hedgerow per year',
          url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw1-assess-and-record-hedgerow-condition',
          overview: 'Review how healthy your hedgerows are and how you can improve their condition.'
        },
        {
          name: 'Manage hedgerows',
          code: 'HRW2',
          landTypes: [LandType.HEDGEROWS],
          landTypeLabel: 'one side or both sides of an eligible hedgerow',
          amountLabel: '£13 per 100 metres for one side of an eligible hedgerow per year',
          url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw2-manage-hedgerows',
          overview:
            "Look after your hedgerows so there's a range of different heights and widths. This helps provide habitats and pollen, nectar and berries for wildlife."
        },
        {
          name: 'Maintain or establish hedgerow trees',
          code: 'HRW3',
          landTypes: [LandType.HEDGEROWS],
          landTypeLabel: 'both sides of an eligible hedgerow - you cannot enter one side of a hedgerow',
          amountLabel: '£10 per 100 metres for both sides of an eligible hedgerow per year',
          url: 'https://www.gov.uk/guidance/sfi-actions-for-hedgerows#hrw3-maintain-or-establish-hedgerow-trees',
          overview:
            'Plant or maintain hedgerow trees to help provide habitats for wildlife. Hedgerow trees also store carbon which helps reduce the impact of climate change.'
        }
      ])
    })
  })
})
