'use strict';

angular.module('serveMeApp')
  .directive('main', function () {
    return {
      templateUrl: 'app/main/main.html',
      restrict: 'EA',
      scope:{
        framework:'='
      },
      link: function (scope, element, attrs) {
      	scope.$watch('framework', function(newValue, oldValue){
            React.renderComponent(
              MYAPP({framework:newValue}),
              el[0]
            );
        })
      }
    };
  });