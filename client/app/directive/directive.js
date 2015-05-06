'use strict';

angular.module('serveMeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('directive', {
        url: '/directive',
        templateUrl: 'app/directive/directive.html',
        controller: 'DirectiveCtrl'
      });
  });