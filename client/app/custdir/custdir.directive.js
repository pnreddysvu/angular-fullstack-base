'use strict';

angular.module('serveMeApp')
  .directive('custdir', function () {
    return {
      templateUrl: 'app/custdir/custdir.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

      	scope.dataArr = ['pencil','pen','school','home','fruit','job'] ;

      	console.log("element is : ", element);
      	console.log("each attrs is : ", attrs);

      	scope.changeDiv = function(){
      		element.hide();
      	 };

      }
    };
  });