'use strict';

angular.module('serveMeApp')
  .controller('ScrollCtrl', function ($scope,socket,$http) {
   
   $scope.dataArr = '';

   //UI-GRID Implementation

   $http.get("/api/scrolls/").success(function(data){
   		$scope.dataArr = data
   		socket.syncUpdates('scroll',$scope.dataArr)
   		console.log('data', data)
   	});

   $scope.columnDefs = [
    {name:'goalName'},
    {name:'goalDesc'},
    {name:'isTodo'},
    {name:'isFav'},
    {name:'latitude'},
    {name:'longitude'},
    {name:'taskProgress'},
    {name:'created'},
    {name:'created_by'},
    {name:'goal_completed'},
    {name:'isActive'}
   ];
 
  });
