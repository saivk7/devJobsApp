var express = require('express');
var gitRouter = express.Router();

var redis = require('redis');
var client = redis.createClient();

const { promisify }  = require('util');
const getAsync = promisify(client.get).bind(client);


/* GET jobs page. */
gitRouter.get('/', async function(req, res, next) {
    const jobs = await getAsync('alljobs');
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    return res.send(jobs);

});

module.exports = gitRouter;
