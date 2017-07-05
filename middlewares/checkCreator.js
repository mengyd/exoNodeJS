/**
 * Created by yidon on 05/07/2017.
 */
const jwt = require('jsonwebtoken');

module.exports = (server) => {
    const Project = server.models.Project;
    return (req, res, next) => {
        return Project.findById(req.params.id)
            .then(project => {
                if(req.token.userId !== project.creator.toString()){
                    return res.status(401).send("Unauthorized user")
                }

                next();
            });
    };
};