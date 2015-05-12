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
				scope.update(scope.chartData.date,scope.chartData.data1,scope.chartData.data2,scope.chartData.data3);
				console.log("updating graph ...")
			});

		//update function defination
		scope.update = function (date,data1,data2,data3) {
			scope.apiChart.load({
				    columns:[
				    	date,
				    	data1,
				    	data2,
					    data3
				    	],
				    types:{
						data2:'line' //Add
					}		  
			 });
		 };

		//C3 generate the graph for the first time on page on page load
		scope.draw =  function (date,data1,data2,data3) {
			//On Page load run
			setTimeout(function(){
				console.log(data3)
				// By using load() API, you can load data and update the chart dynamically as follows:
				// *****************Generate chart without data********************
				scope.apiChart = c3.generate({
					bindto:'#apiChart',
					data:{
						x:date[0],
					    columns:[
					    	date,
					    	data1,
					    	data2,
						    data3
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
		scope.loadData = function(update){
		  console.log(update)
		  setTimeout(function(){
		  	scope.apiChart.load({
			 columns: [
		        update
		       ],
			 type:'line'
		    })
		  },500)
		  
		  };


	   }
    };
  });