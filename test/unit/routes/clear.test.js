const { LandType } = require('../../../app/domain/sfi')
const clearController = require('../../../app/routes/clear')

describe('clear', () => {
  let req
  let h

  beforeEach(() => {
    req = {
      headers: jest.fn(),
      params: {},
      payload: {
        hiddenSfis: 'SAM1',
        landTypes: [LandType.ARABLE]
      },
      route: {
        method: 'post'
      }
    }

    h = {
      redirect: jest.fn()
    }
  })

  test('redirects back to list page without any land type filters and while preserving hidden sfis', () => {
    clearController.handler(req, h)

    expect(h.redirect).toHaveBeenCalledWith('/?hiddenSfis=SAM1#list')
  })

  test('throws an error when receiving content length of zero', () => {
    const modifiedReq = {
      ...req,
      headers: {
        'content-length': 0
      }
    }

    expect(() => clearController.handler(modifiedReq, h)).toThrowError('Content length cannot be empty')

    expect(h.redirect).not.toHaveBeenCalled()
  })
})
