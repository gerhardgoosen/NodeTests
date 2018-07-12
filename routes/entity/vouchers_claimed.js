 /*
 //Initialize this JS with the app object.
 */

 exports.setApp = function(app) {

     console.log('Initialize Endpoints : vouchers_claimed');

     var M_COLLECTION = "vouchers_claimed";

     this.getAll = function(request, response, dbMongoBuilder) {
         dbMongoBuilder.db_findAll(response, M_COLLECTION, successResponse, errorResponse);
     };

     this.getOne = function(request, response, dbMongoBuilder) {
         dbMongoBuilder.db_findById(response, M_COLLECTION, request.params.id, successResponse, errorResponse);
     };

     this.create = function(request, response, dbMongoBuilder) {
         var newClaimedVoucher = request.body;
         newClaimedVoucher.createDate = new Date();
         if (!(newClaimedVoucher.person_id && newClaimedVoucher.qrcode_id)) {
             app.handleError(response, "Invalid user input", "Must provide a person_id and qrcode_id.", 400);
         }
         dbMongoBuilder.db_insertOne(response, M_COLLECTION, newClaimedVoucher, successResponse, errorResponse);
     };

     this.updateOne = function(request, response, dbMongoBuilder) {
         dbMongoBuilder.db_updateById(response, M_COLLECTION, request.params.id, successResponse, errorResponse);

     };

     this.deleteOne = function(request, response, dbMongoBuilder) {
         dbMongoBuilder.db_deleteById(response, M_COLLECTION, request.params.id, successResponse, errorResponse);
     };

     function successResponse(response, data) {
         //res.status(204).end();
         //dont know but put and post seems liek it should return 204
         response.status(200).json(data);
     };

     function errorResponse(response, error, message) {
         app.handleError(response, error.message, message);
     };

     console.log('Endpoints Registered : vouchers_claimed');

     return this;
 }; //end of setApp
