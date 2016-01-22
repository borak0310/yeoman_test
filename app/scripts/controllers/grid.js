'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('GridCtrl', function ($scope, $filter, NgTableParams) {
    var data = [
      {name: "Moroni", age: 50},
      {name: "Tiancum", age: 43},
      {name: "Jacob", age: 27},
      {name: "Nephi", age: 29},
      {name: "Enos", age: 34},
      {name: "Tiancum", age: 43},
      {name: "Jacob", age: 27},
      {name: "Nephi", age: 29},
      {name: "Enos", age: 34},
      {name: "Tiancum", age: 43},
      {name: "Jacob", age: 27},
      {name: "Nephi", age: 29},
      {name: "Enos", age: 34},
      {name: "Tiancum", age: 43},
      {name: "Jacob", age: 27},
      {name: "Nephi", age: 29},
      {name: "Enos", age: 34}
    ];
    $scope.data = data;

    $scope.removeFilters = function () {
      $scope.filters = {name: false, age: false};
    };

    $scope.addFilters = function () {
      $scope.filters = {
        name: {
          'name': 'text'
        },
        age: {
          'age': 'number'
        }
      };
    };

    $scope.tableParams = new NgTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      filter: {
        //name: 'M'       // initial filter
      },
      sorting: {
        //name: 'asc'     // initial sorting
      }
    }, {
      filterOptions: {filterDelay: 0},
      total: data.length, // length of data
      getData: function ($defer, params) {
        // use built-in angular filter
        var filteredData = params.filter() ?
          $filter('filter')(data, params.filter()) :
          data;
        var orderedData = params.sorting() ?
          $filter('orderBy')(filteredData, params.orderBy()) :
          data;
        params.total(orderedData.length); // set total for recalc pagination
        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });
  });
