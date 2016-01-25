'use strict';

describe('Controller: FilterctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTestApp'));

  var FilterctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilterctrlCtrl = $controller('FilterctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
