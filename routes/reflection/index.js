const express = require('express');
const reflectionRouter = express.Router();
const reflectionController = require('../../controllers/reflection');
const Authentication = require('../../middleware/Authentication');

reflectionRouter.use(Authentication.verifyToken);
reflectionRouter.get('/get_reflections', reflectionController.get_reflections);
reflectionRouter.post('/create_reflection', reflectionController.create_reflection);
reflectionRouter.put('/update_reflection/:id', reflectionController.update_reflection);
reflectionRouter.delete('/delete_reflection/:id', reflectionController.delete_reflection);

module.exports = reflectionRouter;