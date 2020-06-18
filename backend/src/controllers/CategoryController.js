const mongoose = require('mongoose');

const Category = mongoose.model('Category');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const categories = await Category.paginate({ }, { page, limit: 10 });

        return res.json(categories);
    },
    async show(req, res) {
        const category = await Category.findById(req.params.id);

        return res.json(category);
    },
    async store(req, res) {
        // Criação
        const category = await Category.create(req.body);

        return res.json(category);
    },
    async update(req, res) {
        //update
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }); 

        return res.json(category);
    },
    async destroy(req, res) {
        //destroy
        await Category.findByIdAndRemove(req.params.id);

        return res.send();
    },
}