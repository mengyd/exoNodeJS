/**
 * Created by yidon on 05/07/2017.
 */
let router = require('express').Router();
let bodyParser = require('body-parser');


module.exports = (server) => {
    router.get('/',
        server.controllers.projects.list);

    router.post('/create',
        server.middlewares.ensureAuthenticated,
        server.middlewares.bodyParser.json(),
        server.controllers.projects.create);

    router.delete('/:id',
        server.controllers.projects.remove);

    router.put('/:id',
        server.middlewares.bodyParser.json(),
        server.controllers.projects.update);

    router.post('/add/:id',
        server.middlewares.ensureAuthenticated,
        server.middlewares.bodyParser.json(),
        server.middlewares.checkCreator,
        server.middlewares.ensureBodyFields(['idMember']),
        server.controllers.projects.addMembers);

    return router;};
