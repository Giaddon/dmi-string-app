/**
 * Endpoints for the string API.
 */

const express = require('express');
const router = new express.Router();
const strings = require('./data');

/* eslint-disable arrow-body-style */
/**
 * Endpoint for GET /strings
 *
 * @return {object} json with a key of "strings" with the value of the strings
 */
router.get('/', (req, res) => {
  return res.json({ strings });
});

/**
 * Endpoint for POST /strings
 * Adds submitted newString to front of server array.
 * @return {object} json with a key of "added" with the value of the string added to the server array.
 */
router.post('/', (req, res) => {
  // Prepending to the array as per the instructions, this will be slower as the array gets longer.
  strings.unshift(req.body.newString);
  return res.json({ added: req.body.newString });
});

module.exports = router;
