// Person routes

var express = require('express');
var router = express.Router();
var passport = require('passport');
var person = require('../controllers/people.ctrl');
var peopleCtrl = require('../controllers/people.ctrl');


router.get('/', peopleCtrl.listPersonView);
router.get('/new', peopleCtrl.showCreatePersonForm);
router.post('/new', peopleCtrl.createOne);

// I was using some convention I don't remember how to use.
router.get('/people',person.getAll);
router.post('/people',person.createOne);

router.get('/person/:id',person.getOne);
router.put('/person/:id',person.updateOne);
router.delete('/person/:id',person.deleteOne);

router.post('/person/:id/contact', person.addContact);


module.exports = router;
