'use strict';

describe('Service: ArtistService', function () {

  // load the controller's module
  beforeEach(module('artistsApp'));

  var ArtistService,
    httpBackend,
    artists;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_ArtistService_, $httpBackend) {
    ArtistService = _ArtistService_;
    httpBackend = $httpBackend;
    artists = [
      {"name": "Kathy Bumb",
       "shortname": "KBomb",
       "age": 44,
       "reknown": "Cool Kat"
      },
      {"name": "John Classic",
       "shortname": "Johnny",
       "age": 22,
       "reknown": "Supersmart ninja coder dude"
      }
    ];
  }));

  it('should get the artists data', function () {
    httpBackend.whenGET('scripts/data.json').respond(artists);
    ArtistService.getArtists().success(function(data) {
      expect(data[0].age).toEqual(44);
      expect(data[1].shortname).toEqual("Johnny");
    });
    httpBackend.flush();
  });

});
