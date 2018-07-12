db.getCollection("people").insertOne({
    "_id": ObjectId("57bd9e6476380806fcb869f1"),
    "createDate": ISODate("2016-08-22T09:41:49.085Z"),
    "firstName": "Gerhard",
    "lastName": "Goosen",
    "gender": "Male",
    "ageRange": "25-35",
    "avatar": "",
    "profilePic": "",
    "email": "gerhard@goosen.com",
    "cellPhone": "000000000",
    "homePhone": "111111111",
    "workPhone": "222222222",
    "deviceId": "57bd9e6476380806fcb869f1",
    "androidPushId": "asdasdassadasasdasldas",
    "displayName": "Gerhard Goosen",
    "fbOAuthToken": "",
    "language": "en",
    "locale": "",
    "problemText": "",
    "_911": false,
    "trackMe": false,
    "trackMeFriend": "",
    "auditDate": ISODate("2016-08-22T09:41:49.085Z"),
    "auditUser": "gerhard@goosen.com"
});

db.getCollection("users").insertOne({
    "_id": "2",
    "createDate": ISODate("2016-08-22T09:41:49.085Z"),
    "userId": "gerhardgoosen@gmail.com",
    "password": "banditb0y",
    "role": "ADMIN",
    "token": "",
    "validated": true,
    "person_id": "1",
    "auditDate": ISODate("2016-08-22T09:41:49.085Z"),
    "auditUser": "SEED_IMPORT",
    "messages": [],
    "locations": [],
    "addresses": []
});

db.getCollection("users_messages").insertMany(
    [{
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        person_id: "57bd9e6476380806fcb869f1",
        messageTitle: "Welcome",
        messageBody: "Hello User !!!",
        gotoView: "/messages",
        closed: false,
        trashed: false,
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        person_id: "57bd9e6476380806fcb869f1",
        messageTitle: "Welcome2",
        messageBody: "Hello User2 !!!",
        gotoView: "/messages",
        closed: false,
        trashed: false,
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        person_id: "57bd9e6476380806fcb869f1",
        messageTitle: "Welcome3",
        messageBody: "Hello User2 !!!",
        gotoView: "/messages",
        closed: false,
        trashed: false,
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }]
);

db.getCollection("users_addresses").insertMany(
    [{
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        person_id: "57bd9e6476380806fcb869f1",
        type: "HOME",
        poBoxNumber: "",
        line1: "85 Skool Street",
        line2: "La Montagne",
        line3: "",
        city: "Pretoria",
        province: "Gauteng",
        state: "",
        country: "South Africa",
        postalCode: "0184",
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        person_id: "57bd9e6476380806fcb869f1",
        type: "WORK",
        poBoxNumber: "",
        line1: "121 Amkor Road",
        line2: "Lyttleton",
        line3: "",
        city: "Centurion",
        province: "Gauteng",
        state: "",
        country: "South Africa",
        postalCode: "0184",
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }]);

db.getCollection("device_locations").insertMany(
    [{
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        deviceId: "57bd9e6476380806fcb869f1",
        accuracy: 30,
        altitude: 1484,
        latitude: -28.356445,
        longitude: 25.569454,
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        deviceId: "57bd9e6476380806fcb869f1",
        accuracy: 24,
        altitude: 1456,
        latitude: -28.445356,
        longitude: 25.454569,
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        deviceId: "57bd9e6476380806fcb869f1",
        accuracy: 13,
        altitude: 1436,
        latitude: -28.643545,
        longitude: 25.455694,
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }]
);

db.getCollection("vouchers_claimed").insertMany(
    [{
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        qrcode_id: "57bdbc0476380806fcb86a18",
        person_id: "57bd9e6476380806fcb869f1",
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        qrcode_id: "57bdbc0476380806fcb86a19",
        person_id: "57bd9e6476380806fcb869f1",
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        qrcode_id: "57bdbc0476380806fcb86a1a",
        person_id: "57bd9e6476380806fcb869f1",
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "57bd9e6476380806fcb869f1"
    }]
);

db.getCollection("oops_subscriptions").insertOne({
    createDate: ISODate("2016-08-22T09:41:49.085Z"),
    icon: "gps_fixed",
    name: "911 Track And Notify",
    path: "/map",
    price: 50.00,
    auditDate: ISODate("2016-08-24T09:41:49.085Z"),
    auditUser: "SEED_IMPORT"
});

db.getCollection("vouchers").insertMany(
    [{
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        description: "Waterkloof High School",
        reference: "#WATERKLOOF#REF1",
        value: 0.00,
        validationMethod: "TAG",
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "SEED_IMPORT"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        description: "Clapham High School",
        reference: "#CLAPHAM#REF1",
        value: 0.00,
        validationMethod: "TAG",
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "SEED_IMPORT"
    }, {
        createDate: ISODate("2016-08-22T09:41:49.085Z"),
        description: "Mahala Member Activation",
        reference: "#MAHALA#ACTIVATE",
        value: 50.00,
        validationMethod: "ACTIVATE_MEMBER",
        auditDate: ISODate("2016-08-22T09:41:49.085Z"),
        auditUser: "SEED_IMPORT"
    }]
);


db.oops_subscriptions.find({});
db.people.find({});
db.users.find({});
db.users_messages.find({});
db.users_addresses.find({});
db.device_locations.find({});
db.vouchers.find({});
db.vouchers_claimed.find({});


db.getCollection("oops_categories").insertOne({
    createDate: ISODate("2016-08-22T09:41:49.085Z")
  ,  parent_id: "0"
  ,  itemOrder: 1
  ,  name: "Oops What Now?"
  ,  description: "Oops What Now - Parent Category"
  ,  auditDate: ISODate("2016-08-24T09:41:49.085Z")
  ,  auditUser: "SEED_IMPORT"
});
