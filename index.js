/*const Person = require('./Person');
let db = [];
const http = require('http');*/
/**
 * Si la requete HTTP est en POST,
 * dans ce cas, ne rien retourner. Attention, il faut quand meme répondre!
 *
 * Si la requette HTTP est en GET,
 * dans ce cas, retourner la liste des utilisateurs créés
 */
/*
const server = http.createServer((request, response) => {
const url = request.url;
const path = '/persons';
const method = request.method;

if (url.indexOf(path) === -1) {
    response.statusCode = 404;
    return response.end(`cannot ${method} ${url}`);
}

// /persons/<le_nom_special>
// ['', 'persons', '<le_nom_special>']
// 0, 1, 2
if (method === 'DELETE') {
    const components = url.split('/');
    if (components.length !== 3) {
        return response.end('invalid path');
    }

    const name = components[2];
    db = db.filter(user => user.name !== name);
    response.end('');
}

if (method === 'POST') {
    const bucket = [];
    request.on('data', (chunk) => {
        bucket.push(chunk);
});

    request.on('end', ()=> {
        const data = bucket.toString();
    let obj = null;
    try {
        obj = JSON.parse(data);
        if (!obj.name || !obj.age)
            throw new Error();
    }
    catch (e) {
        return response.end('tocard');
    }

    let p = new Person(obj.name, obj.age);
    db.push(p);
    return response.end();
});
}

else if (method === 'GET') {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(db));
}
});

console.log('Listening on port ', 8080);
server.listen(8080);
*/

/************************************************Express*************************************************/
/*
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const Person = require('./Person');
console.log('server listening on port 8080');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/al-janv-db');
*/
//let db = [];
/**
 * Liste les personnes en base de données
 */
/*
server.get('/persons', (req, res, next) => {
    Person.find()
        .then(persons => {
            res.send(persons);
        });
    //res.send(persons);
});
*/
/**
 * Créer une nouvelle personne
 */
/*
server.post('/persons',
    bodyParser.json(),
    (req, res, next) => {
    person.create(req.body)
        .then(person => {
            res.status(201).send(person);
        });
        */
    /*
    let person = new Person(req.body.name, req.body.age);
    db.push(person);
    res.status(201).send();
    */
//});

/**
 * Supprime les personne avec le nom passé dans la route
 */
/*
server.delete('/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.status(204).send;
        })
        */
    /*const name = req.params.name;
    db = db.filter(person => person.name != name);
    res.status(204).send();*/
//});

/**
 * Met à jour les personnes qui ont pour nom <:old> avec <:new>
 */
/*
server.put('/persons/:id', (req, res, next) => {
    Person.findByIdAndUpdate(req.params.id, req.body)
        .then(()=>{
            res.status(204).send();
        })
        */
    /*const old = req.params.old;
    const new_name = req.params.new_name;
    db = db.map(person => {
        if(person.name != old)
            return person;

        person.name = new_name;
        return person;
    })*/
//});

//server.listen(8080);


/*********************************************************************************************/

const express = require('express');
const server = express();

require('./config')(server);        console.log('loading config...');
require('./models')(server);        console.log('loading models...');
require('./controllers')(server);   console.log('loading controllers...');
require('./middlewares')(server);   console.log('loading middlewares...');
require('./routes')(server);        console.log('loading routes...');

console.log('server started on port ', server.config.port);
server.listen(server.config.port);



















