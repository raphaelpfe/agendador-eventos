'use strict';

describe('Controller: ResponsaveiscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('agendadorDeEventosApp'));

  var ResponsaveiscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResponsaveiscontrollerCtrl = $controller('ResponsaveiscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResponsaveiscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
