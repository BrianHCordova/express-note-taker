const router = require('express').Router();

// Import our notes
const notesRouter = require('./notes');
// TODO: import your notes route
router.use('/notes', notesRouter);
// TODO: Initialize diagnostics route

module.exports = router;
