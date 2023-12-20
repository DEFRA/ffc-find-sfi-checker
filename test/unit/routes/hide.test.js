const hideController = require('../../../app/routes/hide')

describe('hide', () => {
  let req
  let h

  beforeEach(() => {
    req = {
      headers: jest.fn(),
      info: {
        referrer: 'https://example.com'
      },
      params: {
        action: 'SAM1'
      }
    }

    h = {
      redirect: jest.fn()
    }
  })

  test('redirects back to list page with hidden sfi', () => {
    hideController.handler(req, h)

    expect(h.redirect).toHaveBeenCalledWith('https://example.com/?hiddenSfis=SAM1')
  })

  test('throws an error when receiving content length of zero', () => {
    const modifiedReq = {
      ...req,
      headers: {
        'content-length': 0
      }
    }

    expect(() => hideController.handler(modifiedReq, h))
      .toThrowError('Content length cannot be empty')

    expect(h.redirect).not.toHaveBeenCalled()
  })
})
