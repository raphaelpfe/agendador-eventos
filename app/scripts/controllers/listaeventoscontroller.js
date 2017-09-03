(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name agendadorDeEventosApp.controller:ListaEventosController
   * @description
   * # ListaEventosController
   * Controller of the agendadorDeEventosApp
   */
  angular.module('agendadorDeEventosApp')
    .controller('ListaEventosController', function (agendadorService, $uibModal, $scope, $rootScope, $location, $timeout) {   
      $rootScope.activetab = $location.path();

      function activate() {
        $scope.isSaved = false;
        $scope.name = 'ListaEventos';

        $scope.gridOptions = {
          data: [],
          saveFocus: false,
          saveScroll: true,
          saveGroupingExpandedStates: false,
          enableFiltering: false,
          enableSorting: false,
          enableGridMenu: false,
          enableColumnResizing: false,
          treeRowHeaderAlwaysVisible: false,
          paginationPageSizes: [10, 25, 50, 100],
          paginationPageSize: 10,
          useExternalPagination: false,
          enableRowSelection: true,
          enableFullRowSelection: true,
          enableRowHeaderSelection: false,
          multiSelect: false,
          showGridFooter: false,
          onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            
            gridApi.selection.on.rowSelectionChanged($scope,function (row) {
              $scope.isSaved = false;
              $uibModal.open({
                templateUrl: 'views/responsaveis.html',
                controller: 'ResponsaveisController',
                size: 'lg',
                resolve: {
                  entity: row.entity
                }
              }).result.then(function (ret) {
                row.entity = ret;
                $scope.isSaved = true;
              });
            });
          },
          columnDefs: [
            /*{
                field: 'numeroEvento',
                displayName: "Nª do sinistro",
                //cellTemplate: '<div class="text-center ui-grid-cell-contents"><a href ng-click="grid.appScope.abrirAtividade(row)">{{COL_FIELD}}</a></div>',
                width: '150'
            },*/
            {
              field: 'nomeEvento',
              displayName: "Nome do Evento",
              width: '50%',
              enableFiltering: false
            }, {
              field: 'dataEvento',
              displayName: "Data do Evento",
              cellFilter: 'date',              
              width: '50%',
              enableFiltering: true
            },
            /*{
              field: 'responsaveis',
              displayName: "Responsáveis",
              cellTemplate: '<div class="text-center ui-grid-cell-contents"><button id="editBtn" type="button" ng-if="row.entity.responsaveis.length > 1" class="btn-small" ng-click="showResponsaveisModal()"><span class="glyphicon glyphicon-search"></span></button><span ng-if="row.entity.responsaveis.length === 1" >{{row.entity.responsaveis[0].nomeResponsavel}}</span></div>',
              width: '180',
              enableFiltering: false
            }*/

          ]
        };

        agendadorService.listarEventos().then(
          function sucess(response) {
            if (response.data.eventos) {
              $scope.gridOptions.data = response.data.eventos;
            } else {
              $scope.gridOptions.data = [];
            }
          },
          function error(responseError) {
            console.log('erro na chamada da mensagem');
          }
        );

        /*agendadorService.listarResponsaveis().then(
          function sucess(response){
            if (response.data.responsaveis){
              $scope.responsaveis = response.data.responsaveis;
            }else{
              $scope.responsaveis = [];
            }
          },
          function error(responseError) {
              console.log('erro na chamada da mensagem');
          }
        );*/
      }

    activate();
    });
})();