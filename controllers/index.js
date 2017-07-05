/**
 * Created by yidon on 04/07/2017.
 */
module.exports = (server) => {
    server.controllers = {
        persons: require('./persons')(server),
        tasks: require('./tasks')(server),
        auth: require('./auth')(server),
        projects: require('./projects')(server)
    };
};
