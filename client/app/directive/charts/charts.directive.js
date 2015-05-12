'use strict';

angular.module('serveMeApp')
  .directive('charts', function (socket) {
    return {
      templateUrl: 'app/directive/charts/charts.html',
      restrict: 'EA',
      scope:{
      	chartData :"=",
      	render:"&chartFunc"
      },
      link: function (scope, element, attrs) {

		//Socket to update graph on data change
		socket.socket.on('updateGraph',function(data){
			// By using load() API, you can load data and update the chart dynamically as follows:
			// *****************Generate chart without data********************
				scope.update('',scope.chartdata.data1,'goal',scope.chartdata.data3);
				console.log("updating graph ...")
			});

		//update function defination
		scope.update = function (name1,data1,name3,data3) {
			scope.apiChart.load({
				    columns:[
				    	data1,
					    	[name3,data3],
					    	['data1', 13, 34, 20, 50, 25, 35,34, 20, 50, 25, 35,22,32,12],
					    	['data2', 34, 20, 50, 25, 35,53, 74, 60, 90, 15, 85,45,13,22]
				    	],
				    types:{
						data2:'line' //Add
					}		  
			 });
		 };

		//C3 generate the graph for the first time on page on page load
		scope.draw =  function (xid,data1,name3,data3) {
			//On Page load run
			setTimeout(function(){
				// By using load() API, you can load data and update the chart dynamically as follows:
				// *****************Generate chart without data********************
				scope.apiChart = c3.generate({
					bindto:'#apiChart',
					data:{
						x:xid,
					    columns:[
					    	data1,
						    	[name3,data3],
						    	['data2', 340, 200, 500, 250, 350,530, 740, 600, 900, 150, 850,456,123,222]
					    	]
					},
					axis: {
						x:{
				        	type: 'timeseries',
				        	tick: {
				            	format: '%Y-%m-%d'
				        	}
				        }
				    }    
				 });
			   },100)
		 }
		
		

		  // ************Load Data **************************

		// run load function on click 
		scope.loadData = function(name1,data1){
		   // alert(scope.chartData.data1)
		  scope.apiChart.load({
			 columns: [
		        name1,data1
		       ],
			 types:{
					data1:'bar' //Add
				}	
		    })
		  };


	   }
    };
  });