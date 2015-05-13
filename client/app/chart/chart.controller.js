'use strict';

angular.module('serveMeApp')
  .controller('ChartCtrl', function ($scope,$http,$filter,socket,$timeout) {
 
 	var model = 'chart',
 		url  = '/api/charts/';

  	$scope.chartobj = [];

    $scope.chartobj[0]  = ["created"];
    $scope.chartobj[1]  = ["data1"];
	$scope.chartobj[2]  = ["data2"];
	$scope.chartobj[3]  = ["data3"];
	$scope.chartobj.update = ["update", 130, 340, 200, 500, 250, 350,120,80,200,140,50,210,170,100,250,150,70,300,180,120,280];

	//get graph data from models
	$http.get(url).success(function(res) {
	  	var duration = 0;

	    $scope.graphData = res;
	    $scope.graphData.forEach(function(data){
    	  //customize code here
	 
     	  $scope.chartobj[0].push($filter('date')(data.created, 'yyyy-MM-dd'));
    	  $scope.chartobj[1].push(data.data1);
    	  $scope.chartobj[2].push(data.data2);
    	  $scope.chartobj[3].push(data.data3);
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
