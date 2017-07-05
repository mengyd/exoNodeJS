/**
 * Created by yidon on 04/07/2017.
 */
const bodyParser = require('body-parser');
const sha1 = require('sha1');

module.exports = (server) => {
    const Person = server.models.Person;

    return {
        list,
        create,
        remove,
        update
    };

    function list(req, res) {
        Person.find()
            .then(persons => {
                res.send(persons);
            });
    }

    function create(req, res) {
        req.body.password = sha1(req.body.password);
        return findUser()
            .then(ensureNone)
            .then(createUser)
            .catch(err => res.status(err.code || 500).send(err.reason | err));
        function findUser(){
            return Person.findOne({email: req.body.email})
        }
        function ensureNone(person){
            return person ? Promise.reject({code:403, reason: 'user.exists'}) : null;
        }
        function createUser(){
            Person.create(req.body)
                .then(person => res.status(201).send(person))
        }
        /*
        Person.create(req.body)
            .then(person => {
                res.status(201).send(person);
            });
        */
    }

    function remove(req, res) {
        Person.findByIdAndRemove(req.params.id)
            .then(()=> {
                res.status(204).send();
            })
    }

    function update(req, res) {
        Person.findByIdAndUpdate(req.params.id, req.body)
            .then(() => {
                res.status(204).send();
            })
    }

};



