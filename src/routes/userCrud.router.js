const { getAll, create, remove, getOne, update } = require('../controllers/userCrud.controllers');
const express = require('express');

const userCrudRouter = express.Router();

userCrudRouter.route("/users")
	.get(getAll)
        .post(create);

userCrudRouter.route("/users/:id")
        .get(getOne)
        .delete(remove)
        .put(update);

module.exports = userCrudRouter;