const createServer = require('../../../../app/server')

describe('submit-cookies', () => {
  let server

  beforeEach(async () => {
    server = await createServer()

    await server.start()
  })

  test('POST /submit-cookies route applies analytics cookies', async () => {
    const options = {
      method: 'POST',
      url: '/submit-cookies',
      payload: { 'cookies[additional]': 'yes' }
    }

    const response = await server.inject(options)

    expect(response.headers['set-cookie']).not.toBeNull()
    expect(response.statusCode).toBe(302)
  })

  test('POST /submit-cookies route rejects analytics cookies', async () => {
    const options = {
      method: 'POST',
      url: '/submit-cookies',
      payload: { 'cookies[additional]': 'no' }
    }

    const response = await server.inject(options)

    expect(response.headers['set-cookie']).not.toBeNull()
    expect(response.statusCode).toBe(302)
  })

  afterEach(async () => {
    await server.stop()
  })
})
