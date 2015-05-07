'use strict';

angular.module('serveMeApp')
  .directive('tableDisplay', function () {
    return {
      templateUrl: 'app/directive/tableDisplay/tableDisplay.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });