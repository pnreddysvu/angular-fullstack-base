'use strict';

angular.module('serveMeApp')
  .directive('charts', function () {
    return {
      templateUrl: 'app/directive/charts/charts.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });