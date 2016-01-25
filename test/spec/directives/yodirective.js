'use strict';

describe('Directive: yoDirective', function () {

  // load the directive's module
  beforeEach(module('yeomanTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<yo-directive></yo-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the yoDirective directive');
  }));
});
