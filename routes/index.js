/**
 * Created by yidon on 04/07/2017.
 */

module.exports = (server) => {
    server.use('/persons',  require('./persons')(server));
    server.use('/tasks',    require('./tasks')(server));
    server.use('/auth',    require('./auths')(server));
    server.use('/projects', require('./projects')(server))
    //...
};


