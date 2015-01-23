// 'use strict';

angular.module('serveMeApp')
  .controller('MainCtrl', function ($scope, $http, socket, $location, $anchorScroll) {
    
  // @@@@@@@@@@@@@@@@@@@ DATA SOURCES and Models @@@@@@@@@@@@@@@@@@@@@@@
    
    $scope.awesomeThings = [];

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


  // ########## API CALLS and Promises #################
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
      });
    
    // Functions interating with api calls and rendering pages
    $scope.addThing    = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
      };
    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
     };

  // ########## API CALLS and Promises #################
   

  // **************** ReactClass defined here for mainDirective rendering this class ************
  
    // ######## Example-1
    var MYAPP  = React.createClass({
     displayName : 'MYAPP',
     render      : function(){
       return React.DOM.div(null, "Rendering faster in AngularJs with ", this.props.framework);
     }
      });
    // ######## Example-2
    // var MYLIST = React.createClass({
    //   displayName : 'MYLIST',
    //   render      : function() {
    //     var data = this.props.data;
    //     var rows = data.map(function(datum) {
    //       var clickHandler = function(ev){
    //         console.log("Still in reactJs");
    //         console.log(ev);
    //        }
    //       return (
    //           React.DOM.tr( {onClick:clickHandler},
    //           React.DOM.td(null, datum['0']),
    //           React.DOM.td(null, datum['1']),
    //           React.DOM.td(null, datum['2']),
    //           React.DOM.td(null, datum['3']),
    //           React.DOM.td(null, datum['4'])
    //          )
    //          );
    //        });
    //     return (
    //       React.DOM.table(null,
    //         rows
    //       )
    //     );
    //   }
    //  });

  // **************** ReactClass defined here for mainDirective rendering this class *************


  // scroll to feature included for SPA App
  $scope.scrollTo    = function(id) {
      $location.hash(id);
      $anchorScroll();
      };

  // ########## Event Controls with socketio #########
  $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
      });
  
  });

  

