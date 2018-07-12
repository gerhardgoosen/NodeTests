db.getCollection("oops_subscriptions").insertOne({
    createDate: ISODate("2016-08-22T09:41:49.085Z"),
    icon: "gps_fixed",
    name: "911 Track And Notify",
    path: "/map",
    price: 50.00,
    auditDate: ISODate("2016-08-24T09:41:49.085Z"),
    auditUser: "SEED_IMPORT"
});

db.getCollection("oops_categories").insertMany([
  {_id:"1",parent_id: "",name: "Oops What Now?",description: "Oops What Now - Parent Category", itemOrder: 0, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}

  ,{_id:"2",parent_id: "1",name: "Oops? SubCat_1",description: "Sub Category 1", itemOrder: 0, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}
  ,{_id:"3",parent_id: "1",name: "Oops? SubCat_2",description: "Sub Category 2", itemOrder: 1, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}
  ,{_id:"4",parent_id: "1",name: "Oops? SubCat_3",description: "Sub Category 3", itemOrder: 2, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}

  ,{_id:"5",parent_id: "2",name: "Item 1",description: "SubCat_1 Item 1", itemOrder: 0, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}
  ,{_id:"6",parent_id: "2",name: "Item 2",description: "SubCat_1 Item 2", itemOrder: 1, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}
  ,{_id:"7",parent_id: "2",name: "Item 3",description: "SubCat_1 Item 3", itemOrder: 2, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}

  ,{_id:"8",parent_id: "3",name: "Oops1",description: "SubCat_2 Item 1", itemOrder: 0, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}
  ,{_id:"9",parent_id: "3",name: "Oops2",description: "SubCat_2 Item 2", itemOrder: 1, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}
  ,{_id:"10",parent_id: "3",name: "Oops3",description: "SubCat_2 Item 3", itemOrder: 2, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}

  ,{_id:"11",parent_id: "3",name: "What? 1",description: "SubCat_3 Item 1", itemOrder: 0, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}
  ,{_id:"12",parent_id: "3",name: "What? 2",description: "SubCat_3 Item 2", itemOrder: 1, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}
  ,{_id:"13",parent_id: "3",name: "What? 3",description: "SubCat_3 Item 3", itemOrder: 2, createDate: ISODate("2016-08-22T09:41:49.085Z"), auditDate: ISODate("2016-08-24T09:41:49.085Z"), auditUser: "SEED_IMPORT"}
  
  ]);

db.getCollection("vouchers").insertMany(
    [{
        createDate: ISODate("2016-08-22T09:41:49.085Z")
        ,description: "Waterkloof High School"
        ,reference: "#WATERKLOOF#REF1"
        ,value: 0.00
        ,validationMethod:"TAG"
        ,auditDate: ISODate("2016-08-22T09:41:49.085Z")
        ,auditUser: "SEED_IMPORT"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z")
        ,description: "Clapham High School"
        ,reference: "#CLAPHAM#REF1"
        ,value: 0.00
        ,validationMethod:"TAG"
        ,auditDate: ISODate("2016-08-22T09:41:49.085Z")
        ,auditUser: "SEED_IMPORT"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z")
        ,description: "Mahala Member Activation"
        ,reference: "#MAHALA#ACTIVATE"
        ,value: 50.00
        ,validationMethod:"ACTIVATE_MEMBER"
        ,auditDate: ISODate("2016-08-22T09:41:49.085Z")
        ,auditUser: "SEED_IMPORT"
    }]
);

db.getCollection("people").insertOne({
    "_id": "1"
    ,"createDate": ISODate("2016-08-22T09:41:49.085Z")
    ,"firstName": "Gerhard"
    ,"lastName": "Goosen"
    ,"gender": ""
    ,"ageRange": ""
    ,"avatar": ""
    ,"profilePic": ""
    ,"email": "gerhardgoosen@gmail.com"
    ,"cellPhone": ""
    ,"homePhone": ""
    ,"workPhone": ""
    ,"deviceId": ""
    ,"androidPushId": ""
    ,"displayName": "Gerhard Goosen"
    ,"fbOAuthToken": ""
    ,"language": ""
    ,"locale": ""
    ,"problemText": ""
    ,"_911": false
    ,"trackMe": false
    ,"trackMeFriend": ""
    ,"auditDate": ISODate("2016-08-22T09:41:49.085Z")
    ,"auditUser": "gerhardgoosen@gmail.com"
});

db.getCollection("users").insertOne({
    "_id": "2"
    ,"createDate": ISODate("2016-08-22T09:41:49.085Z")
    ,"userId": "gerhardgoosen@gmail.com"
    ,"password": "banditb0y"
    ,"role": "ADMIN"
    ,"token": ""
    ,"validated": true
    ,"person_id": "1"
    ,"auditDate": ISODate("2016-08-22T09:41:49.085Z")
    ,"auditUser": "SEED_IMPORT"
    ,"messages" :[]
    ,"locations":[]
    ,"addresses":[]
});


db.oops_subscriptions.find({});
db.oops_categories.find({});
db.vouchers.find({});
db.people.find({});
db.users.find({});
