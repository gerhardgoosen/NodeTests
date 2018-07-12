exports.setApp = function(app) {

    console.log('Initialize Endpoints : device_locations');

    var M_COLLECTION = "device_locations";

    this.login = function(request, response, dbMongoBuilder) {
        dbMongoBuilder.db_findAll(response, M_COLLECTION, successResponse, errorResponse);
    }


    this.getAll = function(request, response, dbMongoBuilder) {
        dbMongoBuilder.db_findAll(response, M_COLLECTION, successResponse, errorResponse);
    };

    this.getOne = function(request, response, dbMongoBuilder) {
        dbMongoBuilder.db_findById(response, M_COLLECTION, request.params.id, successResponse, errorResponse);
    };

    this.create = function(request, response, dbMongoBuilder) {
        var newLoc = request.body;
        newLoc.createDate = new Date();
        if (!(newLoc.latitude && newLoc.longitude)) {
            app.handleError(response, "Invalid user input", "Must provide a latitude and longitudee.", 400);
        }
        dbMongoBuilder.db_insertOne(response, M_COLLECTION, newLoc, successResponse, errorResponse);
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

    console.log('Endpoints Registered : device_locations');

    return this;
}; //end of setApp
