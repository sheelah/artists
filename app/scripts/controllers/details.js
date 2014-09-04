(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name artistsApp.controller:DetailsCtrl
   * @description
   * # DetailsCtrl
   *
   * # Controller for details view functionality
   * @ngInject
   */
  function DetailsCtrl($scope, $http, $routeParams, ArtistService) {
    var _this = this;

    ArtistService.getArtists().success(function(data) {
      _this.artists = data;
      _this.whichItem = $routeParams.itemId;
      _this.getPrevItem(_this.whichItem, _this.artists);
      _this.getNextItem(_this.whichItem, _this.artists);
    });
  }

  DetailsCtrl.prototype.getPrevItem = function(itemId, artists) {
    if (itemId > 0) {
      this.prevItem = Number(itemId) - 1;
    } else {
      this.prevItem = artists.length - 1;
    }
  };

  DetailsCtrl.prototype.getNextItem = function(itemId, artists) {
    if (itemId < artists.length - 1) {
      this.nextItem = Number(itemId) + 1;
    } else {
      this.nextItem = 0;
    }
  };

  angular
    .module('artistsApp')
    .controller('DetailsCtrl', DetailsCtrl);

})();

