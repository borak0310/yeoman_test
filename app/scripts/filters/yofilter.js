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
  .filter('yofilter', function () {
    return function (number) {
      // Ensure that the passed in data is a number
      if (isNaN(number) || number < 1) {
        // If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
        return number;
      } else {
        // If the data we are applying the filter to is a number, perform the actions to check it's ordinal suffix and apply it.
        var lastDigit = number % 10;
        if (lastDigit === 1) {
          return number + 'st'
        } else if (lastDigit === 2) {
          return number + 'nd'
        } else if (lastDigit === 3) {
          return number + 'rd'
        } else if (lastDigit > 3) {
          return number + 'th'
        }
      }
    };
  })
  .filter('filterage', function () {
    return function (input,keyObj) {
      console.log(keyObj.selectfilter);
      var out = [];
      angular.forEach(input, function (obj) {

        console.log(obj.name == keyObj.filterText ||  obj.age == keyObj.filterTex);
        if(keyObj.selectfilter == 'selUserName' && obj.name == keyObj.filterText){
          console.log('search name');
          out.push(obj)
        }else if(keyObj.selectfilter == 'selAge' && obj.age == keyObj.filterText){
          console.log('search age');
          out.push(obj);
        }else if(keyObj.selectfilter == "all" ){
          console.log('search all');
          out.push(obj);
        }
      })
      return out;
    }
  })
