/**
 * Created by sakthivel on 09-06-2014.
 */

var uidvalidation = {
    'response_status': Boolean,
    'response_message': String
};

exports.uidvalidation = function () {
    return uidvalidation;
};

var userregistration = {
    'user_uid': String,
    'user_email': String,
    'user_userid': String,
    'user_deviceudid': String,
    'user_regsourcetype': String,
    'user_reglocation': {
        'user_regl_latitude': Number,
        'user_regl_longitude': Number
    },
    'user_password': String,
    'user_profession': String,
    'user_callingsource': String,
    'user_sex': String,
    'user_dob': String,
    'user_status': String,
    'user_profileview': Boolean,
    'user_profilepic': String,
    'user_relationship': String,
    'user_education': [
        {
            'user_edu_school': String,
            'user_edu_year': Number
        }
    ],
    'user_work': {
        'user_work_profession': String,
        'user_work_workinfo': String
            [{
            'user_work_winfo_companyname': String,
            'user_work_winfo_year': String
        }]
    }
};

exports.userregistration = function(){
    return userregistration;
};

var userregistrationres = {
    'response_status': Boolean,
    'response_message': String,
    'user_uid' : Number
};


exports.userregistrationres = function(){
    return userregistrationres;
}