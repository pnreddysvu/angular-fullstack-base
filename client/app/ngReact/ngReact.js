'use strict';

angular.module('serveMeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ngReact', {
        url: '/ngReact',
        templateUrl: 'app/ngReact/ngReact.html',
        controller: 'NgreactCtrl'
      });
  });