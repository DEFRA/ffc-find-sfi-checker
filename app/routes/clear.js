const { getPath } = require('../domain/url')

module.exports = {
  method: 'POST',
  path: '/clear',
  handler: (request, h) => {
    if (request.route.method.toUpperCase() === 'POST' && request.headers['content-length'] <= 0) {
      throw new Error('Content length cannot be empty')
    }

    const hiddenSfis = [].concat(request.payload.hiddenSfis || [])
    const path = getPath([], hiddenSfis)

    return h.redirect(`/${path}#list`)
  }
}
