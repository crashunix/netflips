const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const MovieController = require('./controllers/MovieController');
const CategoryController = require('./controllers/CategoryController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.get('/movies', MovieController.index);
routes.get('/movies/:id', MovieController.show);
routes.post('/movies', MovieController.store);
routes.put('/movies/:id', MovieController.update);
routes.delete('/movies/:id', MovieController.destroy);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.destroy);

module.exports = routes;