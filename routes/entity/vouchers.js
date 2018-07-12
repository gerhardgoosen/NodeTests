/*
//Initialize this JS with the app object.
*/

exports.setApp = function(app) {

    console.log('Initialize Endpoints : vouchers');

    var M_COLLECTION = "vouchers";

    this.getAll = function(request, response, dbMongoBuilder) {
        dbMongoBuilder.db_findAll(response, M_COLLECTION, successResponse, errorResponse);
    };

    this.getOne = function(request, response, dbMongoBuilder) {
        dbMongoBuilder.db_findById(response, M_COLLECTION, request.params.id, successResponse, errorResponse);
    };

    this.create = function(request, response, dbMongoBuilder) {
        var newVoucher = request.body;
        newVoucher.createDate = new Date();
        if (!(newVoucher.reference && newVoucher.validationMethod)) {
            app.handleError(response, "Invalid user input", "Must provide a person_id and validationMethod.", 400);
        }
        dbMongoBuilder.db_insertOne(response, M_COLLECTION, newVoucher, successResponse, errorResponse);
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

    console.log('Endpoints Registered : vouchers');

    return this;
}; //end of setApp
