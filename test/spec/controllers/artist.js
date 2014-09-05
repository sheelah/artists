'use strict';

describe('Controller: ArtistCtrl', function () {

  // load the controller's module
  beforeEach(module('artistsApp'));

  var ArtistCtrl,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();

    httpBackend = $httpBackend;

    ArtistCtrl = $controller('ArtistCtrl as artist', {
      $scope: scope
    });

    httpBackend.whenGET('scripts/data.json').respond({items: 'lotta stuff'});
    httpBackend.flush();
  }));

  it('should initially set artistOrder to "name"', function () {
    expect(scope.artist.artistOrder).toEqual('name');
  });

  it('should initially set filterResults to "true"', function () {
    expect(scope.artist.filterArtists).toEqual(true);
  });

  it('should set artists to data received', function () {
    expect(scope.artist.artists).toEqual({
      items: 'lotta stuff'
    });
  });

  it('should set filterResults when changeFiltering() is called', function () {
    scope.artist.changeFiltering(false);
    expect(scope.artist.filterArtists).toEqual(false);
  });
});
