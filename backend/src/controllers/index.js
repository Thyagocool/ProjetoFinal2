const Repositories = require('../repositories')

const CategoryController = require('./CategoryController')

module.exports = {
    CategoryController: new CategoryController(Repositories.CategoryRepository)
}