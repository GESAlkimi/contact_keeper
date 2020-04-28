const express = require('express');
const router = express.Router();


// @route GET api/contacts
// @desc get all users' contacts
// @access private
router.get('/', (req, res) => {res.send('Get all contacts of a user')});

// @route POST api/contacts
// @desc add new contact
// @access private
router.post('/', (req, res) => {res.send('Add a contact')});

// @route POST api/contacts/:id
// @desc update a contact
// @access private
router.put('/:id', (req, res) => {res.send('Update a contact')});

// @route POST api/contacts/:id
// @desc delete a contact
// @access private
router.delete('/:id', (req, res) => {res.send('Delete a contact')});

module.exports = router;