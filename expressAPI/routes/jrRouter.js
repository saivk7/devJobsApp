var express = require('express');
var jrRouter = express.Router();

var redis = require('redis');
var client = redis.createClient();

const { promisify }  = require('util');
const getAsync = promisify(client.get).bind(client);


/* GET jobs page. */
jrRouter.get('/', async function(req, res, next) {
    const jobs = await getAsync('jrjobs');
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    return res.send(jobs);

});

module.exports = jrRouter;
