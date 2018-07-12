//=======================================
//*Routes*//
//=======================================


 exports.setApp = function(app) {
  console.log('Initialize Routes =====>');


  //  var authenticator = require('./security/authenticator').setApp(app);
  // ##### DB DRIVER #####
  var dbMongoBuilder  = require('./db/dbMongoDriver').setApp(app);


    // ##### Security #####
  var authenticator = require('./security/authenticator');
  // ##### ENTTTIES [Data Model]#####
  var device_locations = require('./entity/device_locations').setApp(app);
  var payments = require('./entity/payments').setApp(app);
  var people = require('./entity/people').setApp(app);
  var users = require('./entity/users').setApp(app);
  var users_addresses = require('./entity/users_addresses').setApp(app);
  var users_messages = require('./entity/users_messages').setApp(app);
  var vouchers = require('./entity/vouchers').setApp(app);
  var vouchers_claimed = require('./entity/vouchers_claimed').setApp(app);
//=======================================



/*
* Routes that can be accessed by any one
*/
app.post('/login', function(request, response) { return authenticator.login(request, response, dbMongoBuilder);
    });


/*
* Routes that can be accessed only by autheticated users
*/

//###NOTE LOCATIONS ==>
app.get('/api/v1/locations', function(request, response) { return device_locations.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/location/:id', function(request, response) { return device_locations.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/location/', function(request, response) { return device_locations.create(request, response, dbMongoBuilder); });
app.put('/api/v1/location/:id', function(request, response) { return device_locations.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/location/:id', function(request, response) { return device_locations.deleteOne(request, response, dbMongoBuilder); });
//###NOTE PAYMENTS ==>
app.get('/api/v1/payments', function(request, response) { return payments.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/payment/:id', function(request, response) { return payments.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/payment/', function(request, response) { return payments.create(request, response, dbMongoBuilder); });
app.put('/api/v1/payment/:id', function(request, response) { return payments.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/payment/:id', function(request, response) { return payments.deleteOne(request, response, dbMongoBuilder); });
//###NOTE PEOPLE ==>
app.get('/api/v1/people', function(request, response) { return people.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/person/:id', function(request, response) { return people.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/person/', function(request, response) { return people.create(request, response, dbMongoBuilder); });
app.put('/api/v1/person/:id', function(request, response) { return people.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/person/:id', function(request, response) { return people.deleteOne(request, response, dbMongoBuilder); });
//###NOTE USERS ==>
app.get('/api/v1/users', function(request, response) { return users.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/user/:id', function(request, response) { return users.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/user/', function(request, response) { return users.create(request, response, dbMongoBuilder); });
app.put('/api/v1/user/:id', function(request, response) { return users.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/user/:id', function(request, response) { return users.deleteOne(request, response, dbMongoBuilder); });
//###NOTE USER_ADDRESSES ==>
app.get('/api/v1/addresses', function(request, response) { return users_addresses.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/address/:id', function(request, response) { return users_addresses.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/address/', function(request, response) { return users_addresses.create(request, response, dbMongoBuilder); });
app.put('/api/v1/address/:id', function(request, response) { return users_addresses.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/address/:id', function(request, response) { return users_addresses.deleteOne(request, response, dbMongoBuilder); });
//###NOTE USER_MESSAGES ==>
app.get('/api/v1/messages', function(request, response) { return users_messages.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/message/:id', function(request, response) { return users_messages.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/message/', function(request, response) { return users_messages.create(request, response, dbMongoBuilder); });
app.put('/api/v1/message/:id', function(request, response) { return users_messages.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/message/:id', function(request, response) { return users_messages.deleteOne(request, response, dbMongoBuilder); });
//###NOTE VOUCHERS ==>
app.get('/api/v1/vouchers', function(request, response) { return vouchers.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/voucher/:id', function(request, response) { return vouchers.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/voucher/', function(request, response) { return vouchers.create(request, response, dbMongoBuilder); });
app.put('/api/v1/voucher/:id', function(request, response) { return vouchers.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/voucher/:id', function(request, response) { return vouchers.deleteOne(request, response, dbMongoBuilder); });
//###NOTE VOUCHERS CLAIMED ==>
app.get('/api/v1/vouchersClaimed', function(request, response) { return vouchers_claimed.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/voucherClaimed/:id', function(request, response) { return vouchers_claimed.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/voucherClaimed/', function(request, response) { return vouchers_claimed.create(request, response, dbMongoBuilder); });
app.put('/api/v1/voucherClaimed/:id', function(request, response) { return vouchers_claimed.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/voucherClaimed/:id', function(request, response) { return vouchers_claimed.deleteOne(request, response, dbMongoBuilder); });



/*
* Routes that can be accessed only by authenticated & authorized users
*/

//###NOTE LOCATIONS ==>
app.get('/api/v1/admin/locations', function(request, response) { return device_locations.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/admin/location/:id', function(request, response) { return device_locations.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/admin/location/', function(request, response) { return device_locations.create(request, response, dbMongoBuilder); });
app.put('/api/v1/admin/location/:id', function(request, response) { return device_locations.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/admin/location/:id', function(request, response) { return device_locations.deleteOne(request, response, dbMongoBuilder); });
//###NOTE PAYMENTS ==>
app.get('/api/v1/admin/admin/payments', function(request, response) { return payments.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/admin/payment/:id', function(request, response) { return payments.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/admin/payment/', function(request, response) { return payments.create(request, response, dbMongoBuilder); });
app.put('/api/v1/admin/payment/:id', function(request, response) { return payments.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/admin/payment/:id', function(request, response) { return payments.deleteOne(request, response, dbMongoBuilder); });
//###NOTE PEOPLE ==>
app.get('/api/v1/admin/people', function(request, response) { return people.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/admin/person/:id', function(request, response) { return people.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/admin/person/', function(request, response) { return people.create(request, response, dbMongoBuilder); });
app.put('/api/v1/admin/person/:id', function(request, response) { return people.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/admin/person/:id', function(request, response) { return people.deleteOne(request, response, dbMongoBuilder); });
//###NOTE USERS ==>
app.get('/api/v1/admin/users', function(request, response) { return users.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/admin/user/:id', function(request, response) { return users.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/admin/user/', function(request, response) { return users.create(request, response, dbMongoBuilder); });
app.put('/api/v1/admin/user/:id', function(request, response) { return users.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/admin/user/:id', function(request, response) { return users.deleteOne(request, response, dbMongoBuilder); });
//###NOTE USER_ADDRESSES ==>
app.get('/api/v1/admin/addresses', function(request, response) { return users_addresses.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/admin/address/:id', function(request, response) { return users_addresses.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/admin/address/', function(request, response) { return users_addresses.create(request, response, dbMongoBuilder); });
app.put('/api/v1/admin/address/:id', function(request, response) { return users_addresses.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/admin/address/:id', function(request, response) { return users_addresses.deleteOne(request, response, dbMongoBuilder); });
//###NOTE USER_MESSAGES ==>
app.get('/api/v1/admin/messages', function(request, response) { return users_messages.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/admin/message/:id', function(request, response) { return users_messages.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/admin/message/', function(request, response) { return users_messages.create(request, response, dbMongoBuilder); });
app.put('/api/v1/admin/message/:id', function(request, response) { return users_messages.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/admin/message/:id', function(request, response) { return users_messages.deleteOne(request, response, dbMongoBuilder); });
//###NOTE VOUCHERS ==>
app.get('/api/v1/admin/vouchers', function(request, response) { return vouchers.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/admin/voucher/:id', function(request, response) { return vouchers.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/admin/voucher/', function(request, response) { return vouchers.create(request, response, dbMongoBuilder); });
app.put('/api/v1/admin/voucher/:id', function(request, response) { return vouchers.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/admin/voucher/:id', function(request, response) { return vouchers.deleteOne(request, response, dbMongoBuilder); });
//###NOTE VOUCHERS CLAIMED ==>
app.get('/api/v1/admin/vouchersClaimed', function(request, response) { return vouchers_claimed.getAll(request, response, dbMongoBuilder); });
app.get('/api/v1/admin/voucherClaimed/:id', function(request, response) { return vouchers_claimed.getOne(request, response, dbMongoBuilder); });
app.post('/api/v1/admin/voucherClaimed/', function(request, response) { return vouchers_claimed.create(request, response, dbMongoBuilder); });
app.put('/api/v1/admin/voucherClaimed/:id', function(request, response) { return vouchers_claimed.updateOne(request, response, dbMongoBuilder); });
app.delete('/api/v1/admin/voucherClaimed/:id', function(request, response) { return vouchers_claimed.deleteOne(request, response, dbMongoBuilder); });

console.log('Routes Registered <=====');;
};
