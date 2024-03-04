const { updatePolicy } = require('../cookies')

module.exports = {
  method: 'POST',
  path: '/submit-cookies',
  handler: (request, h) => {
    let redirectPath = '/'

    if (request.payload.referrer) {
      redirectPath = request.payload.referrer
    }

    if (request.payload['cookies[additional]'] === 'yes') {
      updatePolicy(request, h, true)

      return h.redirect(redirectPath)
    }

    updatePolicy(request, h, false)

    return h.redirect(redirectPath)
  }
}
