'use strict'

const express = require('express');
const router = new express.Router();
const { Todo } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next)=>{
    Todo.findAll()
    .then(todos => res.json(todos))
    .catch(next)
})