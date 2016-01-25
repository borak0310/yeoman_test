'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('UserCtrl', function ($scope, userService) {
    $scope.userTest = 'DEFAULT USER';
    $scope.rating = 5;

    //使用者星星
    $scope.users = [{username:'lewis',userRating:1},{username:'alex',userRating:2},{username:'pogi',userRating:3}];

    $scope.searchUser = function () {
      console.log('call webservices .. ');
      $scope.userTest = userService.sayHello();
      console.log('call webservices done .. ');
    }
  });
