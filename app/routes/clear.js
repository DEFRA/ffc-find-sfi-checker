const { getPath } = require('../domain/url')

module.exports = {
  method: 'POST',
  path: '/clear',
  handler: (request, h) => {
    if (request.route.method.toUpperCase() === 'POST' && request.headers['content-length'] <= 0) {
      throw new Error('Content length cannot be empty')
    }

    const action = request.params.action

    const hiddenSfis = [].concat(request.payload.hiddenSfis || [])
    hiddenSfis.push(action)

    const path = getPath([], hiddenSfis)

    return h.redirect(`/${path}`)
  }
}
