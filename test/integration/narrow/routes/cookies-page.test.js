const createServer = require('../../../../app/server')

describe('cookies-page', () => {
  let server

  beforeEach(async () => {
    server = await createServer()

    await server.start()
  })

  test('GET /cookies route returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/cookies'
    }

    const response = await server.inject(options)

    expect(response.statusCode).toBe(200)
  })

  afterEach(async () => {
    await server.stop()
  })
})
