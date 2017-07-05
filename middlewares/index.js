/**
 * Created by yidon on 04/07/2017.
 */
module.exports = (server) => {
    server.middlewares = {
        bodyParser: require('body-parser'),
        logger: require('./logger'),
        ensureBodyFields: require('./ensureBodyFields'),
        auths:require('../controllers/auth'),
        ensureAuthenticated : require('./ensureAuthenticated')(server),
        checkCreator: require('./checkCreator')(server)
    }
};
