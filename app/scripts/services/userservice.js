'use strict';

/**
 * @ngdoc service
 * @name yeomanTestApp.userService
 * @description
 * # userService
 * Service in the yeomanTestApp.
 */
angular.module('yeomanTestApp')
  .service('userService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.sayHello= function(){
      console.log('call webservices ing .. ');
      //or  return console.log('call webservices ing .. ');
    };

  });
