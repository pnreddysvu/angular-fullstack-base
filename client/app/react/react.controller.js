'use strict';

angular.module('serveMeApp')
  .controller('ReactCtrl', function ($scope) {

	// @@@@@@@@@@@@@@@@@@@ DATA SOURCES and Models @@@@@@@@@@@@@@@@@@@@@@@

    $scope.message = 'Hello';

    // ********** REACT Data source for angular controller to use through out the apps***********
    
    //ng-model being used for reactJs data Source
    $scope.framework    = 'ReactJs';
    $scope.data         = [];
    
    // Fill the data map with random data
    // for(var i = 0; i < 1500; ++i) {
    //   $scope.data[i] = {};
    //     for(var j = 0; j < 5; ++j) {
    //       $scope.data[i][j] = Math.random();
    //     }
    //  }
    
    // ********** REACT Data source for angular controller to use through out the apps***********

    // @@@@@@@@@@@@@@@@@@@ DATA SOURCES and Models @@@@@@@@@@@@@@@@@@@@@@@


	// **************** ReactClass defined here for mainDirective rendering this class ************
	  
    // ######## Example-1
    var MYAPP  = React.createClass({
     displayName : 'MYAPP',
     render      : function(){
       return React.DOM.div(null, "Rendering faster in AngularJs with ", this.props.framework);
     }
      });
    // ######## Example-2
    var MYLIST = React.createClass({
      displayName : 'MYLIST',
      render      : function() {
        var data = this.props.data;
        var rows = data.map(function(datum) {
          var clickHandler = function(ev){
            console.log("Still in reactJs");
            console.log(ev);
           }
          return (
              React.DOM.tr( {onClick:clickHandler},
              React.DOM.td(null, datum['0']),
              React.DOM.td(null, datum['1']),
              React.DOM.td(null, datum['2']),
              React.DOM.td(null, datum['3']),
              React.DOM.td(null, datum['4'])
             )
             );
           });
        return (
          React.DOM.table(null,
            rows
          )
        );
      }
     });

	// **************** ReactClass defined here for mainDirective rendering this class *************

  });
