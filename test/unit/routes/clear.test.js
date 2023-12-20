const clearController = require('../../../app/routes/clear')

describe('clear', () => {
  let req
  let h

  beforeEach(() => {
    req = {
      headers: jest.fn(),
      params: {
        action: 'SAM1'
      },
      route: {
        method: 'post'
      },
      payload: {}
    }

    h = {
      redirect: jest.fn()
    }
  })

  test('redirects back to list page with hidden sfi', () => {
    clearController.handler(req, h)

    expect(h.redirect).toHaveBeenCalledWith('/?hiddenSfis=SAM1')
  })

  test('throws an error when receiving content length of zero', () => {
    const modifiedReq = {
      ...req,
      headers: {
        'content-length': 0
      }
    }

    expect(() => clearController.handler(modifiedReq, h))
      .toThrowError('Content length cannot be empty')

    expect(h.redirect).not.toHaveBeenCalled()
  })
})
