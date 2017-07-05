/**
 * Created by yidon on 04/07/2017.
 */
const bodyParser = require('body-parser');

module.exports = (server) => {
    const Task = server.models.Task;

    return {
        list,
        create,
        remove,
        update
    };

    function list(req, res) {
        return Task.find()
            .then(tasks => res.send(tasks));
    }

    function create(req, res) {
        /*
        return Task.create(req.body)
            .then(task => res.status(201).send(task))
            .catch(error => res.status(500).send(error));
        */
        let task = new Task(req.body);
        task.owner = req.token.userId;
        task.save()
            .then(addToUser)
            .then(task => res.status(201).send(task))
            .catch(error => res.status(500).send(error));

        function addToUser(task){
            return Person.findById(req.token.userId)
                .then(person => {
                    person.tasks.push(task);
                    return person.save();
                })
                .then(person => task);
        }
    }

    function remove(req, res) {
        return Task.findByIdAndRemove(req.params.id)
            .then( () => res.status(204).send())
    }

    function update(req, res) {
        return Task.findByIdAndUpdate(req.params.id, req.body)
            .then(task => res.status(204).send());
    }
};
