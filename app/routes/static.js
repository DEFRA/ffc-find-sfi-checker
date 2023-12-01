module.exports = [{
  method: 'GET',
  path: '/assets/{path*}',
  options: {
    handler: {
      directory: {
        path: [
          'node_modules/govuk-frontend/govuk/assets',
          'app/static'
        ]
      }
    }
  }
}, {
  method: 'GET',
  path: '/static/{path*}',
  options: {
    handler: {
      directory: {
        path: [
          'node_modules/govuk-frontend/govuk/assets',
          'app/dist'
        ]
      }
    }
  }
}]
