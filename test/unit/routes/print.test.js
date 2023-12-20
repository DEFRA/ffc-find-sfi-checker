const printController = require('../../../app/routes/print')

describe('print', () => {
  let req
  let h

  beforeEach(() => {
    req = {
      headers: jest.fn(),
      query: {
        landTypes: [],
        hiddenSfis: []
      },
      params: {
        action: 'SAM1'
      },
      route: {
        method: 'post'
      }
    }

    h = {
      view: jest.fn()
    }
  })

  test('redirects back to list page with hidden sfi', () => {
    printController.handler(req, h)

    expect(h.view).toHaveBeenCalledWith('print-page', expect.objectContaining({}))
  })

  test('throws an error when receiving content length of zero', async () => {
    const modifiedReq = {
      ...req,
      headers: {
        'content-length': 0
      }
    }

    await expect(() => printController.handler(modifiedReq, h))
      .rejects
      .toThrowError('Content length cannot be empty')

    expect(h.view).not.toHaveBeenCalled()
  })
})
