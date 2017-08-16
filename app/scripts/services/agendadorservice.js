'use strict';

/**
 * @ngdoc service
 * @name agendadorDeEventosApp.agendadorService
 * @description
 * # agendadorService
 * Service in the agendadorDeEventosApp.
 */
angular.module('agendadorDeEventosApp')
  .service('agendadorService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    this.listarEventos = listarEventos;

    function listarEventos(){
      return $http.get('../../mocks/listarEventos.json');
    }
  });
