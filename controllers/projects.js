/**
 * Created by yidon on 05/07/2017.
 */
const bodyParser = require('body-parser');


module.exports = (server) => {
    const Project = server.models.Project;
    const Person = server.models.Person;

    return {
        list,
        create,
        remove,
        update,
        addMembers
    };

    function list(req, res) {
        Project.find()
            .then(projects => {
                res.send(projects);
            });
    }

    function create(req, res) {
        let project = new Project(req.body);
        project.creator = req.token.userId;
        project.member.push(req.token.userId);
        project.save()
            .then(defineCreator)
            .then(project => res.status(201).send(project))
            .catch(error => res.status(500).send(error));

        function defineCreator(project){
            return Person.findById(req.token.userId)
                .then(person => {
                    person.projects.push(project);
                    return person.save();
                })
                .then(person => project);
        }
    }

    function remove(req, res) {
        Project.findByIdAndRemove(req.params.id)
            .then(()=> {
                res.status(204).send();
            })
    }

    function update(req, res) {
        Project.findByIdAndUpdate(req.params.id, req.body)
            .then(() => {
                res.status(204).send();
            })
    }

    function addMembers(req, res) {

        return Project.findById(req.params.id)
            .then(project => {
                addToMember(project);
            });


        function addToMember(project){
            return Person.findById(req.body.idMember)
                .then(person => {
                    person.projects.push(project);
                    project.member.push(req.body.idMember);
                    project.save();
                    res.send(person);
                    return person.save();
                })
                .then(person => project);

        }
    }

};