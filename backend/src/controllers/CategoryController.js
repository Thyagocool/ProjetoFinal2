// const t = require('../repositories/CategoryRepository')

// const x = new t()

class CategoryController {
    constructor(repository) {
        this.repository = repository.repository;
        console.log('------------- antes')
        console.log('-->>>>  ', this.repository)
        console.log('------------- depois')
        console.log('xxxxx', this.getRepository())
    }

    getRepository() {
        return this.repository
    }

    async get(req, res) {
        try {
            console.log('-->>>>  ', this.getRepository())
            const categories = await this.repository
            return res.status(200).json({ categories })
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
}


module.exports = CategoryController