'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:FilterctrlCtrl
 * @description
 * # FilterctrlCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('FilterctrlCtrl', function ($scope) {
    $scope.obj = [{
      name: 'Lewis',
      age: 18,
      hobbies: [ 'eat', 'sleep']
    },
    {
      name: 'Alex',
      age: 18,
      hobbies: [ 'work']
    }];


  });
