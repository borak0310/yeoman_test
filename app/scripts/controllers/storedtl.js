'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:StoredtlCtrl
 * @description
 * # StoredtlCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('StoredtlCtrl', function ($scope, $routeParams, $http) {
    var param = {
      storeId: $routeParams.input
    };
    $scope.storeDtl = {};
    var promise = $http.post('http://localhost:8080/restful-server/getStoreDetl', JSON.stringify(param));

    promise.then(
      function (payload) {
        $scope.storeDtl = payload.data;
      });

  });
