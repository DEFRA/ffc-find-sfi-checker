const { updatePolicy } = require('../cookies')

module.exports = {
  method: 'POST',
  path: '/submit-cookies',
  handler: (request, h) => {
    if (request.payload['cookies[additional]'] === 'yes') {
      updatePolicy(request, h, true)

      return h.redirect('/')
    }

    updatePolicy(request, h, false)

    return h.redirect('/')
  }
}
