'use strict';

angular.module('serveMeApp')
  .controller('ChartCtrl', function ($scope,$http,$filter,socket,$timeout) {
 
 	var model = 'chart',
 		url  = '/api/charts/';

  	$scope.chartobj = ['data1','data2','data3'];

    $scope.chartobj.data1  = ["created"];
	$scope.chartobj.data2  = ["goal_completed"];
	$scope.chartobj.data3  = ["goal"];

	//get graph data from models
	$http.get(url).success(function(res) {
	  	var duration = 0;

	    $scope.graphData = res;
	    $scope.graphData.forEach(function(data){
    	  //customize code here
	      duration = data.goal_completed - data.created
     	  $scope.chartobj.data1.push($filter('date')(data.created, 'yyyy-MM-dd'));
    	  $scope.chartobj.data2.push($filter('date')(data.goal_completed, 'yyyy-MM-dd'));
    	  $scope.chartobj.data3.push(data.goalName);
	    });
		
		socket.syncUpdates(model, $scope.graphData);
	   
	   });

	$timeout(function(){
		console.log($scope.chartobj)
	 },300);
	
	// deploy function to directive here 
	$scope.graph  =  function () {
	   console.log("Graph will be rendered by this function")
	 };	 

  });
