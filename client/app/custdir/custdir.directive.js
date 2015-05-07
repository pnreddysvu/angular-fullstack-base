'use strict';

angular.module('serveMeApp')
  .directive('custdir', function (dataSrv,$q,$timeout,$log) {
    return {
      templateUrl: 'app/custdir/custdir.html',
      restrict: 'EA',
      scope:{
        userData : '=model'
      },
      link: function (scope, element, attrs) {

        scope.okGreet  = function(name){
          if (name == "rumman"){
            return true;
          }else{
            return false;
          }
         };

        scope.reddit     = new dataSrv();

      	scope.dataArr = ['pencil','pen','school','home','fruit','job'] ;

      	console.log("element is : ", element);
      	console.log("each attrs is : ", attrs);

        scope.deferedtest =  function (name) {
          var deferred = $q.defer();

          $timeout(function(){
            deferred.notify("About to greet  "+ name);
            if(scope.okGreet(name)){
              deferred.resolve("hello " +  name);
            }else{
              deferred.reject("Greeting " + name + " is not allowed");
            }
          },1000)

          return deferred.promise;
         };

        var promise = scope.deferedtest("rumman");

        promise.then(function(greeting){
          $log.info("Success " + greeting);
        },
        function(reason){
          $log.error("Failed " + reason);
        }),
        function(update){
          $log.warn("Got notification " + update);
        } 

      	scope.changeDiv = function(){
      		element.hide();
      	 };

      }
    };
  });