'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:FilterctrlCtrl
 * @description
 * # FilterctrlCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('FilterctrlCtrl', ['$scope', function ($scope) {
    $scope.searchDataFilter = {selectFilter:"",filterText:""};
    $scope.objs = [
      {
        name: 'Lewis',
        age: 18,
        hobbies: ['eat', 'sleep']
      },
      {
        name: 'Alex',
        age: 18,
        hobbies: ['work']
      },
      {
        name: 'Pogi',
        age: 40,
        hobbies: ['work']
      }];
  }
  ]);
