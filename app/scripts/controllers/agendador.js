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
    .controller('AgendadorCtrl', function (agendadorService) {

      var vm = this;

      vm.salvarEvento = salvarEvento;
      vm.salvarResponsavel = salvarResponsavel;
      //vm.editarEvento = editarEvento;
      //vm.excluirEvento = eventoEvento;

      /*vm.evento = {
        "nomeEvento": "",
        "dataEvento": "",
        "responsaveis": []
      };*/

      function salvarEvento(evento) {
        vm.eventos.push(evento);
      }

      function salvarResponsavel(evento, nomeResponsavel) {
        vm.evento.responsaveis = evento.responsaveis ? evento.responsaveis : [];
        vm.evento.responsaveis.push({
          "nomeResponsavel": nomeResponsavel
        });
      }
    });
})();