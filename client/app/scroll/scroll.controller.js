'use strict';

angular.module('serveMeApp')
  .controller('ScrollCtrl', function ($scope,dataSrv,socket,$http,uiGridConstants,$interval, $q) {
   
   $scope.reddit = new dataSrv();

    var data= [];

    var fakeI18n = function( title ){
    var deferred = $q.defer();
      $interval( function() {
        deferred.resolve( 'col: ' + title );
      }, 1000, 1);
      return deferred.promise;
    };


   $scope.gridOptions = {
      showGridFooter: true,
      showColumnFooter: true,
      enableFiltering: true,
      exporterMenuCsv: true,
      enableGridMenu: true,
      enableSorting: true,
      gridMenuTitleFilter: fakeI18n,
      data:data,
      importerDataAddCallback: function ( grid, newObjects ) {
        $scope.data = $scope.data.concat( newObjects );
      },
      columnDefs:[
        {field:'goalName',width:'10%',
          headerCellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
              if (col.sort.direction === uiGridConstants.ASC) {
                return 'red';
              }
        }},
        {field:'goalDesc',cellTooltip: true,width:'15%'},
        {field:'isTodo',width:'8%',cellTooltip: 
        function( row, col ) {
          return 'field: ' + row.entity.field + ' isTodo: ' + row.entity.isTodo;
        } },
        {field:'isFav',width:'8%'},
        {field:'latitude',width:'10%'},
        {field:'longitude',width:'10%'},
        {field:'taskProgress',width:'8%'},
        {field:'created',width:'20%'},
        {field:'created_by',width:'20%'},
        {field:'goal_completed',width:'20%'},
        {field:'isActive',width:'5%'}
        ],
        gridMenuCustomItems: [
          {
            title: 'Rotate Grid',
            action: function ($event) {
              this.grid.element.toggleClass('rotated');
            },
            order: 210
          }
      ],
      onRegisterApi: function(gridApi) {
        $scope.gridApi = gridApi;
        var cellTemplate = 'ui-grid/selectionRowHeader';   // you could use your own template here
        // $scope.gridApi.core.addRowHeaderColumn( { name: 'rowHeaderCol', displayName: '', width: 30, cellTemplate: cellTemplate} );
        $scope.gridApi.core.on.sortChanged( $scope, function( grid, sort ) {
          $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.COLUMN );
        })
        // interval of zero just to allow the directive to have initialized
        $interval( function() {
          gridApi.core.addToGridMenu( gridApi.grid, [{ title: 'Dynamic item', order: 100}]);
        }, 0, 1);
      
        gridApi.core.on.columnVisibilityChanged( $scope, function( changedColumn ){
          $scope.columnChanged = { field: changedColumn.colDef.name, visible: changedColumn.colDef.visible };
        });
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
