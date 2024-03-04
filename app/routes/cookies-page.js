const { getCurrentPolicy } = require('../cookies')

module.exports = [
  {
    method: 'GET',
    path: '/cookies',
    handler: (request, h) => {
      const cookiesPolicy = getCurrentPolicy(request, h)

      return h.view('cookies-page', { cookiesPolicy })
    }
  }
]
