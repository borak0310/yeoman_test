'use strict';

describe('Filter: yoFilter', function () {

  // load the filter's module
  beforeEach(module('yeomanTestApp'));

  // initialize a new instance of the filter before each test
  var yoFilter;
  beforeEach(inject(function ($filter) {
    yoFilter = $filter('yoFilter');
  }));

  it('should return the input prefixed with "yoFilter filter:"', function () {
    var text = 'angularjs';
    expect(yoFilter(text)).toBe('yoFilter filter: ' + text);
  });

});
