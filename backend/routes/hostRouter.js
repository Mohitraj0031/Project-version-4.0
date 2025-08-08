const express = require('express');
const hostRouter = express.Router();

const hostController = require('../controllers/hostController');

hostRouter.get("//",hostController.getProducts);



module.exports = hostRouter;
