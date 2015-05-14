'use strict';

angular.module('serveMeApp')
  .factory('charts', function ($http,$filter,socket,$timeout) {
    
    var Chart = function (names,models) {
      this.chartObj = [];
      this.names = names;
      this.model = models;
      this.data();
      this.api();
     } ;
    

    Chart.prototype.api  = function() {
      var table = this.model+'s',
          url   = "/api/"+table ;

      //get data from api    
      $http.get(url).success(function(res){
        var graphData = res;
        // console.log("graphData", graphData)
         
        for (var i = 0;i<this.chartObj.length;i++){
          for (var j = 0;j<graphData.length;j++){
            // console.log("each chartObj is ",this.chartObj[i]);
            // console.log("Graph Data for Each chartObj is ",graphData[j]);
            if(this.chartObj[i][0] == 'created' ){
              this.chartObj[i].push($filter('date')(graphData[j]['created'], 'yyyy-MM-dd'));
            }else{
              // console.log("push others here")
               this.chartObj[i].push(graphData[j][this.chartObj[i][0]])
            }
            

          }

        }
        // socket.syncUpdates(model, this.chartObj);
       }.bind(this));
     };
    Chart.prototype.data = function() {
      console.log("this.names",this.names)
        for (var i =0;i<this.names.length;i++){
          this.chartObj[i] = [this.names[i]]
        }
     };

    // Public API here
    return Chart;
  });
