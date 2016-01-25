'use strict';

/**
 * @ngdoc service
 * @name yeomanTestApp.userService
 * @description
 * # userService
 * Service in the yeomanTestApp.
 */
angular.module('yeomanTestApp')
  .service('userService',function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.sayHello= function(obj){
      console.log('call webservices ing .. ');
      return 'CLICK SERVICE';
      //or  return console.log('call webservices ing .. ');
    };

  });
