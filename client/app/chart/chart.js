'use strict';

angular.module('serveMeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chart', {
        url: '/chart',
        templateUrl: 'app/chart/chart.html',
        controller: 'ChartCtrl'
      });
  });