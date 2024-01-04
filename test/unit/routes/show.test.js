const showController = require('../../../app/routes/show')

describe('show', () => {
  let req
  let h

  beforeEach(() => {
    req = {
      headers: jest.fn(),
      params: {
        action: 'SAM1'
      },
      payload: {}
    }

    h = {
      redirect: jest.fn()
    }
  })

  describe('show a single action', () => {
    test('redirects back to list page with hidden sfi removed', () => {
      showController[0].handler(req, h)

      expect(h.redirect).toHaveBeenCalledWith('/#SAM1')
    })

    test('throws an error when receiving content length of zero', () => {
      const modifiedReq = {
        ...req,
        headers: {
          'content-length': 0
        }
      }

      expect(() => showController[0].handler(modifiedReq, h)).toThrowError('Content length cannot be empty')

      expect(h.redirect).not.toHaveBeenCalled()
    })
  })

  describe('show all actions', () => {
    test('redirects back to list page with all hidden sfi removed', () => {
      showController[1].handler(req, h)

      expect(h.redirect).toHaveBeenCalledWith('/#list')
    })

    test('throws an error when receiving content length of zero', () => {
      const modifiedReq = {
        ...req,
        headers: {
          'content-length': 0
        }
      }

      expect(() => showController[1].handler(modifiedReq, h)).toThrowError('Content length cannot be empty')

      expect(h.redirect).not.toHaveBeenCalled()
    })
  })
})
