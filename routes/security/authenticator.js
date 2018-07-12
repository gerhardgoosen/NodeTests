var jwt = require('jwt-simple');

var auth = {

  login: function(req, res) {

    var username = req.body.username || '';
    var password = req.body.password || '';

    if (username == '' || password == '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }

    // Fire a query to your DB and check if the credentials are valid
    var dbUserObj = auth.validate(username, password);

    if (!dbUserObj) { // If authentication fails, we send a 401 back
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }

    if (dbUserObj) {

      // If authentication is success, we will generate a token
      // and dispatch it to the client

      res.json(genToken(dbUserObj));
    }

  },

  validate: function(username, password) {
      console.log('authenticator ==> validate <==');
    // spoofing the DB response for simplicity
    var dbUserObj = { // spoofing a userobject from the DB.
      name: 'gerhardgoosen@gmail.com',
      role: 'admin',
      username: 'gerhardgoosen@gmail.com'
    };

    return dbUserObj;
  },

  validateUser: function(username) {
    console.log('authenticator ==> validateUser <==');
    // spoofing the DB response for simplicity
    var dbUserObj = { // spoofing a userobject from the DB.
      name: 'gerhardgoosen@gmail.com',
      role: 'admin',
      username: 'gerhardgoosen@gmail.com'
    };

    return dbUserObj;
  },
}

// private method
function genToken(user) {
  console.log('genToken');
  var expires = expiresInDays(1); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('./../../middleware/config/secret')());

  return {
    token: token,
    expires: expires,
    user: user
  };
}

function expiresInDays(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}



module.exports = auth;
