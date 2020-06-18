const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const MovieSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    mark: {
        type: Boolean,
        required: true,
    },
    newEps: {
        type: Boolean,
        required: true,
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

MovieSchema.plugin(mongoosePaginate);

mongoose.model('Movie', MovieSchema);