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

    ArtistService.getArtists().success(function(data) {
      _this.artists = data;
    });
  }

  angular
    .module('artistsApp')
    .controller('ArtistCtrl', ArtistCtrl);

})();

