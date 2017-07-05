/**
 * Created by yidon on 05/07/2017.
 */
const sha1 = require('sha1');
const jwt = require('jsonwebtoken');

module.exports = (server) => {
    const Person = server.models.Person;

    return{
        login
    };

    function login(req, res, next){
        const email = req.body.email;
        const password = sha1(req.body.password);

        findUser()
            .then(ensureOne)
            .then(createToken)
            .then(send)
            .catch(err => res.status(err.code || 500).send(err.reason || err));

        function findUser() {
            return Person.findOne()
                .where({email: email, password: password})
                .exec()
        }

        function ensureOne(person){
            return person ? person : Promise.reject({code: 404, reason: 'user.not.found'})
        }

        function createToken(person) {
            const token = {
                userId: person.id.toString()
            };

            return new Promise((resolve, reject) => {
                //jwt.sign(token, {expiresIn: 60}, (err, encryptedToken) => {
                jwt.sign(token, server.config.salt, {expiresIn: 3600}, (err, encryptedToken) => {
                    if(err)
                        return reject(err);

                    resolve(encryptedToken);
                })
            });
        }

        function send(token){
            res.send(token);
        }
    }
};
