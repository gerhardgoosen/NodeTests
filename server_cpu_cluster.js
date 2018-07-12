//https://devcenter.heroku.com/articles/mean-apps-restful-api
//=====================
var server_port = 8000;
//var server_address ='192.168.56.1';
//var server_address  = '192.168.1.51';
var cluster = require('cluster');





if(cluster.isMaster) {
	var numWorkers = require('os').cpus().length;

	console.log('Master cluster setting up ' + numWorkers + ' workers...');

	for(var i = 0; i < numWorkers; i++) {
		cluster.fork();
	}

	cluster.on('online', function(worker) {
		console.log('Worker ' + worker.process.pid + ' is online');
	});

	cluster.on('exit', function(worker, code, signal) {
		console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
		console.log('Starting a new worker');
		cluster.fork();
	});
}
else
{



  var express = require("express");
  var path = require("path");
  var bodyParser = require("body-parser");
  var logger = require('morgan');
  var mongodb = require("mongodb");
  var app = module.exports = express();

  app.use(logger('dev'));
  app.use(bodyParser.json());

  //backend -admin front end
  app.use(express.static(__dirname + "/admin_site"));

  // Generic error handler used by all endpoints.
  app.handleError = function(res, reason, message, code) {
      console.log("ERROR: " + reason);
      res.status(code || 500).json({
          "error": message
      });
  }



  //NOTE CORS Settings
  app.all('/*', function(req, res, corsDone) {
      // CORS headers
      res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      // Set custom headers for CORS
      res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
      if (req.method == 'OPTIONS') {
          res.status(200).end();
      } else {
          corsDone();
      }
  });


  // Auth Middleware - This will check if the token is valid
  // Only the requests that start with /api/v1/* will be checked for the token.
  // Any URL's that do not follow the below pattern should be avoided unless you
  // are sure that authentication is not needed

  //NOTE Securing all endpoints
  app.all('/api/v1/*', [require('./middleware/security/securityManager')]);


	//handle Routes
	require('./routes').setApp(app);

  // If no route is matched by now, it must be a 404
  app.use(function(req, res, next) {
    var err = new Error('Not Found :(');
    err.status = 404;
    next(err);
  });



  // Start the server
  app.set('port', server_port || 8080);
  // if(server_address)//silly not null check
  // {
  //   app.set('address', server_address);
  // }

  // Create a database variable outside of the database
  //connection callback to reuse the connection pool in your app.
  var db;
  var db_URI = 'mongodb://localhost:27017/oopswhatnow';

  // Connect to the database before starting the application server.
  mongodb.MongoClient.connect(db_URI, function(err, database) {
      if (err) {
          console.log(err);
          process.exit(1);
      }
      // Save database object from the callback for reuse.
      db = database;
      app.db = database;
      console.log("Database connection ready");
      // Initialize the app.
      var server = app.listen(app.get('port'), app.get('address'), function() {
          //var port = server.address().port;
          // console.log("App[meanstack] now running  on port", port);
          console.log("App[meanstack PID: "+ process.pid +"] now running  on server.address() : ", server.address());

          process.on('SIGINT', function(code) {
              //clean up code here
              console.log('Got SIGINT. Shutting down from SIGINT (Ctrl+C).');
              console.log('Closing DB Connection...');
              db.close();
              console.log('Db Connection Closed!');
              console.log('Exiting...');
              process.exit(0);
          });
      });
  });

}
