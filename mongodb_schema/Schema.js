/*
Mongo DB Schema
*/
/* ========== DROPS ========== */

db.users.drop();
db.people.drop();
db.users_messages.drop();
db.users_addresses.drop();
db.device_locations.drop();
db.payments.drop();
db.vouchers.drop();
db.vouchers_claimed.drop();


/* ========== VALIDATORS ==========
/* ### USERS ### */
db.createCollection("users", {
    validator: {
        $and: [{
            createDate: {
                $type: "date",
                $exists: true
            }
        }, {
            userId: {
                $type: "string",
                $exists: true
            }
        }, {
            password: {
                $type: "string",
                $exists: true
            }
        }, {
            role: {
                $type: "string",
                $exists: true
            }
        }, {
            token: {
                $type: "string",
                $exists: true
            }
        }, {
            validated: {
                $type: "bool",
                $exists: true
            }
        }, {
            person_id: {
                $type: "string",
                $exists: true
            }
        }, {
            auditDate: {
                $type: "date",
                $exists: true
            }
        }, {
            auditUser: {
                $type: "string",
                $exists: true
            }
        }, {
            messages: {
                $exists: true
            }
        }, {
            locations: {
                $exists: true
            }
        }, {
            addresses: {
                $exists: true
            }
        }]
    }
});
/* ### PERSON ### */
db.createCollection("people", {
    validator: {
        $and: [{
            createDate: {
                $type: "date",
                $exists: true
            }
        }, {
            firstName: {
                $type: "string",
                $exists: true
            }
        }, {
            lastName: {
                $type: "string",
                $exists: true
            }
        }, {
            gender: {
                $type: "string",
                $exists: true
            }
        }, {
            ageRange: {
                $type: "string",
                $exists: true
            }
        }, {
            avatar: {
                $type: "string",
                $exists: true
            }
        }, {
            profilePic: {
                $type: "string",
                $exists: true
            }
        }, {
            email: {
                $type: "string",
                $regex: "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
                $exists: true
            }
        }, {
            cellPhone: {
                $type: "string",
                $exists: true
            }
        }, {
            homePhone: {
                $type: "string",
                $exists: true
            }
        }, {
            workPhone: {
                $type: "string",
                $exists: true
            }
        }, {
            deviceId: {
                $type: "string",
                $exists: true
            }
        }, {
            androidPushId: {
                $type: "string",
                $exists: true
            }
        }, {
            _911: {
                $type: "bool",
                $exists: true
            }
        }, {
            displayName: {
                $type: "string",
                $exists: true
            }
        }, {
            fbOAuthToken: {
                $type: "string",
                $exists: true
            }
        }, {
            language: {
                $type: "string",
                $exists: true
            }
        }, {
            locale: {
                $type: "string",
                $exists: true
            }
        }, {
            problemText: {
                $type: "string",
                $exists: true
            }
        }, {
            trackMe: {
                $type: "bool",
                $exists: true
            }
        }, {
            trackMeFriend: {
                $type: "string",
                $exists: true
            }
        }, {
            auditDate: {
                $type: "date",
                $exists: true
            }
        }, {
            auditUser: {
                $type: "string",
                $exists: true
            }
        }]
    }
});
/* ### USER MESSAGE ### */
db.createCollection("users_messages", {
    validator: {
        $and: [{
            createDate: {
                $type: "date",
                $exists: true
            }
        }, {
            person_id: {
                $type: "string",
                $exists: true
            }
        }, {
            closed: {
                $type: "bool",
                $exists: true
            }
        }, {
            gotoView: {
                $type: "string",
                $exists: true
            }
        }, {
            messageBody: {
                $type: "string",
                $exists: true
            }
        }, {
            messageTitle: {
                $type: "string",
                $exists: true
            }
        }, {
            trashed: {
                $type: "bool",
                $exists: true
            }
        }, {
            auditDate: {
                $type: "date",
                $exists: true
            }
        }, {
            auditUser: {
                $type: "string",
                $exists: true
            }
        }]
    }
});
/* ### USER ADDRESS ### */
db.createCollection("users_addresses", {
    validator: {
        $and: [{
            createDate: {
                $type: "date",
                $exists: true
            }
        }, {
            person_id: {
                $type: "string",
                $exists: true
            }
        }, {
            type: {
                $type: "string",
                $exists: true
            }
        }, {
            poBoxNumber: {
                $type: "string"
            }
        }, {
            line1: {
                $type: "string",
                $exists: true
            }
        }, {
            line2: {
                $type: "string"
            }
        }, {
            line3: {
                $type: "string"
            }
        }, {
            city: {
                $type: "string",
                $exists: true
            }
        }, {
            province: {
                $type: "string",
                $exists: true
            }
        }, {
            state: {
                $type: "string"
            }
        }, {
            country: {
                $type: "string",
                $exists: true
            }
        }, {
            postalCode: {
                $type: "string",
                $exists: true
            }
        }, {
            auditDate: {
                $type: "date",
                $exists: true
            }
        }, {
            auditUser: {
                $type: "string",
                $exists: true
            }
        }]
    }
});
/* ### USER LOCATIONS ### */
db.createCollection("device_locations", {
    validator: {
        $and: [{
            createDate: {
                $type: "date",
                $exists: true
            }
        }, {
            deviceId: {
                $type: "string",
                $exists: true
            }
        }, {
            accuracy: {
                $type: "double",
                $exists: true
            }
        }, {
            altitude: {
                $type: "double",
                $exists: true
            }
        }, {
            latitude: {
                $type: "double",
                $exists: true
            }
        }, {
            longitude: {
                $type: "double",
                $exists: true
            }
        }, {
            auditDate: {
                $type: "date",
                $exists: true
            }
        }, {
            auditUser: {
                $type: "string",
                $exists: true
            }
        }]
    }
}); 
/* ### PAYMENTS ### */
db.createCollection("payments", {
    validator: {
        $and: [{
            createDate: {
                $type: "date",
                $exists: true
            }
        }, {
            amount_fee: {
                $type: "string",
                $exists: true
            }
        }, {
            amount_gross: {
                $type: "string",
                $exists: true
            }
        }, {
            amount_net: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_int1: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_int2: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_int3: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_int4: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_int5: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_str1: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_str2: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_str3: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_str4: {
                $type: "string",
                $exists: true
            }
        }, {
            custom_str5: {
                $type: "string",
                $exists: true
            }
        }, {
            email_address: {
                $type: "string",
                $exists: true
            }
        }, {
            item_description: {
                $type: "string",
                $exists: true
            }
        }, {
            item_name: {
                $type: "string",
                $exists: true
            }
        }, {
            m_payment_id: {
                $type: "string",
                $exists: true
            }
        }, {
            merchant_id: {
                $type: "string",
                $exists: true
            }
        }, {
            name_first: {
                $type: "string",
                $exists: true
            }
        }, {
            name_last: {
                $type: "string",
                $exists: true
            }
        }, {
            payment_status: {
                $type: "string",
                $exists: true
            }
        }, {
            pf_payment_id: {
                $type: "string",
                $exists: true
            }
        }, {
            signature: {
                $type: "string",
                $exists: true
            }
        }, {
            signatureValid: {
                $type: "bool",
                $exists: true
            }
        }, {
            person_id: {
                $type: "string",
                $exists: true
            }
        }, {
            auditDate: {
                $type: "date",
                $exists: true
            }
        }, {
            auditUser: {
                $type: "string",
                $exists: true
            }
        }]
    }
});
/* ### VOUCHERS ### */
db.createCollection("vouchers", {
    validator: {
        $and: [{
            createDate: {
                $type: "date",
                $exists: true
            }
        }, {
            description: {
                $type: "string",
                $exists: true
            }
        }, {
            reference: {
                $type: "string",
                $exists: true
            }
        }, {
            value: {
                $type: "double",
                $exists: true
            }
        }, {
            validationMethod: {
                $type: "string",
                $exists: true
            }
        }, {
            auditDate: {
                $type: "date",
                $exists: true
            }
        }, {
            auditUser: {
                $type: "string",
                $exists: true
            }
        }]
    }
});
/* ### CLAIMED VOUCHERS ### */
db.createCollection("vouchers_claimed", {
    validator: {
        $and: [{
            createDate: {
                $type: "date",
                $exists: true
            }
        }, {
            qrcode_id: {
                $type: "string",
                $exists: true
            }
        }, {
            person_id: {
                $type: "string",
                $exists: true
            }
        }, {
            auditDate: {
                $type: "date",
                $exists: true
            }
        }, {
            auditUser: {
                $type: "string",
                $exists: true
            }
        }]
    }
});
