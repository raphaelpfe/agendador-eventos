(function(){
'use strict';


/**
 * @ngdoc function
 * @name agendadorDeEventosApp.controller:ResponsaveisController
 * @description
 * # ResponsaveisController
 * Controller of the agendadorDeEventosApp
 */
angular.module('agendadorDeEventosApp')
  .controller('ResponsaveisController', function (agendadorService) {

    var vm = this;
    vm.responsaveis = [];

    activate(); 

    function activate(){
      agendadorService.listarEventos().then(
          function sucess(response){
            if (response.data.eventos.responsaveis){
              vm.responsaveis = response.data.eventos.responsaveis;
            }else{
              vm.responsaveis = [];
            }
          },
          function error(responseError) {
              console.log('erro na chamada da mensagem');
          }
        );
    }
    
  });
})();