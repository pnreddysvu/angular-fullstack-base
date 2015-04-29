'use strict';

angular.module('serveMeApp')
  .controller('ScrollCtrl', function ($scope,dataSrv,socket,$http,uiGridConstants) {
   
   $scope.reddit = new dataSrv();

    var data= [];


   $scope.gridOptions = {
      showGridFooter: true,
      showColumnFooter: true,
      enableFiltering: true,
      data:data,
      columnDefs:[
        {field:'goalName',
          headerCellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
              if (col.sort.direction === uiGridConstants.ASC) {
                return 'red';
              }
        }},
        {field:'goalDesc',cellTooltip: true},
        {field:'isTodo',cellTooltip: 
        function( row, col ) {
          return 'field: ' + row.entity.field + ' isTodo: ' + row.entity.isTodo;
        } },
        {field:'isFav'},
        {field:'latitude'},
        {field:'longitude'},
        {field:'taskProgress'},
        {field:'created'},
        {field:'created_by'},
        {field:'goal_completed'},
        {field:'isActive'}
        ],
      onRegisterApi: function(gridApi) {
        $scope.gridApi = gridApi;
        var cellTemplate = 'ui-grid/selectionRowHeader';   // you could use your own template here
        $scope.gridApi.core.addRowHeaderColumn( { name: 'rowHeaderCol', displayName: '', width: 30, cellTemplate: cellTemplate} );
        $scope.gridApi.core.on.sortChanged( $scope, function( grid, sort ) {
          $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.COLUMN );
        })
      }
    };

      $scope.remove = function() {
        $scope.gridOptions.columnDefs.splice($scope.gridOptions.columnDefs.length-1, 1);
      }
      
      $scope.add = function() {
        $scope.gridOptions.columnDefs.push({ field:'goalName', enableSorting: false });
      }
     
      $scope.splice = function() {
        $scope.gridOptions.columnDefs.splice(1, 0, { field: 'company', enableSorting: false });
      }
     
      $scope.unsplice = function() {
        $scope.gridOptions.columnDefs.splice(1, 1);
      }

     //UI-GRID Implementation

   $http.get("/api/scrolls/").success(function(data){
        data.forEach( function(row) {
          row.registered = Date.parse(row.registered);
        });
      $scope.gridOptions.data = data;
       socket.syncUpdates('scroll',$scope.gridOptions.data)
      console.log('data', data)
    });
 
  });
