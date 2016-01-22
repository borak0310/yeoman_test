'use strict';

/**
 * @ngdoc service
 * @name yeomanTestApp.contactService
 * @description
 * # contactService
 * Factory in the yeomanTestApp.
 */
angular.module('yeomanTestApp')
  .factory('contactService',['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
    // Service logic
    var meaningOfLife = 42;
    // Public API here
    return {
      getData: function () {
        var url = "https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=X-MAN";
        return $http({
          method: 'JSONP',
          url: url
        });
      }
    };
  }]);
