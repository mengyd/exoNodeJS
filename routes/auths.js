/**
 * Created by yidon on 05/07/2017.
 */
const express = require('express');

module.exports = (server) => {
    const router = express.Router();
    router.post('/login',
        server.middlewares.bodyParser.json(),
        server.controllers.auth.login);
    return router;
};