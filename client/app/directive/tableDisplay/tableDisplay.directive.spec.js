'use strict';

describe('Directive: tableDisplay', function () {

  // load the directive's module and view
  beforeEach(module('serveMeApp'));
  beforeEach(module('app/directive/tableDisplay/tableDisplay.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<table-display></table-display>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the tableDisplay directive');
  }));
});