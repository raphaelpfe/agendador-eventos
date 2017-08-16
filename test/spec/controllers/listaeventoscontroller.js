'use strict';

describe('Controller: ListaeventoscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('agendadorDeEventosApp'));

  var ListaeventoscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaeventoscontrollerCtrl = $controller('ListaeventoscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListaeventoscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
