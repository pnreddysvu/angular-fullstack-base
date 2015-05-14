'use strict';

angular.module('serveMeApp')
  .controller('ChartCtrl', function ($scope,charts) {
 
  	//Instantiate charts service
 	$scope.chart = new charts(['created','data1','data2','data3','data4','data5','data6'],'chart');

 	//assign chartObj to data model
 	$scope.chartobj = $scope.chart.chartObj;

 	// console.log("charts.chartObj is : ", $scope.chart.chartObj)

	
	// deploy function to directive here 
	$scope.graph  =  function () {
	   console.log("Graph will be rendered by this function")
	 };	 

  });
