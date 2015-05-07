'use strict';

describe('Directive: modalDisplay', function () {

  // load the directive's module and view
  beforeEach(module('serveMeApp'));
  beforeEach(module('app/directive/modalDisplay/modalDisplay.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<modal-display></modal-display>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the modalDisplay directive');
  }));
});