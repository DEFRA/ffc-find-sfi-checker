const cheerio = require('cheerio')

describe('4xx error pages', () => {
  test('GET /unknown route returns 404', async () => {
    const options = {
      method: 'GET',
      url: '/unknown'
    }
    let res

    try {
      res = await global.__SERVER__.inject(options)
    } catch (error) {
      console.error(error)
    }

    expect(res.statusCode).toBe(404)
    const $ = cheerio.load(res.payload)
    expect($('.govuk-heading-l').text()).toEqual('404 - Not Found')
    expect($('#_404 div p').text()).toEqual('Not Found')
  })
})
