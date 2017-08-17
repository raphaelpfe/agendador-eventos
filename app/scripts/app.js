'use strict';

/**
 * @ngdoc overview
 * @name agendadorDeEventosApp
 * @description
 * # agendadorDeEventosApp
 *
 * Main module of the application.
 */
angular
  .module('agendadorDeEventosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.bootstrap',
	  'ui.utils.masks'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
       .when('/agendador', {
        templateUrl: 'views/agendador.html',
        controller: 'AgendadorCtrl',
        controllerAs: 'agendador'
      })
      .when('/listaeventos', {
        templateUrl: 'views/listaeventos.html',
        controller: 'ListaEventosController',
        controllerAs: 'listaEventosCtrl'
      })
      .when('/responsaveis', {
        templateUrl: 'views/responsaveis.html',
        controller: 'ResponsaveisController',
        controllerAs: 'responsaveisCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
