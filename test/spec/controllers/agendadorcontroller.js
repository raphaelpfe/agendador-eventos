'use strict';

describe('Controller: AgendadorcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('agendadorDeEventosApp'));

  var AgendadorcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgendadorcontrollerCtrl = $controller('AgendadorcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgendadorcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
