/*
//Initialize this JS with the app object.
*/



exports.setApp = function(app) {
    console.log('Initialize Module : DBMongoDriver');
      var mongodb = require("mongodb");
      var ObjectID = mongodb.ObjectID;


      /*
      ##########################################################################################
      SELECT
      ##########################################################################################
      */
      /*  ### FIND BY CRITERIA ### */
      this.db_findByCriteria = function (response, queryCollection, queryCriteria, successCallBack, errorCallBack) {
        ////console.log('DBMongoDriver  db_findByCriteria ==> ');
          app.db.collection(queryCollection)
              .find(queryCriteria)
              .toArray(
                  function(err, data) {
                      if (err) {
                          errorCallBack(response, err, 'db_findByCriteria Failed on collection :' + queryCollection + ' queryCriteria=' + queryCriteria);
                      } else {
                        successCallBack(response,data);
                      }
                  }
              );
      };
      /*  ### FIND BY ID ### */
      this.db_findById = function (response, queryCollection, theObjectId, successCallBack, errorCallBack) {
        //console.log('DBMongoDriver  db_findById ==> ' + theObjectId);

          app.db.collection(queryCollection)
              .findOne({
                  _id: new ObjectID(theObjectId)
              },  function(err, data) {
                    if (err) {
                        errorCallBack(response, err, 'db_findByCriteria Failed on collection :' + queryCollection + '  for theObjectId : ' + theObjectId);
                    } else {
                        successCallBack(response,data);
                    }
                })
               ;
      };
      /*  ### FIND ALL ### */
      this.db_findAll = function (response, queryCollection, successCallBack, errorCallBack) {
        //console.log('DBMongoDriver  db_findAll ==> ');
          app.db.collection(queryCollection)
              .find()
              .toArray(
                  function(err, data) {
                      if (err) {
                          errorCallBack(response, err, 'db_findByCriteria Failed on collection :' + queryCollection);
                      } else {
                          successCallBack(response,data);
                      }
                  }
              );
      };

      /*
      ##########################################################################################
      INSERT
      ##########################################################################################
      */
      /*  ### INSERT ONE ### */
    this.db_insertOne = function (response, queryCollection, newObject, successCallBack, errorCallBack) {
        //console.log('DBMongoDriver  db_insertOne ==> ');
          app.db.collection(queryCollection)
              .insertOne(newObject,
                  function(err, data) {
                      if (err) {
                          errorCallBack(response, err, 'db_insertOne Failed on collection :' + queryCollection + ' for newObject : ' + newObject);
                      } else {
                          successCallBack(response,data);
                      }
                  }
              );
      };

      /*  ### INSERT MANY ### */
      this.db_insertMany =  function (response, queryCollection, newArrayObject, successCallBack, errorCallBack) {
        //console.log('DBMongoDriver  db_insertMany ==> ');
          app.db.collection(queryCollection)
              .insertMany(newArrayObject,
                  function(err, data) {
                      if (err) {
                          errorCallBack(response, err, 'db_insertMany Failed on collection :' + queryCollection + ' for newArrayObject : ' + newArrayObject[0] + '...');
                      } else {
                          successCallBack(response,data);
                      }
                  }
              );
      };

      /*
      ##########################################################################################
      UPDATE
      ##########################################################################################
      */
      /*  ### UPDATE ONE ### */
      this.db_updateById = function (response, queryCollection, theObjectId, updatedObject, successCallBack, errorCallBack) {
        //console.log('DBMongoDriver  db_updateById ==> ');
          var tmpRef = {
              _id: new ObjectID(theObjectId)
          };
          app.db.collection(queryCollection)
              .updateOne(tmpRef, updatedObject,
                  function(err, data) {
                      if (err) {
                          errorCallBack(response, err, 'db_updateById Failed on collection :' + queryCollection + ' for theObjectId : ' + theObjectId);
                      } else {
                          successCallBack(response,data);
                      }
                  }
              );
      };

      /*  ### UPDATE MANY - NOT IMPLEMENTED YET  ### */
      this.db_updateMany = function (response, queryCollection, updateArrayObjectIds, successCallBack, errorCallBack) {
        //console.log('DBMongoDriver  db_updateMany ==> unimplemented not use case yet? ');
          errorCallBack(response,{message:'db_updateMany ==> unimplemented not use case yet?'}, 'db_updateMany  ==> unimplemented not use case yet?' );
      };

      /*
      ##########################################################################################
      DELETE
      ##########################################################################################
      */
      /*  ### DELETE ONE ### */
      this.db_deleteById  = function (response, queryCollection, theObjectId, successCallBack, errorCallBack) {
        //console.log('DBMongoDriver  db_deleteById ==> ');
          var tmpRef = {
              _id: new ObjectID(theObjectId)
          };
          app.db.collection(queryCollection)
              .deleteOne(tmpRef,
                  function(err, data) {
                      if (err) {
                          errorCallBack(response, err, 'db_deleteById Failed on collection :' + queryCollection + ' for theObjectId : ' + theObjectId);
                      } else {
                          successCallBack(response,data);
                      }
                  }
              );
      };

      /*  ### DELETE MANY - NOT IMPLEMENTED YET  ### */
      this.db_deleteMany = function (response, queryCollection, deleteArrayObjectIds, successCallBack, errorCallBack) {
        //console.log('DBMongoDriver  db_deleteMany ==> unimplemented not use case yet? ');
          errorCallBack(response, {message:'db_deleteMany ==> unimplemented not use case yet?'}, 'db_deleteMany  ==> unimplemented not use case yet?' );
      };




   console.log('Module Registered : DBMongoDriver');

   return this;
}; //end of setapp
