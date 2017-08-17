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
        agendadorService.listarResponsaveis().then(
        function sucess(response){
          if (response.data.eventos){
            for (var evento in response.data.eventos) {
              vm.responsaveis = response.data.eventos[evento].responsaveis                              
            }
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