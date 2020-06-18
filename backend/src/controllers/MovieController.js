const mongoose = require('mongoose');

const Movie = mongoose.model('Movie');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const movies = await Movie.paginate({ }, { page, limit: 10 });

        return res.json(movies);
    },
    async show(req, res) {
        const movie = await Movie.findById(req.params.id);

        return res.json(movie);
    },
    async store(req, res) {
        // Criação
        const movie = await Movie.create(req.body);

        return res.json(movie);
    },
    async update(req, res) {
        //update
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }); 

        return res.json(movie);
    },
    async destroy(req, res) {
        //destroy
        await Movie.findByIdAndRemove(req.params.id);

        return res.send();
    },
}