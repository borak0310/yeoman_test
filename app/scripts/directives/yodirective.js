'use strict';

/**
 * @ngdoc directive
 * @name yeomanTestApp.directive:yoDirective
 * @description
 *
 * 'A' – Attribute (You want to use your directive as <div rating>)
 * 'E' – Element (Use it as <rating>)
 * 'C' – Class. (Use it like <div class=”rating”>)
 * 'M' – Comment (Use it like <!– directive: rating –>
 *
 * # yoDirective
 */
angular.module('yeomanTestApp')
  .directive('yomandirect', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the yoDirective directive');
      }
    };
  })
  .directive("userRating", function () {
    return {
      restrict: "A",
      scope: {
        userRating: "=",
        username:"="
      },
      template: "<span ng-class='{positive : (userRating>2), negative: (userRating<=2) }'>{{username}}</span>",
      replace: true
    }
  })
  .directive('fundooRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating">' +
      '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
      '\u2605' +
      '</li></ul>',
      scope: {
        ratingValue: '=',
        max: '=',
        readonly: '@',
        onRatingSelected: '&'
      },
      link: function (scope) {
        scope.stars = [];
        var updateStars = function () {
          scope.stars = [];
          for (var i = 0; i < scope.max; i++) {
            scope.stars.push({filled: i < scope.ratingValue});
          }
        };

        //觸發按鈕
        scope.toggle = function (index) {
          if (scope.readonly && scope.readonly === 'true') {
            return;
          }
          scope.ratingValue = index + 1;
          scope.onRatingSelected({rating: index + 1});
        };

        //監控
        scope.$watch('ratingValue', function (oldVal, newVal) {
          if (newVal) {
            updateStars();
          }
        });
      }
    };
  });
