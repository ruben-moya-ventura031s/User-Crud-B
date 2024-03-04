const express = require('express');
const userCrudRouter = require('../routes/userCrud.router');
const router = express.Router();

// colocar las rutas aquí
router.use(userCrudRouter)

module.exports = router;