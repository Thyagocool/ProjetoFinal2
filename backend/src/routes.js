
//const CategoriesRoutes = require('./routes/CategoryRoute')
/*const DeviceRoutes = require('./routes/DeviceRoute')

exports.registerRoutes = (app) => {
  app.use('/api/categories', CategoriesRoutes),
  app.use('/api/devices', DeviceRoutes)
}

*/

const routes = require('./routes/')

const registerRoutes = (app) => {

    for (const route of routes) {
        console.log(route.router)
        app.use(route.name, route.router)

    }

}

module.exports = { registerRoutes }