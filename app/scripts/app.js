(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name artistsApp
   * @description
   * # artistsApp
   *
   * Main module of the application.
   * @ngInject
   */
  angular
    .module('artistsApp', [
      'ngAnimate',
      'ngRoute',
      'ui.bootstrap'
    ])
    .config(function ($routeProvider, $locationProvider) {
      $locationProvider
        .html5Mode(true);
      $routeProvider
        .when('/list', {
          templateUrl: 'views/list.html',
          controller: 'ArtistCtrl',
          controllerAs: 'artist'
        })
        .when('/details/:itemId', {
          templateUrl: 'views/details.html',
          controller: 'DetailsCtrl',
          controllerAs: 'details'
        })
        .otherwise({
          redirectTo: '/list'
        });
    });

})();
