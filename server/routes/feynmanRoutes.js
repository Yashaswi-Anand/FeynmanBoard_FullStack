const express = require('express');
const { addTopics, findTopic } = require('../controller/feynmanController');
const route = express.Router();


// add topic using post api
route.post('/addTopic', addTopics)
// fetching all topics
route.get('/topics', findTopic)


module.exports = route