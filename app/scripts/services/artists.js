(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name artistsApp.service:artistService
   * @description
   * # ArtistService
   *
   * # Service for getting artist data
   * @ngInject
   */
  function ArtistService($http) {

    this.getArtists = function() {
      return $http.get('scripts/data.json');
    };
  }

  angular
    .module('artistsApp')
    .service('ArtistService', ArtistService);

})();
