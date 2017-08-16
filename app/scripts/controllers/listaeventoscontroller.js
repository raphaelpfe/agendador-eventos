(function(){
'use strict';

/**
 * @ngdoc function
 * @name agendadorDeEventosApp.controller:ListaEventosController
 * @description
 * # ListaEventosController
 * Controller of the agendadorDeEventosApp
 */
angular.module('agendadorDeEventosApp')
  .controller('ListaEventosController', function (agendadorService) {
    
    var vm = this;

    activate(); 
    //teste de versão do git
    function activate(){
      vm.gridOptions = {
                data: [],
                /*saveFocus: false,
                saveScroll: true,
                saveGroupingExpandedStates: true,
                enableFiltering: true,
                enableSorting: true,
                enableGridMenu: true,
                enableColumnResizing: true,
                treeRowHeaderAlwaysVisible: false,
                paginationPageSizes: [10, 25, 50, 100],
                paginationPageSize: 10,
                useExternalPagination: true,
                enableRowSelection: true,
                enableFullRowSelection: true,
                enableRowHeaderSelection: false,
                multiSelect: false,
                showGridFooter:true,*/
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
                        width: '200',
                        enableFiltering: false
                    }, {
                        field: 'dataEvento',
                        displayName: "Data do Evento",
                        cellFilter: 'date',                        
                        width: '180',
                        enableFiltering: false
                    },
                    {
                        field: 'responsaveis',
                        displayName: "Responsáveis",  
                        cellTemplate: '<div class="text-center ui-grid-cell-contents"><button id="editBtn" type="button" ng-if="row.entity.responsaveis.length > 1" class="btn-small"><span class="glyphicon glyphicon-search"></span></button><span ng-if="row.entity.responsaveis.length === 1" >{{row.entity.responsaveis[0].nomeResponsavel}}</span></div>',
                        width: '180',
                        enableFiltering: false
                    }

                ]
            };
      
        
        agendadorService.listarEventos().then(
          function sucess(response){
            if (response.data.eventos){
              vm.gridOptions.data = response.data.eventos;
            }else{
              vm.gridOptions.data = [];
            }
          },
          function error(responseError) {
              console.log('erro na chamada da mensagem');
          }
        );


      /*agendadorService.listarResponsaveis().then(
        function sucess(response){
          if (response.data.responsaveis){
            vm.responsaveis = response.data.responsaveis;
          }else{
            vm.responsaveis = [];
          }
        },
        function error(responseError) {
            console.log('erro na chamada da mensagem');
        }
      );*/
    }

  });
})();