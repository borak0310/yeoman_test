'use strict';

/**
 * @ngdoc filter
 * @name yeomanTestApp.filter:yoFilter
 * @function
 * @description
 * # yoFilter
 * Filter in the yeomanTestApp.
 */
angular.module('yeomanTestApp')
  .filter('yoFilter', function () {
    return function (input) {
      return 'yoFilter filter: ' + input;
    };
  });
