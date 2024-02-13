const { getAll, create, getOne, remove, update, verifyUser, login, logged } = require('../controllers/user.controller');
const express = require('express');
const veryJWT = require('../utils/verifyJWT')

const routerUser = express.Router();

routerUser.route('/')
    .get(veryJWT, getAll)
    .post(create);


routerUser.route("/login")
.post(login)

routerUser.route("/me")
.get(veryJWT, logged)

routerUser.route('/verify/:code')
    .get(verifyUser)



routerUser.route('/:id')
    .get(veryJWT, getOne)
    .delete(veryJWT, remove)
    .put(veryJWT, update);

module.exports = routerUser; 