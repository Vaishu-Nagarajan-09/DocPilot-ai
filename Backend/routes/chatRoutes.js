var express = require('express');
var router = express.Router();
const chatController = require ("../controllers/chatController.js")

router.post('/ask', chatController);


module.exports = router;
