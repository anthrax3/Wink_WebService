/**
 * Created by sakthivel on 10-06-2014.
 */
var GetValues = require( './curd.js' );

exports.users = function ( reqdata, insertdata ) {
    insertdata._id = new _gObjectID();
    
    //async.series([
    insertdata.user_profession =  GetValues.GetProfessionId( reqdata.user_profession[0] );
    insertdata.user_sex = GetValues.GetSex( reqdata.user_sex );
    insertdata.user_relationship = GetValues.GetRelation( reqdata.user_relationship );
    insertdata.user_work.user_work_profession = GetValues.GetProfessionId( reqdata.user_work.user_work_profession );
    insertdata.user_profilepicurl = GetValues.GetProfilePicUrl( reqdata.user_userid );
    //]);

    insertdata.user_email = reqdata.user_email;
    insertdata.user_userid = reqdata.user_userid;
    insertdata.user_deviceudid = reqdata.user_deviceudid;
    insertdata.user_regsourcetype = reqdata.user_regsourcetype;
    insertdata.user_reglocation = reqdata.user_reglocation;
    insertdata.user_password = reqdata.user_password;
    insertdata.user_dob = reqdata.user_dob;
    insertdata.user_status = reqdata.user_status;
    insertdata.user_profileview = reqdata.user_profileview;
    insertdata.user_profilepic = reqdata.user_profilepic;
    insertdata.user_education = reqdata.user_education;
    insertdata.user_work.user_work_workinfo = reqdata.user_work.user_work_workinfo;
    insertdata.user_map_currentlocation = reqdata.user_map_currentlocation;
    insertdata.user_deleted = null;
    insertdata.user_confirmationcode = null;
    insertdata.user_maponlinestatus = null;
    insertdata.user_mapsharelocation = null;
    return insertdata;
};