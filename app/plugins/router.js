const routes = [].concat(
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/list-sfi'),
  require('../routes/hide'),
  require('../routes/show'),
  require('../routes/clear'),
  require('../routes/print'),
  require('../routes/submit-cookies'),
  require('../routes/static')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
