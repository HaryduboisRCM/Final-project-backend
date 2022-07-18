
const mongoose = require('mongoose');

module.exports.Urls = {
    simple:{
        "/":[""],
        '/users/':["login"],
    },
    auth:{
        //Graduate
        '/TDA/': ['get', 'update'],

        //TDA admin
        '/TDA/': ['post' , 'delete' , 'get', 'update'],
        // '/teacher/':["add-teacher","delete-teacher","edit-teacher"],
        // '/student/':["add-student","delete-student","edit-student","test-result"],

         //Employer
         '/TDA/': ['get'],
        
        //user
        // '/test/':["view-test","submit-test"],
        // '/profile/': ['change-username', 'update-profile-data',  'set-new-password', 'upload-pic', 'update-social-links'],
        // '/teacher/':['load-teacher'],
        // '/student/':['load-student']

    }
}