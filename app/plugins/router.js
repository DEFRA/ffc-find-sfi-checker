const routes = [].concat(
    require('../routes/healthy'),
    require('../routes/healthz'),
    require('../routes/list-sfi'),
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
