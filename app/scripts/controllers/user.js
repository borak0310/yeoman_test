'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('UserCtrl', function ($scope,userService) {
    $scope.searchUser = function () {
      console.log('call webservices .. ');
      userService.sayHello();
      console.log('call webservices done .. ');
    }
  });
