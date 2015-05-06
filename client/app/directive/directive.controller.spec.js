'use strict';

describe('Controller: DirectiveCtrl', function () {

  // load the controller's module
  beforeEach(module('serveMeApp'));

  var DirectiveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectiveCtrl = $controller('DirectiveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
