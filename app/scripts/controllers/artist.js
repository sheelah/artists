(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name artistsApp.controller:ArtistCtrl
   * @description
   * # ArtistCtrl
   *
   * Controller for list functionality
   * @ngInject
   */
  function ArtistCtrl($scope, $http, ArtistService) {
    var _this = this;

    _this.artistOrder = 'name';

    _this.filterArtists = true;

    ArtistService.getArtists().success(function(data) {
      _this.artists = data;
    });
  }

  ArtistCtrl.prototype.changeFiltering = function(toggleVal) {
    if (toggleVal === true) {
      this.filterArtists = true;
    } else {
      // Turn off filtering
      this.filterArtists = false;
    }
  }

  angular
    .module('artistsApp')
    .controller('ArtistCtrl', ArtistCtrl);

})();

