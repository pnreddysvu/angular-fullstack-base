'use strict';

describe('Directive: main', function () {

  // load the directive's module and view
  beforeEach(module('serveMeApp'));
  beforeEach(module('app/main/main.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main></main>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the main directive');
  }));
});