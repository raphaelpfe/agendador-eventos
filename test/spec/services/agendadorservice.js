'use strict';

describe('Service: agendadorService', function () {

  // load the service's module
  beforeEach(module('agendadorDeEventosApp'));

  // instantiate service
  var agendadorService;
  beforeEach(inject(function (_agendadorService_) {
    agendadorService = _agendadorService_;
  }));

  it('should do something', function () {
    expect(!!agendadorService).toBe(true);
  });

});
