(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name agendadorDeEventosApp.controller:AgendadorCtrl
   * @description
   * # AgendadorCtrl
   * Controller of the agendadorDeEventosApp
   */
  angular
    .module('agendadorDeEventosApp')
    .controller('AgendadorCtrl', function (agendadorService, $scope) {

      $scope.eventos = [];

      $scope.salvarEvento = salvarEvento;
      $scope.salvarResponsavel = salvarResponsavel;
      $scope.limparCampos = limparCampos;
      $scope.ordenarPorNome = ordenarPorNome;

      //$scope.editarEvento = editarEvento;
      //$scope.excluirEvento = eventoEvento;

      /*$scope.evento = {
        "nomeEvento": "",
        "dataEvento": "",
        "responsaveis": []
      };*/

      function salvarEvento(evento) {
        $scope.eventos.push(evento);
        $scope.limparCampos();
        $scope.cadastroEvento.$setPristine();
      }

      function salvarResponsavel(evento, nomeResponsavel) {
        $scope.evento.responsaveis = evento.responsaveis ? evento.responsaveis : [];
        $scope.evento.responsaveis.push({
          "nomeResponsavel": nomeResponsavel
        });
      }
      
      function ordenarPorNome(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      }


      function limparCampos() {
        $scope.evento = "";
      }
    });
})();