'use strict';

describe('Controller: DetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('artistsApp'));

  // load BootstrapUI module
  beforeEach(module('ui.bootstrap'));

  var DetailsCtrl,
    scope,
    httpBackend,
    routeParams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend,
      $routeParams) {
    scope = $rootScope.$new();

    routeParams = {itemId: 7};

    httpBackend = $httpBackend;

    DetailsCtrl = $controller('DetailsCtrl as details', {
      $scope: scope,
      $routeParams: routeParams
    });

    httpBackend.whenGET('scripts/data.json').respond({items: 'lotta stuff'});
    httpBackend.flush();

  }));

  it('should set artists to data received', function () {
    expect(scope.details.artists).toEqual({
      items: 'lotta stuff'
    });
  });

  it('should set whichItem to current itemId', function() {
    expect(scope.details.whichItem).toEqual(7);
  });

  it('should set nextItem to next sequential number if it exists', function() {
    DetailsCtrl.getNextItem(1, ['first', 'second', 'third', 'fourth']);
    expect(scope.details.nextItem).toEqual(2);
  });

  it('should set nextItem to 0 if no more records exist', function() {
    DetailsCtrl.getNextItem(3, ['first', 'second', 'third', 'fourth']);
    expect(scope.details.nextItem).toEqual(0);
  });

  it('should set prevItem to previous number if it exists', function() {
    DetailsCtrl.getPrevItem(1, ['first', 'second', 'third', 'fourth']);
    expect(scope.details.prevItem).toEqual(0);
  });

  it('should set prevItem to the last record if already at 0', function() {
    DetailsCtrl.getPrevItem(0, ['first', 'second', 'third', 'fourth']);
    expect(scope.details.prevItem).toEqual(3);
  });
});
