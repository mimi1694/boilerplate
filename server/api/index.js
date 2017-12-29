'use strict'
const router = require('express').Router()

router.use('/todos', require('./todos'));  // /api/todos

//404 error handling
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = router;