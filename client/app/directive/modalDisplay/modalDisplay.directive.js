'use strict';

angular.module('serveMeApp')
  .directive('modalDisplay', function () {
    return {
      templateUrl: 'app/directive/modalDisplay/modalDisplay.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });