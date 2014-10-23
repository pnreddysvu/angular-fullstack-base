'use strict';

describe('Controller: NgreactCtrl', function () {

  // load the controller's module
  beforeEach(module('serveMeApp'));

  var NgreactCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgreactCtrl = $controller('NgreactCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
